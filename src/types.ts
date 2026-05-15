import type {
  DocumentBrickSetOptions,
  DocumentBrickSource,
  PretextBreakerFontOptions,
  PretextBreakerGameOptions,
  PretextBreakerLabels,
  PretextBreakerTriggerOptions,
} from '@ylakhdar/pretext-breaker';

export type RspressPretextBreakerDocumentBrickOptions = Omit<
  DocumentBrickSetOptions,
  'valueForElement'
>;

export interface RspressPretextBreakerGameLabels {
  title?: string;
  serveTitle?: string;
  servePrompt?: string;
  gameOverTitle?: string;
  gameOverPrompt?: string;
  clearedTitle?: string;
  clearedPrompt?: string;
  levelClear?: string;
  reflowingLevel?: string;
}

export interface RspressPretextBreakerGameOptions extends Omit<
  PretextBreakerGameOptions,
  'documentBricks' | 'labels'
> {
  documentBricks?: RspressPretextBreakerDocumentBrickOptions;
  labels?: RspressPretextBreakerGameLabels;
}

export interface RspressPretextBreakerOptions {
  enabled?: boolean;
  trigger?: PretextBreakerTriggerOptions;
  game?: RspressPretextBreakerGameOptions;
  documentBricks?: RspressPretextBreakerDocumentBrickOptions;
  brickSources?: readonly DocumentBrickSource[];
  font?: PretextBreakerFontOptions;
  labels?: PretextBreakerLabels;
  className?: string;
  bodyScrollLock?: boolean;
}
