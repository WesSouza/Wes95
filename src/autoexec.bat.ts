import { enableMapSet } from 'immer';
import React, { createElement } from 'react';
import { createRoot } from 'react-dom/client';

import { WesExplorer } from './system/WesExplorer';

enableMapSet();

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).state = require('./state');

const element = document.getElementById('vga');
if (!element) {
  throw new Error('Please connect a monitor');
}

const root = createRoot(element);
root.render(createElement(WesExplorer));
