'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { AuthUser, ClearanceLevel } from '@/types/auth';
import {
  getStoredToken,
  onUnauthorizedResponse,
  setStoredToken,
} from '@/services/api';
import {
  authService,
  extractPermissionNames,
  extractRoleNames,
} from '@/services/authService';

const CLEARANCE_RANK: Record<ClearanceLevel, number> = {
  authenticated_member: 1,
  restricted_curator: 2,
  admin: 3,
};

const STAFF_ROLES = new Set([
  'Content Curator',
  'Admin',
  'Super Admin',
]);

interface AuthContextValue {
  user: AuthUser | null;
  roles: string[];
  permissions: string[];
  isAuthenticated: boolean;
  isLoading: boolean;
  canAccessAdmin: boolean;
  hasRole: (role: string | string[]) => boolean;
  hasPermission: (permission: string) => boolean;
  hasClearance: (required: ClearanceLevel) => boolean;
  login: (email: string, password: string, remember?: boolean) => Promise<AuthUser>;
  logout: () => Promise<void>;
  refreshSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const refreshSession = useCallback(async () => {
    const token = getStoredToken();
    if (!token) {
      setUser(null);
      setIsLoading(false);
      return;
    }

    try {
      const me = await authService.getMe(token);
      setUser(me);
    } catch {
      setStoredToken(null);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void refreshSession();
    const unsubscribe = onUnauthorizedResponse(() => {
      setUser(null);
    });
    return unsubscribe;
  }, [refreshSession]);

  const login = useCallback(
    async (email: string, password: string, remember = true) => {
      const res = await authService.login({ email, password }, remember);
      let loadedUser = res.user;
      try {
        // Re-fetch /auth/me to hydrate complete Spatie roles[] & permissions[]
        loadedUser = await authService.getMe();
      } catch {
        // Retain login user object if /auth/me is returned directly inside login
      }
      setUser(loadedUser);
      return loadedUser;
    },
    []
  );

  const logout = useCallback(async () => {
    await authService.logout();
    setUser(null);
  }, []);

  const roles = useMemo(() => extractRoleNames(user), [user]);
  const permissions = useMemo(() => extractPermissionNames(user), [user]);

  const hasRole = useCallback(
    (role: string | string[]) => {
      const targets = Array.isArray(role) ? role : [role];
      return targets.some((t) => roles.includes(t));
    },
    [roles]
  );

  const hasPermission = useCallback(
    (permission: string) => {
      if (roles.includes('Super Admin')) return true;
      return permissions.includes(permission);
    },
    [roles, permissions]
  );

  const hasClearance = useCallback(
    (required: ClearanceLevel) => {
      if (!user) return false;
      return (
        (CLEARANCE_RANK[user.clearance_level] || 0) >=
        (CLEARANCE_RANK[required] || 0)
      );
    },
    [user]
  );

  const canAccessAdmin = useMemo(() => {
    if (!user) return false;
    if (roles.some((r) => STAFF_ROLES.has(r))) return true;
    return (
      user.clearance_level === 'admin' ||
      user.clearance_level === 'restricted_curator'
    );
  }, [user, roles]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      roles,
      permissions,
      isAuthenticated: Boolean(user),
      isLoading,
      canAccessAdmin,
      hasRole,
      hasPermission,
      hasClearance,
      login,
      logout,
      refreshSession,
    }),
    [
      user,
      roles,
      permissions,
      isLoading,
      canAccessAdmin,
      hasRole,
      hasPermission,
      hasClearance,
      login,
      logout,
      refreshSession,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used inside AuthProvider.');
  }
  return ctx;
}
