import { configuration } from '@codedoc/core';

import { theme } from './theme';

export const config = /*#__PURE__*/configuration({
  theme,
  // --> add the theme. modify `./theme.ts` for changing the theme.
  
  src: {
    base: 'md', // --> the base folder for all markdowns
    not_found: '404.md',
    // --> markdown file for 404 page, relative to `base`
  },

  page: {
    title: {
      base: '技術筆記' // --> the base title of your doc pages
    },
    fonts: { // --> font settings
      text: { // --> font used for texts
        url: // --> URL of font used for texts
          'https://fonts.googleapis.com/css?family=Noto+Sans+TC:400,700&display=swap',
        name: 'Noto Sans TC', // --> name of font used for texts
        fallback: 'sans-serif' // --> the fallback font for texts
      },
      code: { // --> font used for codes
        url: // --> URL of font used for codes
          'https://fonts.googleapis.com/css?family=Fira+Code:300,400&display=swap',
        name: 'Fira Code', // --> name of the font used for codes
        fallback: // --> fallback font for codes
          `'Courier New', Courier, monospace`
      }
    }
  },
  
  dest: {
    bundle: '/assets',
    // --> where to store codedoc's bundle (relative to `assets`)
    styles: '/assets',
    // --> where to store codedoc's styles (relative to `assets`)
    namespace: '/tech-notes',
    // --> root directory
  }
});
