import type {
  PlayerResponse,
  PointResponse,
  PointsResponse,
  RegisterRequest,
  RegisterResponse,
} from '../types/player';

import { APIClient } from './client';

export class Player {
  private apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  public register(id: string, data?: RegisterRequest): Promise<RegisterResponse> {
    return this.apiClient.post<RegisterResponse>(`/Player/${id}/register`, {
      ...data,
      username: data?.username ?? id,
    });
  }

  public getPlayer(): Promise<PlayerResponse> {
    return this.apiClient.get<PlayerResponse>(`/Player/${this.apiClient.playerId}`);
  }

  public listPoints(): Promise<PointsResponse> {
    return this.apiClient.get<PointsResponse>(`/Player/${this.apiClient.playerId}/points`);
  }

  public getPoint(name: string): Promise<PointResponse> {
    return this.apiClient.get<PointResponse>(`/Player/${this.apiClient.playerId}/point/${name}`);
  }
}
