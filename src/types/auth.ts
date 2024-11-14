import type { Response } from './base';

export interface AuthResponse extends Response {
  response: {
    token: string;
    date_expire: string;
  } | null;
}

export interface PlayerAuthResponse extends Response {
  response: {
    token: string;
    refresh_token: string;
    date_expire: string;
  } | null;
}
