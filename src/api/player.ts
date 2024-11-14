import { APIClient } from './client';

interface PlayerResponse {
  success: boolean;
  error_code: string;
  message: string;
  response: {
    player: {
      cl_player_id: string;
      image: string;
      username: string;
      exp: number;
      level: number;
      first_name: string;
      last_name: string;
      gender: number,
    }
  } | null;
}

export class Player {
  private apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  public getPlayer(): Promise<PlayerResponse> {
    return this.apiClient.get<PlayerResponse>(`/Player/${this.apiClient.playerId}`);
  }
}
