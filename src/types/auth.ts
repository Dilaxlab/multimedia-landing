export type ClearanceLevel =
  | 'authenticated_member'
  | 'restricted_curator'
  | 'admin';

export type SystemRoleName =
  | 'Viewer'
  | 'Content Curator'
  | 'Admin'
  | 'Super Admin';

export interface Permission {
  id: number;
  name: string;
  module_group?: string | null;
  guard_name?: string;
}

export interface Role {
  id: number;
  name: SystemRoleName | string;
  guard_name?: string;
  description?: string | null;
  is_system?: boolean;
  permissions?: Permission[];
}

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  is_active: boolean;
  must_verify_email?: boolean;
  clearance_level: ClearanceLevel;
  phone?: string | null;
  bio?: string | null;
  institution_name?: string | null;
  department_title?: string | null;
  avatar_url?: string | null;
  last_login_at?: string | null;
  email_verified_at?: string | null;
  roles: (Role | string)[];
  permissions?: (Permission | string)[];
  all_permissions?: string[];
}

export interface LoginRequest {
  email: string;
  password: string;
  device_name?: string;
}

export interface LoginResponse {
  token?: string;
  access_token?: string;
  token_type?: string;
  user: AuthUser;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  email: string;
  token: string;
  password: string;
  password_confirmation: string;
}

export interface ActivityLogEntry {
  id: number;
  log_name?: string | null;
  description: string;
  subject_type?: string | null;
  subject_id?: string | null;
  event?: string | null;
  causer_id?: number | null;
  causer?: Pick<AuthUser, 'id' | 'name' | 'email'> | null;
  properties?: Record<string, unknown> | null;
  created_at: string;
}
