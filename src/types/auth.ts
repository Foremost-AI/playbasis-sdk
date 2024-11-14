import type { Response } from './base';

interface Auth {
  token: string;
  date_expire: string;
}

interface PlayerAuth extends Auth {
  refresh_token: string;
}

export type AuthResponse = Response<Auth>;

export type PlayerAuthResponse = Response<PlayerAuth>;
