export interface User {
  id: string;
  firstName?: string;
  lastName: string;
  email: string;
  country: string;
  role: 'user' | 'admin';
  phoneNumber:string;
  mainBalance:string;
}

export interface VerifyOtp {
  email: string;
  otp: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}


export interface RegisterCredentials extends Omit<User, '_id'> {
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// types/auth.ts
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  token: string | null;
}


export interface Referral {
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;      // ISO date string
  deposit_count: number;  // number of deposits
  discount: string;       // discount percentage in string
}

export interface ReferralResponse {
  success: boolean;
  referrals: Referral[];
}
