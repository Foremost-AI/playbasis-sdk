import axios, { AxiosInstance } from 'axios';

import type { AuthResponse } from '../types/auth';

export const DEFAULT_BASE_URL = 'http://localhost/api';
const MAX_RETRIES = 1

export class APIClient {
  private client: AxiosInstance;
  private apiKey: string;
  private apiSecret: string;
  private token: string | undefined;
  public playerId: string | undefined;

  constructor(apiKey: string, apiSecret: string, baseURL: string = DEFAULT_BASE_URL) {
    this.client = axios.create({ baseURL, headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
  }

  public async auth() {
    const data = await this.post<AuthResponse>('/Auth', { api_key: this.apiKey, api_secret: this.apiSecret })
    const token = data.response?.token;
    this.token = token;
  }

  public async renew() {
    const data = await this.post<AuthResponse>('/Auth/renew', { api_key: this.apiKey, api_secret: this.apiSecret })
    const token = data.response?.token;
    this.token = token;
  }

  public setPlayerId(playerId: string) {
    this.playerId = playerId;
  }

  public get<T>(endpoint: string, params?: any): Promise<T> {
    if (!params) params = {};
    params.api_key = this.apiKey;
    return this.client.get(endpoint, { params }).then(res => res.data);
  }

  public async post<T>(endpoint: string, data?: any, retry: number = 0): Promise<T> {
    if (!data) data = {};
    if (!endpoint.startsWith('/Auth')) data.token = this.token;
    else data.api_key = this.apiKey;
    data.player_id = this.playerId;
    const response = (await this.client.post(endpoint, data)).data;
    if (!response['success'] && response['error_code'] === '0900' && response['message'] === 'Invalid token Key') {
      if (retry >= MAX_RETRIES) throw new Error('Reached MAX_RETRIES');
      await this.renew();
      return this.post<T>(endpoint, data, retry + 1);
    }
    return response;
  }

  public async put<T>(endpoint: string, data?: any, retry: number = 0): Promise<T> {
    if (!data) data = {};
    if (!endpoint.startsWith('/Auth')) data.token = this.token;
    else data.api_key = this.apiKey;
    data.player_id = this.playerId;
    const response = (await this.client.put(endpoint, data)).data;
    if (!response['success'] && response['error_code'] === '0900' && response['message'] === 'Invalid token Key') {
      if (retry >= MAX_RETRIES) throw new Error('Reached MAX_RETRIES');
      await this.renew();
      return this.put<T>(endpoint, data, retry + 1);
    }
    return response;
  }

  public delete<T>(endpoint: string, params?: any): Promise<T> {
    if (!params) params = {};
    params.api_key = this.apiKey;
    return this.client.delete(endpoint, { params }).then(res => res.data);
  }
}
