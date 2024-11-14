import { APIClient, DEFAULT_BASE_URL } from './api/client';
import { Auth } from './api/auth';
import { Engine } from './api/engine';
import { Player } from './api/player';

export class PlaybasisSDK {
  private apiClient: APIClient;
  public auth: Auth;
  public engine: Engine;
  public player: Player;

  constructor(apiKey: string, apiSecret: string, baseURL: string = DEFAULT_BASE_URL) {
    this.apiClient = new APIClient(apiKey, apiSecret, baseURL);
    this.auth = new Auth(this.apiClient);
    this.engine = new Engine(this.apiClient);
    this.player = new Player(this.apiClient);
  }

  static async build(apiKey: string, apiSecret: string, baseURL: string = DEFAULT_BASE_URL) {
    const sdk = new PlaybasisSDK(apiKey, apiSecret, baseURL);
    await sdk.apiClient.auth();
    return sdk;
  }
 
  public setPlayerId(playerId: string) {
    this.apiClient.setPlayerId(playerId);
  }
}
