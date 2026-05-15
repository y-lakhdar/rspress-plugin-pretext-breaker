# @ylakhdar/rspress-plugin-pretext-breaker

Rspress plugin adapter for [`@ylakhdar/pretext-breaker`](https://www.npmjs.com/package/@ylakhdar/pretext-breaker).

It registers Pretext Breaker as a Rspress global UI component and uses the Rspress sidebar, outline, and document selectors by default.
It also registers the Pretext Breaker stylesheet through Rspress `globalStyles`.

## Installation

```bash
pnpm add @ylakhdar/rspress-plugin-pretext-breaker
```

The plugin depends on `@ylakhdar/pretext-breaker` internally, so Rspress projects don't need to install the React package separately unless they also import it directly.

## Usage

```ts
import { defineConfig } from '@rspress/core';
import { pluginPretextBreaker } from '@ylakhdar/rspress-plugin-pretext-breaker';

export default defineConfig({
  plugins: [
    pluginPretextBreaker(),
  ],
});
```

The game listens for the Konami code by default and also activates when the current URL contains `?game=true`.

## Options

```ts
pluginPretextBreaker({
  trigger: {
    queryParam: 'game',
    queryValue: 'true',
  },
  game: {
    labels: {
      servePrompt: 'Tap or press up to launch. Left/right or mouse to move. ESC to quit.',
      gameOverPrompt: 'Score: {score}. Tap or press R to retry.',
      reflowingLevel: 'REFLOWING LEVEL {level}',
    },
  },
});
```

Most options mirror `PretextBreaker` from `@ylakhdar/pretext-breaker`, including trigger, font, game tuning, and DOM brick selector options.

The plugin owns the Rspress-specific brick selectors. If you need to customize them, import `rspressBrickSources` from this plugin package and extend that list rather than importing a Rspress preset from the React package.

Rspress serializes `globalUIComponents` props, so plugin options must be JSON-serializable. For labels that are functions in the React package, use string templates instead:

- `gameOverPrompt`: supports `{score}`
- `clearedPrompt`: supports `{score}`
- `reflowingLevel`: supports `{level}`

## Local Development

From this package folder:

```bash
pnpm install
pnpm build
```

To consume it from a sibling Rspress project before publishing:

```json
{
  "dependencies": {
    "@ylakhdar/rspress-plugin-pretext-breaker": "link:../../rspress-plugin-pretext-breaker"
  }
}
```
