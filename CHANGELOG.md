# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.1.0] - 2024-11-15
### :sparkles: New Features
- [`fd33ccb`](https://github.com/Foremost-AI/playbasis-sdk/commit/fd33ccbb2ee43864c406d5e0a2d0c1e3521829b2) - support auto renew the expired token *(commit by [@thanakij-ai](https://github.com/thanakij-ai))*
- [`7e0f592`](https://github.com/Foremost-AI/playbasis-sdk/commit/7e0f5922257a71fe5322ed2386ea0adb72d6fc54) - add typed hint for sdk.engine.* *(commit by [@thanakij-ai](https://github.com/thanakij-ai))*
- [`60acfaa`](https://github.com/Foremost-AI/playbasis-sdk/commit/60acfaa9cee43ab3144085f9370d9a2d10dd268d) - update test as well *(commit by [@thanakij-ai](https://github.com/thanakij-ai))*
- [`dd93631`](https://github.com/Foremost-AI/playbasis-sdk/commit/dd9363163d06ccbafa141e7eaba5675fd2e00f4c) - add sdk.player.register() *(commit by [@thanakij-ai](https://github.com/thanakij-ai))*
- [`abbe38d`](https://github.com/Foremost-AI/playbasis-sdk/commit/abbe38d3ee5571522d447f00347a4c94ceb16f8c) - add sdk.player.{listPoints,getPoint} *(commit by [@thanakij-ai](https://github.com/thanakij-ai))*
- [`f60d6cd`](https://github.com/Foremost-AI/playbasis-sdk/commit/f60d6cda18d5a17fe2d76af10a8140aac7d246e1) - add sdk.auth.login for player login *(commit by [@thanakij-ai](https://github.com/thanakij-ai))*

### :bug: Bug Fixes
- [`fb014e9`](https://github.com/Foremost-AI/playbasis-sdk/commit/fb014e985ece1bf6b532bfcea26c268fe6027206) - add '| null' *(commit by [@thanakij-ai](https://github.com/thanakij-ai))*
- [`17caad4`](https://github.com/Foremost-AI/playbasis-sdk/commit/17caad44bbcb4a5a9f59149328ff3760103c968f) - correct import *(commit by [@thanakij-ai](https://github.com/thanakij-ai))*

### :recycle: Refactors
- [`c6ef450`](https://github.com/Foremost-AI/playbasis-sdk/commit/c6ef450f38e3711678846964e9a7091b799a63a7) - email is no longer required when register a player *(commit by [@thanakij-ai](https://github.com/thanakij-ai))*
- [`ebb3b47`](https://github.com/Foremost-AI/playbasis-sdk/commit/ebb3b474646829879b0899e44025910ab602522a) - extract types into src/types *(commit by [@thanakij-ai](https://github.com/thanakij-ai))*
- [`e42a520`](https://github.com/Foremost-AI/playbasis-sdk/commit/e42a52011dfc9e23cf45af2e17daab2b53502fd1) - use 'discriminated union type' for conditioning 'response' on 'success' *(commit by [@thanakij-ai](https://github.com/thanakij-ai))*
- [`ee6858c`](https://github.com/Foremost-AI/playbasis-sdk/commit/ee6858c1d78c24fe054c8c3a86a38d5f8ea9436b) - auto call setPlayerId() when using player auth *(commit by [@thanakij-ai](https://github.com/thanakij-ai))*


## [v1.0.1] - 2024-11-12
### :bug: Bug Fixes
- [`a365f2b`](https://github.com/Foremost-AI/playbasis-sdk/commit/a365f2b76dfc2a6119cbd932f22d7335ade00cf1) - make sure declaration files are generated during tsc *(commit by [@thanakij-ai](https://github.com/thanakij-ai))*

[v1.0.1]: https://github.com/Foremost-AI/playbasis-sdk/compare/v1.0.0...v1.0.1
[v1.1.0]: https://github.com/Foremost-AI/playbasis-sdk/compare/v1.0.1...v1.1.0
