import { z } from 'zod';
import {
  AuthUser,
  ForgotPasswordRequest,
  LoginRequest,
  LoginResponse,
  ResetPasswordRequest,
} from '@/types/auth';
import { apiFetch, getStoredToken, setStoredToken } from './api';

export const loginSchema = z.object({
  email: z.string().trim().email('Please enter a valid institutional email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
  device_name: z.string().optional(),
});

export const forgotPasswordSchema = z.object({
  email: z.string().trim().email('Please enter the email registered with your account.'),
});

export const resetPasswordSchema = z
  .object({
    email: z.string().trim().email('Invalid email address.'),
    token: z.string().min(6, 'Reset token is required.'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters.')
      .regex(/[A-Z]/, 'Include at least one uppercase letter.')
      .regex(/[0-9]/, 'Include at least one number.'),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'Passwords do not match.',
    path: ['password_confirmation'],
  });

export function extractRoleNames(user: AuthUser | null | undefined): string[] {
  if (!user?.roles) return [];
  return user.roles.map((r) => (typeof r === 'string' ? r : r.name));
}

export function extractPermissionNames(user: AuthUser | null | undefined): string[] {
  if (!user) return [];
  const names = new Set<string>();

  if (Array.isArray(user.all_permissions)) {
    user.all_permissions.forEach((p) => p && names.add(p));
  }

  if (Array.isArray(user.permissions)) {
    user.permissions.forEach((p) => {
      const name = typeof p === 'string' ? p : p?.name;
      if (name) names.add(name);
    });
  }

  if (Array.isArray(user.roles)) {
    user.roles.forEach((role) => {
      if (typeof role === 'object' && Array.isArray(role.permissions)) {
        role.permissions.forEach((p) => {
          if (p?.name) names.add(p.name);
        });
      }
    });
  }

  return Array.from(names);
}

export const authService = {
  async login(
    payload: LoginRequest,
    remember = true
  ): Promise<LoginResponse> {
    const validated = loginSchema.parse({
      ...payload,
      device_name: payload.device_name || 'heritage-archive-web',
    });

    const response = await apiFetch<LoginResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(validated),
      skipUnauthorizedEvent: true,
    });

    const token = response.token || response.access_token || null;
    if (token) {
      setStoredToken(token, remember);
    }

    return response;
  },

  async logout(): Promise<void> {
    try {
      if (getStoredToken()) {
        await apiFetch<void>('/auth/logout', {
          method: 'POST',
          skipUnauthorizedEvent: true,
        });
      }
    } finally {
      setStoredToken(null);
    }
  },

  async getMe(token?: string | null): Promise<AuthUser> {
    return apiFetch<AuthUser>('/auth/me', {
      method: 'GET',
      token,
      skipUnauthorizedEvent: true,
    });
  },

  async forgotPassword(
    payload: ForgotPasswordRequest
  ): Promise<{ message: string }> {
    const validated = forgotPasswordSchema.parse(payload);
    return apiFetch<{ message: string }>('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify(validated),
      skipUnauthorizedEvent: true,
    });
  },

  async resetPassword(
    payload: ResetPasswordRequest
  ): Promise<{ message: string }> {
    const validated = resetPasswordSchema.parse(payload);
    return apiFetch<{ message: string }>('/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify(validated),
      skipUnauthorizedEvent: true,
    });
  },
};
