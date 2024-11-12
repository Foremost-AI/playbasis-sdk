import axios, { AxiosInstance } from 'axios';

export const DEFAULT_BASE_URL = 'http://localhost/api';

interface AuthResponse {
  success: boolean;
  error_code: string;
  message: string;
  response: {
    token: string;
    date_expire: string;
  } | null;
}

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

  public setPlayerId(playerId: string) {
    this.playerId = playerId;
  }

  public get<T>(endpoint: string, params?: any): Promise<T> {
    if (!params) params = {};
    params.api_key = this.apiKey;
    return this.client.get(endpoint, { params }).then(res => res.data);
  }

  public post<T>(endpoint: string, data?: any): Promise<T> {
    if (!data) data = {};
    if (!endpoint.startsWith('/Auth')) data.token = this.token;
    data.player_id = this.playerId;
    return this.client.post(endpoint, data).then(res => res.data);
  }

  public put<T>(endpoint: string, data: any): Promise<T> {
    if (!data) data = {};
    data.token = this.token;
    data.player_id = this.playerId;
    return this.client.put(endpoint, data).then(res => res.data);
  }

  public delete<T>(endpoint: string, params?: any): Promise<T> {
    if (!params) params = {};
    params.api_key = this.apiKey;
    return this.client.delete(endpoint, { params }).then(res => res.data);
  }
}
