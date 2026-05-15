import {
  contentBrickSelector,
  navigationBrickSelector,
  type DocumentBrickSource,
} from '@ylakhdar/pretext-breaker';

export const rspressNavigationBrickSelector = [
  navigationBrickSelector,
  '.rp-sidebar-item',
  '.rp-sidebar-section-title',
  '.rp-sidebar-group-title',
  '.rp-aside-outline-link',
  '.rp-toc-item__text',
].join(', ');

export const rspressBrickSources: readonly DocumentBrickSource[] = [
  {
    rootSelector: '.rspress-doc, main',
    itemSelector: contentBrickSelector,
  },
  {
    rootSelector: '.rp-sidebar, .rspress-sidebar, aside[class*="sidebar"], nav[class*="sidebar"]',
    itemSelector: rspressNavigationBrickSelector,
  },
  {
    rootSelector: '.rp-aside, .rspress-aside, .rp-doc-layout__outline, aside[class*="aside"], nav[class*="aside"]',
    itemSelector: rspressNavigationBrickSelector,
  },
];