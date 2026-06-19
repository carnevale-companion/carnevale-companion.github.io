// ── AP / CP / command-name highlighter ─────────────────────────────────
(function () {
  // Named groups determine which class to apply:
  //   cp: Command Point(s), CP, PLAN, ORDER, COUNTER, ABILITY, AURA, PULSE, Cast Off  → green
  //   ap: Action Point(s), AP                                   → orange
  // Each group: optional-sign+number before full word · full word alone ·
  //             optional-sign+number before abbreviation · abbreviation before number · standalone abbreviation
  var N = '\\d+(?:\\.\\d+)?'; // integer or decimal, e.g. 2 or 2.6
  var PATTERN = new RegExp(
    '(?<cp>(?:(?:[+-]?' + N + '|\\(X\\))\\s+)?Command Points?|(?<!\\w)[+-]?' + N + '[-\\s]*CP\\b|\\bCP\\s+' + N + '\\b|\\bCP\\b|\\bPLAN\\b|\\bORDER\\b|\\bCOUNTER\\b|\\bABILITY\\b|\\bAURA\\b|\\bPULSE\\b|Cast Off)|' +
    '(?<ap>(?:(?:[+-]?' + N + '|\\(X\\))\\s+)?Action Points?|(?<!\\w)[+-]?' + N + '[-\\s]*AP\\b|\\bAP\\s+' + N + '\\b|\\bAP\\b)|' +
    '(?<lp>(?:(?:[+-]?' + N + '|\\(X\\))\\s+)?Life Points?|(?<!\\w)[+-]?' + N + '[-\\s]*LP\\b|\\bLP\\s+' + N + '\\b|\\bLP\\b)|' +
    '(?<wp>(?:(?:[+-]?' + N + '|\\(X\\))\\s+)?Will Points?|(?<!\\w)[+-]?' + N + '[-\\s]*WP\\b|\\bWP\\s+' + N + '\\b|\\bWP\\b)',
    'g'
  );

  function highlightTextNode(node) {
    var text = node.nodeValue;
    PATTERN.lastIndex = 0;
    if (!PATTERN.test(text)) return;

    PATTERN.lastIndex = 0;
    var frag = document.createDocumentFragment();
    var last = 0;
    var m;
    while ((m = PATTERN.exec(text)) !== null) {
      if (m.index > last) {
        frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      }
      var span = document.createElement('span');
      span.className = m.groups.cp !== undefined ? 'cp-term'
                     : m.groups.ap !== undefined ? 'ap-term'
                     : m.groups.lp !== undefined ? 'lp-term'
                     : 'wp-term';
      span.textContent = m[0];
      frag.appendChild(span);
      last = m.index + m[0].length;
    }
    if (last < text.length) {
      frag.appendChild(document.createTextNode(text.slice(last)));
    }
    node.parentNode.replaceChild(frag, node);
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (/^\/mechanics\//.test(window.location.pathname)) return;

    var content = document.querySelector('.doc-content');
    if (!content) return;

    var walker = document.createTreeWalker(
      content,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          var el = node.parentElement;
          while (el && el !== content) {
            var tag = el.tagName;
            if (tag === 'H1' || tag === 'H2' || tag === 'H3' || tag === 'H4' || tag === 'H5' || tag === 'H6') {
              return NodeFilter.FILTER_REJECT;
            }
            if (tag === 'CODE' || tag === 'PRE' || tag === 'SCRIPT' || tag === 'STYLE') {
              return NodeFilter.FILTER_REJECT;
            }
            if (el.className === 'cp-term' || el.className === 'ap-term' || el.className === 'lp-term' || el.className === 'wp-term') {
              return NodeFilter.FILTER_REJECT;
            }
            el = el.parentElement;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    var nodes = [];
    var n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(highlightTextNode);
  });
}());

document.addEventListener('DOMContentLoaded', function () {

  // ── Mobile menu toggle ──────────────────────────────────────────────
  const toggle = document.getElementById('mobile-menu-toggle');
  const nav    = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      this.setAttribute('aria-expanded', isOpen);
    });

    // Close when a nav link is tapped
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

});
