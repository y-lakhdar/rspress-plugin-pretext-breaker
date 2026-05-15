# Features

The plugin keeps the setup small and the effect obvious: it turns your Rspress page into a playable Breakout layer.

## What it does

- Uses headings, sidebar items, and outline links as bricks.
- Starts with the Konami code or a URL trigger such as `?game=true`.
- Works with mouse, keyboard, and touch input.
- Lets you customize labels, fonts, and brick sources.

## Example

```ts
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
})
```
