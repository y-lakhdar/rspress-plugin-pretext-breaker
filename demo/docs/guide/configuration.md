# Configuration

Most projects can start with the default setup:

```ts
import { defineConfig } from '@rspress/core';
import { pluginPretextBreaker } from 'rspress-plugin-pretext-breaker';

export default defineConfig({
  plugins: [pluginPretextBreaker()],
});
```

## Common options

- `enabled`: turn the plugin on or off.
- `trigger`: change the query param trigger from the default `?game=true`.
- `game.labels`: replace built-in text such as prompts and messages.
- `brickSources`: extend or replace the default Rspress brick selectors.
- `font`: adjust the overlay font.

## Example

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

For the full option surface, check the package README in the repository.
