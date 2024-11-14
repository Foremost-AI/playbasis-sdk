import type { PlayerAuthResponse } from '../types/auth';

import { APIClient } from './client';

export class Auth {
  private apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  public login(id: string, password: string = 'password') {
    return this.apiClient.post<PlayerAuthResponse>(`/Auth/player/${id}`, { password });
  }
}
