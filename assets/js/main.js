// ── AP / CP / command-name highlighter ─────────────────────────────────
(function () {
  // Named groups determine which class to apply:
  //   cp: Command Point(s), CP, PLAN, ORDER, COUNTER, ABILITY, AURA, PULSE, Cast Off  → green
  //   ap: Action Point(s), AP                                   → orange
  // Each group: optional-sign+number before full word · full word alone ·
  //             optional-sign+number before abbreviation · abbreviation before number · standalone abbreviation
  var N = '\\d+(?:\\.\\d+)?'; // integer or decimal, e.g. 2 or 2.6
  var PATTERN = new RegExp(
    '(?<cp>(?:(?:[+-]?' + N + '|\\(X\\))\\s+)?Command Points?|(?<!\\w)[+-]?' + N + '[-\\s]*CP\\b|\\bCP\\s+' + N + '\\b|\\bCP\\b|\\bPLAN\\b|\\bORDER\\b|\\(COUNTER\\)|\\bCOUNTER\\b|\\(ABILITY\\)|\\bABILITY\\b|\\(AURA\\)|\\bAURA\\b|\\(PULSE\\)|\\bPULSE\\b|Cast Off)|' +
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

    // Highlight faction command names: **Name** (PULSE/AURA/COUNTER/ABILITY)
    content.querySelectorAll('strong').forEach(function (el) {
      var sib = el.nextSibling;
      var val = '';
      while (sib) {
        if (sib.nodeType === 3) { val += sib.nodeValue; }
        else if (sib.nodeType === 1) { break; }
        sib = sib.nextSibling;
      }
      if (/^\s*\((?:PULSE|AURA|COUNTER|ABILITY)\)/.test(val)) {
        el.classList.add('cp-term');
      }
    });

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

// ── LOS blind zone calculator ────────────────────────────────────────
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var result = document.getElementById('los-result');
    if (!result) return;
    var numEl  = document.getElementById('los-number');
    var descEl = document.getElementById('los-desc');
    var svg    = document.getElementById('los-diagram');

    // ── Diagram geometry ──────────────────────────────────────────────
    var VBW = 480, VBH = 320;
    var PAD_X = 36, PAD_TOP = 28, PAD_BOT = 48;

    function pawn(X, Y, cxW, baseW, hW, cls) {
      var bx = X(cxW), by = Y(baseW), ph = by - Y(baseW + hW);
      if (ph < 4) {
        return '<circle class="' + cls + '" cx="' + bx.toFixed(1) + '" cy="' + by.toFixed(1) + '" r="3"/>';
      }
      var hw = Math.min(ph * 0.30, 13);
      var bodyTop = by - ph * 0.60;
      var headCy  = by - ph * 0.80;
      var headR   = hw * 0.62;
      return '<ellipse class="' + cls + '" cx="' + bx.toFixed(1) + '" cy="' + by.toFixed(1) +
               '" rx="' + (hw * 0.95).toFixed(1) + '" ry="' + (hw * 0.26).toFixed(1) + '"/>' +
             '<path class="' + cls + '" d="M ' + (bx - hw * 0.85).toFixed(1) + ' ' + by.toFixed(1) +
               ' L ' + (bx - hw * 0.42).toFixed(1) + ' ' + bodyTop.toFixed(1) +
               ' L ' + (bx + hw * 0.42).toFixed(1) + ' ' + bodyTop.toFixed(1) +
               ' L ' + (bx + hw * 0.85).toFixed(1) + ' ' + by.toFixed(1) + ' Z"/>' +
             '<circle class="' + cls + '" cx="' + bx.toFixed(1) + '" cy="' + headCy.toFixed(1) +
               '" r="' + headR.toFixed(1) + '"/>';
    }

    function renderDiagram(H, a, T, h, D, clear) {
      if (!svg) return;
      var worldLeft, worldRight, worldTop, xG;
      if (clear) {
        worldLeft  = -a - 1;
        worldRight = 2.5;
        worldTop   = Math.max(H + h, T) + 0.6;
        xG = 0;
      } else {
        xG = a * H / h;                       // where the sightline meets the ground
        worldLeft  = -a - 1;
        worldRight = Math.max(xG, 2) + Math.max(1.5, xG * 0.15);
        worldTop   = Math.max(H + h, T) + 0.6;
      }
      var worldW = worldRight - worldLeft;
      var worldH = worldTop;                  // bottom is 0
      var usableW = VBW - 2 * PAD_X;
      var usableH = VBH - PAD_TOP - PAD_BOT;
      var scale = Math.min(usableW / worldW, usableH / worldH);
      var contentW = worldW * scale, contentH = worldH * scale;
      var offX = PAD_X + (usableW - contentW) / 2;
      var offY = PAD_TOP + (usableH - contentH) / 2;
      var X = function (wx) { return offX + (wx - worldLeft) * scale; };
      var Y = function (wy) { return offY + (worldTop - wy) * scale; };

      var s = '';
      // Earth band below ground
      s += '<rect class="d-earth" x="0" y="' + Y(0).toFixed(1) + '" width="' + VBW +
           '" height="' + (VBH - Y(0)).toFixed(1) + '"/>';
      // Ground line
      s += '<line class="d-ground" x1="0" y1="' + Y(0).toFixed(1) +
           '" x2="' + VBW + '" y2="' + Y(0).toFixed(1) + '"/>';
      // Building mass
      s += '<rect class="d-building" x="' + X(worldLeft).toFixed(1) + '" y="' + Y(H).toFixed(1) +
           '" width="' + ((0 - worldLeft) * scale).toFixed(1) + '" height="' + (Y(0) - Y(H)).toFixed(1) + '"/>';

      if (!clear) {
        // Blind-zone shadow triangle: roof edge → wall base → sightline ground hit
        s += '<path class="d-blind" d="M ' + X(0).toFixed(1) + ' ' + Y(H).toFixed(1) +
             ' L ' + X(0).toFixed(1) + ' ' + Y(0).toFixed(1) +
             ' L ' + X(xG).toFixed(1) + ' ' + Y(0).toFixed(1) + ' Z"/>';
        // Sightline: eye → roof edge → ground
        s += '<polyline class="d-los" points="' +
             X(-a).toFixed(1) + ',' + Y(H + h).toFixed(1) + ' ' +
             X(0).toFixed(1)  + ',' + Y(H).toFixed(1) + ' ' +
             X(xG).toFixed(1) + ',' + Y(0).toFixed(1) + '"/>';
      } else {
        // Clear sightline straight to the visible target top
        s += '<line class="d-los-clear" x1="' + X(-a).toFixed(1) + '" y1="' + Y(H + h).toFixed(1) +
             '" x2="' + X(0.2).toFixed(1) + '" y2="' + Y(T).toFixed(1) + '"/>';
      }

      // Roof-edge accent
      s += '<circle class="d-roof-edge" cx="' + X(0).toFixed(1) + '" cy="' + Y(H).toFixed(1) + '" r="3"/>';

      // Models — observer on the roof (base at H), target on the ground (base at 0)
      s += pawn(X, Y, -a, H, h, 'd-pawn');
      s += '<circle class="d-eye" cx="' + X(-a).toFixed(1) + '" cy="' + Y(H + h).toFixed(1) + '" r="2.6"/>';
      s += pawn(X, Y, clear ? 0.2 : D, 0, T, 'd-pawn');

      // Dimension: a (on the roof)
      var ay = Y(H) - 2;
      s += '<text class="d-label-dim" x="' + X(-a / 2).toFixed(1) + '" y="' + (Y(H) - 6).toFixed(1) +
           '" text-anchor="middle">a</text>';
      s += '<line class="d-dim" x1="' + X(-a).toFixed(1) + '" y1="' + ay.toFixed(1) +
           '" x2="' + X(0).toFixed(1) + '" y2="' + ay.toFixed(1) + '"/>';
      // Dimension: H (on the wall)
      var hx = X(-0.2);
      s += '<line class="d-dim" x1="' + hx.toFixed(1) + '" y1="' + Y(0).toFixed(1) +
           '" x2="' + hx.toFixed(1) + '" y2="' + Y(H).toFixed(1) + '"/>';
      s += '<text class="d-label-dim" x="' + (hx - 5).toFixed(1) + '" y="' + (Y(H / 2) + 4).toFixed(1) +
           '" text-anchor="end">H</text>';

      // Dimension: D (the result) along the ground
      if (!clear && D > 0.02) {
        var gy = Y(0) + 14;
        s += '<line class="d-dim-strong" x1="' + X(0).toFixed(1) + '" y1="' + gy.toFixed(1) +
             '" x2="' + X(D).toFixed(1) + '" y2="' + gy.toFixed(1) + '"/>';
        s += '<line class="d-dim-strong" x1="' + X(0).toFixed(1) + '" y1="' + (gy - 4).toFixed(1) +
             '" x2="' + X(0).toFixed(1) + '" y2="' + (gy + 4).toFixed(1) + '"/>';
        s += '<line class="d-dim-strong" x1="' + X(D).toFixed(1) + '" y1="' + (gy - 4).toFixed(1) +
             '" x2="' + X(D).toFixed(1) + '" y2="' + (gy + 4).toFixed(1) + '"/>';
        s += '<text class="d-label-strong" x="' + X(D / 2).toFixed(1) + '" y="' + (gy + 15).toFixed(1) +
             '" text-anchor="middle">D = ' + D.toFixed(2) + '"</text>';
      } else if (clear) {
        s += '<text class="d-label-clear" x="' + X(worldRight / 2).toFixed(1) + '" y="' + (Y(0) + 22).toFixed(1) +
             '" text-anchor="middle">No blind zone — always visible</text>';
      }

      svg.innerHTML = s;
    }

    function losCalc() {
      var H = parseFloat(document.getElementById('los-H').value);
      var a = parseFloat(document.getElementById('los-a').value);
      var T = parseFloat(document.getElementById('los-T').value);
      var h = parseFloat(document.getElementById('los-h').value);
      if (isNaN(H) || isNaN(a) || isNaN(T) || isNaN(h) || h <= 0 || a < 0) {
        numEl.textContent  = '—';
        descEl.textContent = '';
        result.className   = 'los-calc-result';
        if (svg) svg.innerHTML = '';
        return;
      }
      if (T >= H) {
        numEl.textContent  = 'none';
        descEl.textContent = 'target at or above roof level — always visible';
        result.className   = 'los-calc-result is-clear';
        renderDiagram(H, a, T, h, 0, true);
      } else {
        var D = a * (H - T) / h;
        numEl.textContent  = D.toFixed(2) + '"';
        descEl.textContent = 'blind zone from the building wall';
        result.className   = 'los-calc-result has-blind';
        renderDiagram(H, a, T, h, D, false);
      }
    }

    ['los-H', 'los-a', 'los-T', 'los-h'].forEach(function (id) {
      document.getElementById(id).addEventListener('input', losCalc);
    });
    losCalc();
  });
}());

