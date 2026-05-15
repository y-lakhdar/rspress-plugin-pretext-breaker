# Pretext Breaker for Rspress

`@ylakhdar/rspress-plugin-pretext-breaker` adds the Pretext Breaker game to an Rspress site. It turns page structure like headings, sidebar items, and outline links into Breakout-style bricks.

If you want the bigger idea behind PreTeXt, start with the official docs: https://pretextbook.org/documentation.html

## Quick Start

### Installation

```bash
pnpm add @ylakhdar/rspress-plugin-pretext-breaker
```

### Configuration

Register the plugin in `rspress.config.ts`:

```ts
import { defineConfig } from '@rspress/core';
import { pluginPretextBreaker } from '@ylakhdar/rspress-plugin-pretext-breaker';

export default defineConfig({
  plugins: [
    pluginPretextBreaker()
  ],
});
```

The game opens with the Konami code (`↑↑↓↓←→←→BA`) or `?game=true`.

## Features

- Works out of the box in Rspress.
- Uses Rspress docs structure as brick sources.
- Supports a query-param trigger and the Konami code.
- Lets you customize labels, triggers, fonts, and brick sources.
