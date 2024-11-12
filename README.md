# Playbasis SDK for TypeScript

## Installation
```bash
npm install playbasis-sdk
```

## Usage
```typescript
import { PlaybasisSDK } from 'playbasis-sdk';

const sdk = await PlaybasisSDK.build(<PLAYBASIS_API_KEY>, <PLAYBASIS_API_SECRET>, <PLAYBASIS_API_URL>);

sdk.setPlayerId('test');
const player = await sdk.player.getPlayer();
const result = await sdk.engine.execute('login');
```
