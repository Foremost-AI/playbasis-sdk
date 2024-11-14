import { APIClient } from './client';

enum Gender {
  MALE = 1,
  FEMALE = 2,
}

enum ApproveStatus {
  APPROVED = 'approved',
  REJECTED = 'rejected',
  PENDING = 'pending',
}

interface RegisterRequest {
  username?: string;
  password?: string;
  email?: string;
  phone_number?: string;
  first_name?: string;
  last_name?: string;
  gender?: Gender;
  birth_date?: string;
  code?: string;
  image?: string;
  tags?: string;
  device_id?: string;
  approve_status?: ApproveStatus;
}

interface RegisterResponse {
  success: boolean,
  error_code: string,
  message: string,
  response: any[],
}

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

  public register(id: string, data?: RegisterRequest): Promise<RegisterResponse> {
    return this.apiClient.post<RegisterResponse>(`/Player/${id}/register`, {
      ...data,
      username: data?.username ?? id,
    });
  }

  public getPlayer(): Promise<PlayerResponse> {
    return this.apiClient.get<PlayerResponse>(`/Player/${this.apiClient.playerId}`);
  }
}
