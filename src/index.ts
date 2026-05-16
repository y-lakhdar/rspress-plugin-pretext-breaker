import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { RspressPlugin } from '@rspress/core';
import type { RspressPretextBreakerOptions } from './types';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const componentPath = path.join(dirname, 'PretextBreakerGlobalUI.js');
const require = createRequire(import.meta.url);
const stylesPath = require.resolve('pretext-breaker/styles.css');

export function pluginPretextBreaker(
  options: RspressPretextBreakerOptions = {},
): RspressPlugin {
  const { enabled = true } = options;

  return {
    name: 'rspress-plugin-pretext-breaker',
    globalUIComponents: enabled ? [[componentPath, options]] : [],
    ...(enabled ? { globalStyles: stylesPath } : {}),
  };
}

export default pluginPretextBreaker;
export { rspressBrickSources, rspressNavigationBrickSelector } from './rspress-brick-sources';
export type {
  RspressPretextBreakerDocumentBrickOptions,
  RspressPretextBreakerGameLabels,
  RspressPretextBreakerGameOptions,
  RspressPretextBreakerOptions,
} from './types';