// ── Jump calculator ──────────────────────────────────────────────────
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var resEl = document.getElementById('jump-result');
    if (!resEl) return;
    var svg = document.getElementById('jump-diagram');

    // Expected jump distance by DEX (1–8) × Acrobatic (0–3), from the reference table
    var EJUMP = {
      1: [2.30, 2.30, 2.30, 2.30],
      2: [2.82, 3.13, 3.13, 3.13],
      3: [3.29, 3.58, 3.84, 3.84],
      4: [3.74, 4.00, 4.26, 4.51],
      5: [4.16, 4.42, 4.67, 4.91],
      6: [4.58, 4.83, 5.07, 5.31],
      7: [4.99, 5.23, 5.47, 5.72],
      8: [5.39, 5.63, 5.88, 6.12]
    };

    // ── Roll distribution (same model that produces the table above) ──
    // n = DEX − 1 non-Destiny dice. With Acrobatic X, a = min(X, n) of them
    // re-roll a failure (ace p = 0.64), the rest keep p = 0.4. K = their aces.
    // Destiny die (uniform): 1 = Fumble only if K = 0; 10 = Critical only if K ≥ 1.
    function kPMF(a, b) {
      var pmf = [1];
      function mul(p) {
        var nx = new Array(pmf.length + 1);
        for (var i = 0; i < nx.length; i++) nx[i] = 0;
        for (var i = 0; i < pmf.length; i++) {
          nx[i]     += pmf[i] * (1 - p);
          nx[i + 1] += pmf[i] * p;
        }
        pmf = nx;
      }
      var i;
      for (i = 0; i < a; i++) mul(0.64);
      for (i = 0; i < b; i++) mul(0.40);
      return pmf;
    }
    // Max move (inches) for a given K and Destiny-die category
    function moveFor(k, cat) {
      if (cat === 1) return k === 0 ? 1 : 2 + k;   // Destiny 1
      if (cat === 2) return 2 + k;                 // Destiny 2–6
      if (cat === 3) return 3 + k;                 // Destiny 7–9
      return k === 0 ? 3 : 5 + k;                  // Destiny 10
    }
    var CATW = { 1: 0.1, 2: 0.5, 3: 0.3, 4: 0.1 };
    function pLand(dex, acro, M) {                 // P(max move ≥ M)
      var n = dex - 1, a = Math.min(acro, n), b = n - a;
      var pk = kPMF(a, b), p = 0;
      for (var k = 0; k < pk.length; k++) {
        for (var c = 1; c <= 4; c++) {
          if (moveFor(k, c) >= M) p += pk[k] * CATW[c];
        }
      }
      return p;
    }

    var VBW = 480, VBH = 320, PAD_X = 36, PAD_TOP = 26, PAD_BOT = 40;

    function pawn(X, Y, cxW, baseW, hW, cls) {
      var bx = X(cxW), by = Y(baseW), ph = by - Y(baseW + hW);
      if (ph < 4) {
        return '<circle class="' + cls + '" cx="' + bx.toFixed(1) + '" cy="' + by.toFixed(1) + '" r="3"/>';
      }
      var hw = Math.min(ph * 0.30, 13);
      var bodyTop = by - ph * 0.60;
      var headCy  = by - ph * 0.80;
      var headR   = hw * 0.62;
      return '<ellipse class="' + cls + '" cx="' + bx.toFixed(1) + '" cy="' + by.toFixed(1) +
               '" rx="' + (hw * 0.95).toFixed(1) + '" ry="' + (hw * 0.26).toFixed(1) + '"/>' +
             '<path class="' + cls + '" d="M ' + (bx - hw * 0.85).toFixed(1) + ' ' + by.toFixed(1) +
               ' L ' + (bx - hw * 0.42).toFixed(1) + ' ' + bodyTop.toFixed(1) +
               ' L ' + (bx + hw * 0.42).toFixed(1) + ' ' + bodyTop.toFixed(1) +
               ' L ' + (bx + hw * 0.85).toFixed(1) + ' ' + by.toFixed(1) + ' Z"/>' +
             '<circle class="' + cls + '" cx="' + bx.toFixed(1) + '" cy="' + headCy.toFixed(1) +
               '" r="' + headR.toFixed(1) + '"/>';
    }

    function renderDiagram(G, H, R, ov, M, E, clears) {
      if (!svg) return;
      if (R < 0.001) { svg.innerHTML = ''; return; }
      var ux = G / R, uy = H / R;            // unit vector along the diagonal
      function pointAt(L) {                   // bent path: diagonal to the edge, then along the surface
        if (L <= R) return [L * ux, L * uy];
        return [G + (L - R), H];
      }
      var startW   = Math.max(1.4, G * 0.35);
      var rightPad = Math.max(ov, Math.max(0, E - R)) + 1.5;
      var worldLeft   = -startW;
      var worldRight  = G + rightPad;
      var worldBottom = -1.1;
      var worldTop    = H + 1 + 0.6;
      var worldW = worldRight - worldLeft;
      var worldH = worldTop - worldBottom;
      var usableW = VBW - 2 * PAD_X, usableH = VBH - PAD_TOP - PAD_BOT;
      var scale = Math.min(usableW / worldW, usableH / worldH);
      var offX = PAD_X + (usableW - worldW * scale) / 2;
      var offY = PAD_TOP + (usableH - worldH * scale) / 2;
      var X = function (wx) { return offX + (wx - worldLeft) * scale; };
      var Y = function (wy) { return offY + (worldTop - wy) * scale; };

      var s = '';
      // Pit shadow under the gap
      s += '<rect class="d-gap" x="' + X(0).toFixed(1) + '" y="' + Y(0).toFixed(1) +
           '" width="' + (G * scale).toFixed(1) + '" height="' + (Y(worldBottom) - Y(0)).toFixed(1) + '"/>';
      // Platforms
      s += '<rect class="d-building" x="' + X(worldLeft).toFixed(1) + '" y="' + Y(0).toFixed(1) +
           '" width="' + ((0 - worldLeft) * scale).toFixed(1) + '" height="' + (Y(worldBottom) - Y(0)).toFixed(1) + '"/>';
      s += '<rect class="d-building" x="' + X(G).toFixed(1) + '" y="' + Y(H).toFixed(1) +
           '" width="' + ((worldRight - G) * scale).toFixed(1) + '" height="' + (Y(worldBottom) - Y(H)).toFixed(1) + '"/>';

      // Construction legs (gap G along the bottom, height H up the target face)
      if (G > 0.05) {
        s += '<line class="d-dim" x1="' + X(0).toFixed(1) + '" y1="' + Y(0).toFixed(1) +
             '" x2="' + X(G).toFixed(1) + '" y2="' + Y(0).toFixed(1) + '"/>';
        s += '<text class="d-label-dim" x="' + X(G / 2).toFixed(1) + '" y="' + (Y(0) + 13).toFixed(1) +
             '" text-anchor="middle">gap ' + G + '"</text>';
      }
      if (H > 0.05) {
        s += '<line class="d-dim" x1="' + X(G).toFixed(1) + '" y1="' + Y(0).toFixed(1) +
             '" x2="' + X(G).toFixed(1) + '" y2="' + Y(H).toFixed(1) + '"/>';
        s += '<text class="d-label-dim" x="' + (X(G) + 5).toFixed(1) + '" y="' + (Y(H / 2) + 4).toFixed(1) +
             '" text-anchor="start">H ' + H + '"</text>';
      }

      // Required path: diagonal to the edge, then on to the full-landing point
      var qm = pointAt(M);
      s += '<polyline class="d-jump-line" points="' +
           X(0).toFixed(1) + ',' + Y(0).toFixed(1) + ' ' +
           X(G).toFixed(1) + ',' + Y(H).toFixed(1) + ' ' +
           X(qm[0]).toFixed(1) + ',' + Y(qm[1]).toFixed(1) + '"/>';
      // R label along the diagonal
      s += '<text class="d-label-dim" x="' + (X(G / 2) - 6).toFixed(1) + '" y="' + (Y(H / 2) - 5).toFixed(1) +
           '" text-anchor="end">R ' + R.toFixed(2) + '"</text>';

      // Expected reach overlay
      var reachCls = clears ? 'd-reach-ok' : 'd-reach-short';
      var pe = pointAt(E);
      var pts;
      if (E <= R) {
        pts = X(0).toFixed(1) + ',' + Y(0).toFixed(1) + ' ' + X(pe[0]).toFixed(1) + ',' + Y(pe[1]).toFixed(1);
      } else {
        pts = X(0).toFixed(1) + ',' + Y(0).toFixed(1) + ' ' +
              X(G).toFixed(1) + ',' + Y(H).toFixed(1) + ' ' +
              X(pe[0]).toFixed(1) + ',' + Y(pe[1]).toFixed(1);
      }
      s += '<polyline class="' + reachCls + '" points="' + pts + '"/>';
      s += '<circle class="' + (clears ? 'd-reach-dot-ok' : 'd-reach-dot-short') + '" cx="' +
           X(pe[0]).toFixed(1) + '" cy="' + Y(pe[1]).toFixed(1) + '" r="3.4"/>';

      // Models: jumper at the edge of the start platform, ghost where the base must fully land
      s += pawn(X, Y, -0.3, 0, 1, 'd-pawn');
      s += pawn(X, Y, G + ov, H, 1, 'd-pawn-ghost');

      svg.innerHTML = s;
    }

    function jumpCalc() {
      var dex  = parseInt(document.getElementById('jmp-dex').value, 10);
      var acro = parseInt(document.getElementById('jmp-acro').value, 10);
      var mm   = parseFloat(document.getElementById('jmp-base').value);
      var G    = parseFloat(document.getElementById('jmp-gap').value);
      var H    = parseFloat(document.getElementById('jmp-height').value);

      var icon = document.getElementById('jmp-icon');
      var verd = document.getElementById('jmp-verdict');
      var REl  = document.getElementById('jmp-R');
      var MEl  = document.getElementById('jmp-M');
      var EEl  = document.getElementById('jmp-E');
      var PEl  = document.getElementById('jmp-P');
      var MLab = document.getElementById('jmp-M-label');
      var ELab = document.getElementById('jmp-E-label');

      function clearOut() {
        resEl.className = 'jump-result';
        icon.textContent = ''; verd.textContent = '—';
        REl.textContent = '—'; MEl.textContent = '—'; EEl.textContent = '—'; PEl.textContent = '—';
        if (svg) svg.innerHTML = '';
      }

      if (isNaN(dex) || isNaN(acro) || isNaN(mm) || isNaN(G) || isNaN(H) || G < 0 || H < 0) {
        clearOut();
        return;
      }
      dex  = Math.max(1, Math.min(8, dex));
      acro = Math.max(0, Math.min(3, acro));

      var R  = Math.sqrt(G * G + H * H);
      var ov = Math.max(0, mm / 25.4 - 1);     // base diameter in inches − 1" (the nudge)
      var M  = R + ov;
      var E  = EJUMP[dex][acro];

      REl.textContent = R.toFixed(2) + '"';
      MEl.textContent = M.toFixed(2) + '"';
      EEl.textContent = E.toFixed(2) + '"';
      MLab.textContent = '+ base (' + mm + 'mm) to land';
      ELab.textContent = 'Expected jump (DEX ' + dex + ', Acro ' + acro + ')';

      if (H > 3) {
        resEl.className = 'jump-result illegal';
        icon.textContent = '!';
        verd.textContent = 'Not a legal jump';
        ELab.textContent = 'Target above 3" — illegal';
        PEl.textContent = '—';
        renderDiagram(G, H, R, ov, M, E, false);
        return;
      }

      var P = pLand(dex, acro, M);
      PEl.textContent = Math.round(P * 100) + '%';

      var clears = E >= M;
      resEl.className = 'jump-result ' + (clears ? 'clears' : 'falls-short');
      icon.textContent = clears ? '✓' : '✗';
      verd.textContent = clears ? 'Clears on average' : 'Falls short on average';
      renderDiagram(G, H, R, ov, M, E, clears);
    }

    ['jmp-dex', 'jmp-acro', 'jmp-base', 'jmp-gap', 'jmp-height'].forEach(function (id) {
      document.getElementById(id).addEventListener('input', jumpCalc);
    });
    jumpCalc();
  });
}());

