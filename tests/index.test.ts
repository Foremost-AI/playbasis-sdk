import { PlaybasisSDK } from '../src/index';

const SECONDS = 1000 // ms

describe('PlaybasisSDK', () => {
  it('should fetch player details', async () => {
    const { PLAYBASIS_API_KEY, PLAYBASIS_API_SECRET, PLAYBASIS_API_URL } = process.env;

    const sdk = await PlaybasisSDK.build(PLAYBASIS_API_KEY!, PLAYBASIS_API_SECRET!, PLAYBASIS_API_URL!);

    const playerToken = await sdk.auth.login('test');
    expect(playerToken).toBeDefined();
    expect(playerToken.success).toBeTruthy();
    expect(playerToken.response).not.toBeNull();
    expect(playerToken.response?.token).toBeTruthy();
    expect(playerToken.response?.refresh_token).toBeTruthy();

    //sdk.setPlayerId('test');

    const player = await sdk.player.getPlayer();
    expect(player).toBeDefined();
    expect(player.success).toBeTruthy();
    expect(player.response).not.toBeNull();
    expect(player.response?.player.cl_player_id).not.toBeFalsy();
    expect(player.response?.player.username).not.toBeFalsy();

    const points = await sdk.player.listPoints();
    expect(points).toBeDefined();
    expect(points.success).toBeTruthy();
    expect(points.response).not.toBeNull();
    expect(points.response?.points).toBeTruthy();

    const point = await sdk.player.getPoint('exp');
    expect(point).toBeDefined();
    expect(point.success).toBeTruthy();
    expect(point.response).not.toBeNull();
    expect(point.response?.point).toBeTruthy();

    const result = await sdk.engine.execute('login');
    expect(result).toBeDefined();
    expect(result.success).toBeTruthy();
    expect(result.response).not.toBeNull();
    expect(result.response?.events).toBeTruthy();
    expect(result.response?.events_missions).toBeTruthy();
    expect(result.response?.events_quests).toBeTruthy();
  }, 10 * SECONDS);
});
