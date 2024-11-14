import type { Response } from './base';

export interface AuthResponse extends Response {
  response: {
    token: string;
    date_expire: string;
  } | null;
}
