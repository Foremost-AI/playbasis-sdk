import type { EngineResponse } from '../types/engine';

import { APIClient } from './client';

export class Engine {
  private apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  public execute(action: string, params?: any): Promise<EngineResponse> {
    return this.apiClient.post<EngineResponse>('/Engine/rule', { action, ...params });
  }
}
