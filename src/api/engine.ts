import { APIClient } from './client';

interface Event {
  event_type: string;
  reward_type?: string;
  reward_data?: any;
  value: any;
}

interface EventMission {
  events: Event[];
  mission_id: string;
  mission_number: string;
  mission_name: string;
  description: string;
  hint: string;
  image: string;
  quest_id: string;
}

interface EventQuest {
  events: Event[];
  quest_id: string;
  quest_name: string;
  description: string;
  hint: string;
  image: string;
}

interface EngineResponse {
  success: boolean;
  error_code: string;
  message: string;
  response: {
    events: Event[];
    events_missions: EventMission[];
    events_quests: EventQuest[];
  } | null;
}

export class Engine {
  private apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  public execute(action: string, params?: any): Promise<EngineResponse> {
    return this.apiClient.post<EngineResponse>('/Engine/rule', { action, ...params });
  }
}
