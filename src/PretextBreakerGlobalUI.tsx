import {
  PretextBreaker,
  type PretextBreakerGameLabels,
  type PretextBreakerGameOptions,
} from 'pretext-breaker';
import { rspressBrickSources } from './rspress-brick-sources';
import type {
  RspressPretextBreakerGameLabels,
  RspressPretextBreakerGameOptions,
  RspressPretextBreakerOptions,
} from './types';

function formatTemplate(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (
    Object.prototype.hasOwnProperty.call(values, key) ? String(values[key]) : match
  ));
}

function resolveGameLabels(
  labels?: RspressPretextBreakerGameLabels,
): Partial<PretextBreakerGameLabels> | undefined {
  if (!labels) return undefined;

  const {
    gameOverPrompt,
    clearedPrompt,
    reflowingLevel,
    ...staticLabels
  } = labels;

  return {
    ...staticLabels,
    ...(gameOverPrompt === undefined
      ? {}
      : { gameOverPrompt: (score: string) => formatTemplate(gameOverPrompt, { score }) }),
    ...(clearedPrompt === undefined
      ? {}
      : { clearedPrompt: (score: string) => formatTemplate(clearedPrompt, { score }) }),
    ...(reflowingLevel === undefined
      ? {}
      : { reflowingLevel: (level: number) => formatTemplate(reflowingLevel, { level }) }),
  };
}

function resolveGameOptions(
  game?: RspressPretextBreakerGameOptions,
): PretextBreakerGameOptions | undefined {
  if (!game) return undefined;

  const { labels, ...gameOptions } = game;
  return {
    ...gameOptions,
    labels: resolveGameLabels(labels),
  };
}

export default function PretextBreakerGlobalUI(
  props: RspressPretextBreakerOptions = {},
) {
  const {
    enabled = true,
    game,
    documentBricks,
    brickSources,
    ...pretextBreakerProps
  } = props;

  if (!enabled) return null;

  const resolvedBrickSources = brickSources
    ?? documentBricks?.sources
    ?? game?.documentBricks?.sources
    ?? rspressBrickSources;

  return (
    <PretextBreaker
      {...pretextBreakerProps}
      brickSources={resolvedBrickSources}
      documentBricks={documentBricks}
      game={resolveGameOptions(game)}
    />
  );
}
