import { APIClient } from './client';

export class Engine {
  private apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  public async execute(action: string, params?: any): Promise<any> {
    return this.apiClient.post('/Engine/rule', { action, ...params });
  }
}
