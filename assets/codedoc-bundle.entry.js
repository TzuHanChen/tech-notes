import { getRenderer } from 'C:/4_project/08_技術筆記/tech-notes/.codedoc/node_modules/@codedoc/core/dist/es5/transport/renderer.js';
import { initJssCs } from 'C:/4_project/08_技術筆記/tech-notes/.codedoc/node_modules/@codedoc/core/dist/es5/transport/setup-jss.js';initJssCs();
import { installTheme } from 'C:/4_project/08_技術筆記/tech-notes/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from 'C:/4_project/08_技術筆記/tech-notes/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from 'C:/4_project/08_技術筆記/tech-notes/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from 'C:/4_project/08_技術筆記/tech-notes/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from 'C:/4_project/08_技術筆記/tech-notes/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from 'C:/4_project/08_技術筆記/tech-notes/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from 'C:/4_project/08_技術筆記/tech-notes/.codedoc/node_modules/@codedoc/core/dist/es5/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from 'C:/4_project/08_技術筆記/tech-notes/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from 'C:/4_project/08_技術筆記/tech-notes/.codedoc/node_modules/@codedoc/core/dist/es5/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from 'C:/4_project/08_技術筆記/tech-notes/.codedoc/node_modules/@codedoc/core/dist/es5/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from 'C:/4_project/08_技術筆記/tech-notes/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from 'C:/4_project/08_技術筆記/tech-notes/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from 'C:/4_project/08_技術筆記/tech-notes/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from 'C:/4_project/08_技術筆記/tech-notes/.codedoc/node_modules/@codedoc/core/dist/es5/components/footnote/gather-footnotes.js';gatherFootnotes();
import { CollapseControl } from 'C:/4_project/08_技術筆記/tech-notes/.codedoc/node_modules/@codedoc/core/dist/es5/components/collapse/collapse-control.js';
import { ToCToggle } from 'C:/4_project/08_技術筆記/tech-notes/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from 'C:/4_project/08_技術筆記/tech-notes/.codedoc/node_modules/@codedoc/core/dist/es5/components/darkmode/index.js';
import { ConfigTransport } from 'C:/4_project/08_技術筆記/tech-notes/.codedoc/node_modules/@codedoc/core/dist/es5/transport/config.js';
import { ToCPrevNext } from 'C:/4_project/08_技術筆記/tech-notes/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/prevnext/index.js';
import { TabSelector } from 'C:/4_project/08_技術筆記/tech-notes/.codedoc/node_modules/@codedoc/core/dist/es5/components/tabs/selector.js';

const components = {
  '3CzT/DeurVY72KOmv8QxOg==': CollapseControl,
  '2/8yTaStabWq6q5XPUNE7Q==': ToCToggle,
  'Xo4E+Yi4TTF+FEZppU8VzA==': DarkModeSwitch,
  'UhcS1aCXHvD7lkbwcpcOdA==': ConfigTransport,
  'EdVgtWAZdRuszXCayU4nDg==': ToCPrevNext,
  'kFnmx6pDnoyZxqRvCeJt4g==': TabSelector
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