// ── Range calculator ─────────────────────────────────────────────────
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var resEl  = document.getElementById('rng-result');
    if (!resEl) return;
    var numEl  = document.getElementById('rng-number');
    var descEl = document.getElementById('rng-desc');
    var svg    = document.getElementById('rng-diagram');

    var VBW = 480, VBH = 320, PAD_X = 44, PAD_TOP = 28, PAD_BOT = 40;

    function pawn(X, Y, cxW, baseW, hW, cls) {
      var bx = X(cxW), by = Y(baseW), ph = by - Y(baseW + hW);
      if (ph < 4) {
        return '<circle class="' + cls + '" cx="' + bx.toFixed(1) + '" cy="' + by.toFixed(1) + '" r="3"/>';
      }
      var hw = Math.min(ph * 0.30, 13);
      var bodyTop = by - ph * 0.60;
      var headCy  = by - ph * 0.80;
      var headR   = hw * 0.62;
      return '<ellipse class="' + cls + '" cx="' + bx.toFixed(1) + '" cy="' + by.toFixed(1) +
               '" rx="' + (hw * 0.95).toFixed(1) + '" ry="' + (hw * 0.26).toFixed(1) + '"/>' +
             '<path class="' + cls + '" d="M ' + (bx - hw * 0.85).toFixed(1) + ' ' + by.toFixed(1) +
               ' L ' + (bx - hw * 0.42).toFixed(1) + ' ' + bodyTop.toFixed(1) +
               ' L ' + (bx + hw * 0.42).toFixed(1) + ' ' + bodyTop.toFixed(1) +
               ' L ' + (bx + hw * 0.85).toFixed(1) + ' ' + by.toFixed(1) + ' Z"/>' +
             '<circle class="' + cls + '" cx="' + bx.toFixed(1) + '" cy="' + headCy.toFixed(1) +
               '" r="' + headR.toFixed(1) + '"/>';
    }

    // R = weapon range (diagonal), D = height drop, H = horizontal result
    function renderDiagram(R, D, H) {
      if (!svg) return;
      var worldLeft   = -1.5;
      var worldRight  = Math.max(H, 0.5) + 1.5;
      var worldBottom = -1.2;
      var worldTop    = Math.max(D, 0.5) + 1.4;
      var worldW = worldRight - worldLeft;
      var worldH = worldTop - worldBottom;
      var usableW = VBW - 2 * PAD_X, usableH = VBH - PAD_TOP - PAD_BOT;
      var scale = Math.min(usableW / worldW, usableH / worldH);
      var offX = PAD_X + (usableW - worldW * scale) / 2;
      var offY = PAD_TOP + (usableH - worldH * scale) / 2;
      var X = function (wx) { return offX + (wx - worldLeft) * scale; };
      var Y = function (wy) { return offY + (worldTop - wy) * scale; };

      var s = '';

      // Earth bands
      s += '<rect class="d-earth" x="0" y="' + Y(0).toFixed(1) +
           '" width="' + VBW + '" height="' + (VBH - Y(0)).toFixed(1) + '"/>';
      // Left (elevated) platform
      s += '<rect class="d-building" x="' + X(worldLeft).toFixed(1) + '" y="' + Y(D).toFixed(1) +
           '" width="' + ((-worldLeft) * scale).toFixed(1) + '" height="' + (Y(worldBottom) - Y(D)).toFixed(1) + '"/>';
      // Right (lower) platform
      s += '<rect class="d-building" x="' + X(H).toFixed(1) + '" y="' + Y(0).toFixed(1) +
           '" width="' + ((worldRight - H) * scale).toFixed(1) + '" height="' + (Y(worldBottom) - Y(0)).toFixed(1) + '"/>';

      // Construction right-triangle legs
      if (H > 0.05 && D > 0.05) {
        s += '<line class="d-dim" x1="' + X(0).toFixed(1) + '" y1="' + Y(D).toFixed(1) +
             '" x2="' + X(H).toFixed(1) + '" y2="' + Y(D).toFixed(1) + '"/>';
        s += '<line class="d-dim" x1="' + X(H).toFixed(1) + '" y1="' + Y(D).toFixed(1) +
             '" x2="' + X(H).toFixed(1) + '" y2="' + Y(0).toFixed(1) + '"/>';
        var rm = Math.min(scale * 0.18, 8);
        s += '<polyline style="fill:none" class="d-dim" points="' +
             X(H).toFixed(1) + ',' + (Y(D) + rm).toFixed(1) + ' ' +
             (X(H) - rm).toFixed(1) + ',' + (Y(D) + rm).toFixed(1) + ' ' +
             (X(H) - rm).toFixed(1) + ',' + Y(D).toFixed(1) + '"/>';
        // D label (right of the vertical leg)
        s += '<text class="d-label-dim" x="' + (X(H) + 6).toFixed(1) + '" y="' + (Y(D / 2) + 4).toFixed(1) +
             '" text-anchor="start">D = ' + D + '"</text>';
      }

      // Diagonal = weapon range (teal)
      s += '<line class="d-los-clear" x1="' + X(0).toFixed(1) + '" y1="' + Y(D).toFixed(1) +
           '" x2="' + X(H).toFixed(1) + '" y2="' + Y(0).toFixed(1) + '"/>';
      // Range label on diagonal
      s += '<text class="d-label-dim" x="' + (X(H / 2) - 8).toFixed(1) + '" y="' + (Y(D / 2) - 6).toFixed(1) +
           '" text-anchor="end">R = ' + R + '"</text>';

      // Horizontal result label (strong, below the horizontal leg)
      if (H > 0.05) {
        s += '<text class="d-label-strong" x="' + X(H / 2).toFixed(1) + '" y="' + (Y(D) - 6).toFixed(1) +
             '" text-anchor="middle">H = ' + H.toFixed(2) + '"</text>';
      }

      // Pawns
      s += pawn(X, Y, -0.4, D, 1, 'd-pawn');
      s += pawn(X, Y, H + 0.4, 0, 1, 'd-pawn');

      svg.innerHTML = s;
    }

    function rngCalc() {
      var R = parseFloat(document.getElementById('rng-R').value);
      var D = parseFloat(document.getElementById('rng-D').value);

      if (isNaN(R) || isNaN(D) || R < 0 || D < 0) {
        numEl.textContent  = '—';
        descEl.textContent = '';
        resEl.className    = 'rng-result';
        if (svg) svg.innerHTML = '';
        return;
      }

      if (D > R) {
        numEl.textContent  = '—';
        descEl.textContent = 'height drop exceeds weapon range';
        resEl.className    = 'rng-result out-range';
        if (svg) svg.innerHTML = '';
        return;
      }

      var H = Math.sqrt(R * R - D * D);
      numEl.textContent  = H.toFixed(2) + '"';
      descEl.textContent = 'max horizontal distance';
      resEl.className    = 'rng-result in-range';

      renderDiagram(R, D, H);
    }

    ['rng-R', 'rng-D'].forEach(function (id) {
      document.getElementById(id).addEventListener('input', rngCalc);
    });
    rngCalc();
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

