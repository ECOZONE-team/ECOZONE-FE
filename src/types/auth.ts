export interface SignupRequest {
  email: string;
  name: string;
  password: string;
}

export interface RefreshRequest {
  refreshToken: string;
}

export interface RefreshResponse {
  tokenType: string;
  accessToken: string;
  refreshToken: string;
  expiresInSeconds: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  tokenType: string;
  accessToken: string;
  refreshToken: string;
  expiresInSeconds: number;
}
