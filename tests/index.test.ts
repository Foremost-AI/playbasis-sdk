import { PlaybasisSDK } from '../src/index';

describe('PlaybasisSDK', () => {
  it('should fetch player details', async () => {
    const { PLAYBASIS_API_KEY, PLAYBASIS_API_SECRET, PLAYBASIS_API_URL } = process.env;

    const sdk = await PlaybasisSDK.build(PLAYBASIS_API_KEY!, PLAYBASIS_API_SECRET!, PLAYBASIS_API_URL!);

    sdk.setPlayerId('test');

    const player = await sdk.player.getPlayer();
    expect(player).toBeDefined();
    expect(player.success).toBeTruthy();
    expect(player.response).not.toBeNull();
    expect(player.response.player.cl_player_id).not.toBeFalsy();
    expect(player.response.player.username).not.toBeFalsy();

    const result = await sdk.engine.execute('login');
    expect(result).toBeDefined();
    expect(result.success).toBeTruthy();
    expect(result.response).not.toBeNull();
    expect(result.response.events).toBeTruthy();
    expect(result.response.events_missions).toBeTruthy();
    expect(result.response.events_quests).toBeTruthy();
  });
});
