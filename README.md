# rspress-plugin-pretext-breaker

Add the Pretext Breaker game to an Rspress site. It turns page structure such as headings, sidebar items, and outline links into Breakout-style bricks.

**[Live demo →](https://y-lakhdar.github.io/rspress-plugin-pretext-breaker/)**

## Install

```bash
pnpm add rspress-plugin-pretext-breaker
```

## Usage

```ts
import { defineConfig } from '@rspress/core';
import { pluginPretextBreaker } from 'rspress-plugin-pretext-breaker';

export default defineConfig({
  plugins: [pluginPretextBreaker()],
});
```

By default, the game opens with the Konami code or `?game=true`.

## What it does

- Works out of the box in Rspress.
- Uses Rspress content, sidebar items, and outline links as brick sources.
- Supports mouse, keyboard, and touch input.
- Lets you customize triggers, labels, fonts, and brick sources.

## Configuration

```ts
import { defineConfig } from '@rspress/core';
import {
  pluginPretextBreaker,
  rspressBrickSources,
} from 'rspress-plugin-pretext-breaker';

export default defineConfig({
  plugins: [
    pluginPretextBreaker({
      trigger: {
        queryParam: 'play',
        queryValue: 'now',
      },
      game: {
        labels: {
          gameOverPrompt: 'Score: {score}. Press R to retry.',
        },
      },
      brickSources: [
        ...rspressBrickSources,
        {
          rootSelector: '.extra-content',
          itemSelector: 'a',
        },
      ],
    }),
  ],
});
```
