import type { PlayerAuthResponse } from '../types/auth';

import { APIClient } from './client';

export class Auth {
  private apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  public async login(id: string, password: string = 'password') {
    const result = await this.apiClient.post<PlayerAuthResponse>(`/Auth/player/${id}`, { password });
    if (result.success) {
      this.apiClient.setPlayerId(id, result.response);
    }
    return result;
  }
}