// ── Sortable data tables (opt-in via {: .sortable}) ──────────────────
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var tables = document.querySelectorAll('.doc-content table.sortable');
    if (!tables.length) return;

    // Parse a cell into a sortable value. Handles linked name cells (visible
    // text via textContent), plain / signed numbers, percentages (+103%, -29%),
    // inch values (5"), "n (xx%)" cells (leading count), and blanks (—, -).
    function parse(td) {
      var t = td.textContent.replace(/\s+/g, ' ').trim();
      var blank = (t === '' || t === '—' || t === '–' || t === '-');
      var m = blank ? null : t.match(/^[+-]?\d+(?:[.,]\d+)?/);
      var num = m ? parseFloat(m[0].replace(',', '.')) : NaN;
      return { num: num, str: t.toLowerCase(), blank: blank };
    }

    function sortBy(table, idx, th) {
      var tbody = table.tBodies[0];
      if (!tbody) return;
      var dir = th.getAttribute('aria-sort') === 'descending' ? 'ascending' : 'descending';
      Array.prototype.forEach.call(th.parentNode.cells, function (c) {
        c.removeAttribute('aria-sort');
      });
      th.setAttribute('aria-sort', dir);
      var sign = dir === 'ascending' ? 1 : -1;

      var rows = Array.prototype.map.call(tbody.rows, function (r, i) {
        return { r: r, v: parse(r.cells[idx]), i: i };
      });
      var nonblank = rows.filter(function (d) { return !d.v.blank; });
      var nums = nonblank.filter(function (d) { return !isNaN(d.v.num); }).length;
      var numeric = nonblank.length > 0 && nums >= nonblank.length * 0.6;

      rows.sort(function (a, b) {
        if (a.v.blank && b.v.blank) return a.i - b.i;  // blanks keep order
        if (a.v.blank) return 1;                        // blanks always last
        if (b.v.blank) return -1;
        var c;
        if (numeric && !isNaN(a.v.num) && !isNaN(b.v.num)) {
          c = a.v.num - b.v.num;
        } else {
          c = a.v.str < b.v.str ? -1 : a.v.str > b.v.str ? 1 : 0;
        }
        return c === 0 ? a.i - b.i : sign * c;          // stable on ties
      });
      rows.forEach(function (d) { tbody.appendChild(d.r); });
    }

    Array.prototype.forEach.call(tables, function (table) {
      var head = table.tHead;
      if (!head || !head.rows.length) return;
      Array.prototype.forEach.call(head.rows[0].cells, function (th, idx) {
        th.setAttribute('role', 'button');
        th.setAttribute('tabindex', '0');
        th.addEventListener('click', function () { sortBy(table, idx, th); });
        th.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); sortBy(table, idx, th); }
        });
      });
    });
  });
}());
