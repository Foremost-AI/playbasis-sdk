import type { Response } from './base';

export interface Auth {
  token: string;
  refresh_token: string;
  date_expire: string;
}

export type AuthResponse = Response<Auth>;
