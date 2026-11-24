/**
 * Tab 3: Pokok Salasilah Interaktif (SVG Bezier + Nod HTML dengan Pan & Zoom)
 * Menghubungkan kesemua 25 Nabi daripada Adam a.s. → Nuh a.s. → Ibrahim a.s.
 * lalu bercabang ke Nabi Ismail a.s. (→ Muhammad SAW) dan Nabi Ishaq a.s. (→ Bani Israil).
 */
(function (root) {
  let scale = 0.72;
  let translateX = 0;
  let translateY = 0;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let dragMoved = false;
  let initialized = false;

  const MIN_SCALE = 0.36;
  const MAX_SCALE = 1.65;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function applyTransform(animate) {
    const stage = document.getElementById('tree-stage');
    const zoomLabel = document.getElementById('tree-zoom-label');
    if (!stage) return;

    stage.style.transition = animate ? 'transform 340ms cubic-bezier(0.22, 1, 0.36, 1)' : 'none';
    stage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;

    if (zoomLabel) {
      zoomLabel.textContent = `${Math.round(scale * 100)}%`;
    }
  }

  function fitCanvasToViewport(animate) {
    const viewport = document.getElementById('tree-viewport');
    const tree = root.JejakData && root.JejakData.salasilah;
    if (!viewport || !tree) return;

    const vw = viewport.clientWidth || 960;
    const vh = viewport.clientHeight || 560;
    const pad = 28;

    const scaleX = (vw - pad * 2) / tree.canvas.width;
    const scaleY = (vh - pad * 2) / tree.canvas.height;
    scale = Math.max(MIN_SCALE, Math.min(1.0, Math.min(scaleX, scaleY)));

    const renderedW = tree.canvas.width * scale;
    const renderedH = tree.canvas.height * scale;
    translateX = (vw - renderedW) / 2;
    translateY = Math.max(16, (vh - renderedH) / 2);

    applyTransform(animate);
  }

  function focusRegion(centerX, centerY, targetScale) {
    const viewport = document.getElementById('tree-viewport');
    if (!viewport) return;

    const vw = viewport.clientWidth || 960;
    const vh = viewport.clientHeight || 560;
    scale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, targetScale));
    translateX = vw / 2 - centerX * scale;
    translateY = vh / 2 - centerY * scale;

    applyTransform(true);
  }

  function setActiveFocusPill(buttonId) {
    ['tree-fit-all', 'tree-focus-ismail', 'tree-focus-ishaq'].forEach((id) => {
      const btn = document.getElementById(id);
      if (btn) btn.classList.toggle('is-active', id === buttonId);
    });
  }

  function zoomBy(factor, originX, originY) {
    const viewport = document.getElementById('tree-viewport');
    if (!viewport) return;

    const rect = viewport.getBoundingClientRect();
    const cx = typeof originX === 'number' ? originX : rect.width / 2;
    const cy = typeof originY === 'number' ? originY : rect.height / 2;

    const nextScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale * factor));
    const ratio = nextScale / scale;

    translateX = cx - (cx - translateX) * ratio;
    translateY = cy - (cy - translateY) * ratio;
    scale = nextScale;

    applyTransform(false);
  }

  function renderTree() {
    const tree = root.JejakData && root.JejakData.salasilah;
    const nabiList = (root.JejakData && root.JejakData.nabi) || [];
    const stage = document.getElementById('tree-stage');
    const svg = document.getElementById('tree-svg');
    const nodesContainer = document.getElementById('tree-nodes');

    if (!tree || !stage || !svg || !nodesContainer) return;

    const nabiById = new Map(nabiList.map((n) => [n.id, n]));
    const nodeById = new Map(tree.nodes.map((n) => [n.id, n]));

    stage.style.width = `${tree.canvas.width}px`;
    stage.style.height = `${tree.canvas.height}px`;
    svg.setAttribute('viewBox', `0 0 ${tree.canvas.width} ${tree.canvas.height}`);

    // Build SVG zone labels + curved Bezier paths
    const svgParts = [];

    // Subtle branch highlight cards behind Ismail & Ishaq trees
    svgParts.push(`
      <rect x="130" y="572" width="315" height="600" rx="22"
            fill="var(--primary-soft)" fill-opacity="0.45"
            stroke="var(--primary-border)" stroke-width="1" stroke-dasharray="5 5" />
      <rect x="572" y="572" width="958" height="668" rx="22"
            fill="var(--gold-soft)" fill-opacity="0.32"
            stroke="var(--gold-border)" stroke-width="1" stroke-dasharray="5 5" />
    `);

    tree.zoneLabels.forEach((z) => {
      const toneClass =
        z.tone === 'emerald' ? 'is-emerald' : z.tone === 'gold' ? 'is-gold' : '';
      svgParts.push(
        `<text x="${z.x}" y="${z.y}" class="tree-zone-label ${toneClass}">${escapeHtml(z.text)}</text>`
      );
    });

    tree.edges.forEach((edge) => {
      const from = nodeById.get(edge.from);
      const to = nodeById.get(edge.to);
      if (!from || !to) return;

      const isHorizontal = Math.abs(from.y - to.y) < 16;
      let pathD = '';
      let labelX = (from.x + to.x) / 2;
      let labelY = (from.y + to.y) / 2;

      if (isHorizontal) {
        const startX = from.x + (to.x > from.x ? 74 : -74);
        const endX = to.x + (to.x > from.x ? -74 : 74);
        pathD = `M ${startX} ${from.y} L ${endX} ${to.y}`;
        labelY = from.y - 10;
      } else {
        const startY = from.y + 34;
        const endY = to.y - 34;
        const midY = startY + (endY - startY) * 0.5;
        pathD = `M ${from.x} ${startY} C ${from.x} ${midY}, ${to.x} ${midY}, ${to.x} ${endY}`;
        labelY = midY - 6;
      }

      const classes = ['tree-edge'];
      if (edge.type === 'lineage') classes.push('is-lineage');
      if (edge.type === 'kin') classes.push('is-kin');
      if (edge.accent === 'emerald') classes.push('is-emerald');
      if (edge.accent === 'gold') classes.push('is-gold');

      svgParts.push(`<path d="${pathD}" class="${classes.join(' ')}" />`);

      if (edge.label) {
        svgParts.push(
          `<text x="${labelX}" y="${labelY}" class="tree-edge-label">${escapeHtml(edge.label)}</text>`
        );
      }
    });

    svg.innerHTML = svgParts.join('');

    // Build interactive Prophet HTML nodes
    nodesContainer.innerHTML = tree.nodes
      .map((node) => {
        const prophet = nabiById.get(node.prophetId);
        if (!prophet) return '';
        const classes = ['tree-node'];
        if (prophet.ululAzmi) classes.push('is-ulul-azmi');
        if (node.branch === 'ismail') classes.push('branch-ismail');

        return `
          <button
            type="button"
            class="${classes.join(' ')}"
            style="left: ${node.x}px; top: ${node.y}px;"
            data-tree-prophet="${escapeHtml(prophet.id)}"
            title="Klik untuk biodata ${escapeHtml(prophet.name)}"
          >
            <span class="tree-node-arabic" dir="rtl" lang="ar">${escapeHtml(prophet.arabic.replace(' عَلَيْهِ السَّلَامُ', ''))}</span>
            <span class="tree-node-name">${escapeHtml(prophet.shortName)}</span>
            <span class="tree-node-note">${prophet.ululAzmi ? '★ ' : ''}${escapeHtml(node.note)}</span>
          </button>
        `;
      })
      .join('');

    nodesContainer.querySelectorAll('[data-tree-prophet]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (dragMoved) return;
        const prophetId = btn.getAttribute('data-tree-prophet');
        if (root.JejakApp && root.JejakApp.openProphetModal) {
          root.JejakApp.openProphetModal(prophetId);
        }
      });
    });
  }

  function wirePanZoom() {
    const viewport = document.getElementById('tree-viewport');
    if (!viewport) return;

    let activePointerId = null;

    viewport.addEventListener('pointerdown', (e) => {
      if (e.button !== 0 && e.pointerType === 'mouse') return;
      isDragging = true;
      dragMoved = false;
      activePointerId = e.pointerId;
      dragStartX = e.clientX - translateX;
      dragStartY = e.clientY - translateY;
    });

    viewport.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const nextX = e.clientX - dragStartX;
      const nextY = e.clientY - dragStartY;
      if (!dragMoved && (Math.abs(nextX - translateX) > 5 || Math.abs(nextY - translateY) > 5)) {
        dragMoved = true;
        try {
          if (activePointerId !== null) viewport.setPointerCapture(activePointerId);
        } catch (err) {}
      }
      if (!dragMoved) return;
      translateX = nextX;
      translateY = nextY;
      applyTransform(false);
    });

    function endDrag(e) {
      if (!isDragging) return;
      isDragging = false;
      activePointerId = null;
      try {
        if (viewport.hasPointerCapture(e.pointerId)) {
          viewport.releasePointerCapture(e.pointerId);
        }
      } catch (err) {}
      setTimeout(() => {
        dragMoved = false;
      }, 40);
    }

    viewport.addEventListener('pointerup', endDrag);
    viewport.addEventListener('pointercancel', endDrag);

    viewport.addEventListener(
      'wheel',
      (e) => {
        e.preventDefault();
        const rect = viewport.getBoundingClientRect();
        const factor = e.deltaY < 0 ? 1.12 : 0.89;
        zoomBy(factor, e.clientX - rect.left, e.clientY - rect.top);
      },
      { passive: false }
    );

    const zoomInBtn = document.getElementById('tree-zoom-in');
    const zoomOutBtn = document.getElementById('tree-zoom-out');
    const resetBtn = document.getElementById('tree-reset');
    const fitAllBtn = document.getElementById('tree-fit-all');
    const focusIsmailBtn = document.getElementById('tree-focus-ismail');
    const focusIshaqBtn = document.getElementById('tree-focus-ishaq');

    if (zoomInBtn) zoomInBtn.addEventListener('click', () => zoomBy(1.18));
    if (zoomOutBtn) zoomOutBtn.addEventListener('click', () => zoomBy(0.84));
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        setActiveFocusPill('tree-fit-all');
        fitCanvasToViewport(true);
      });
    }
    if (fitAllBtn) {
      fitAllBtn.addEventListener('click', () => {
        setActiveFocusPill('tree-fit-all');
        fitCanvasToViewport(true);
      });
    }
    if (focusIsmailBtn) {
      focusIsmailBtn.addEventListener('click', () => {
        setActiveFocusPill('tree-focus-ismail');
        focusRegion(390, 770, window.innerWidth < 768 ? 0.65 : 0.88);
      });
    }
    if (focusIshaqBtn) {
      focusIshaqBtn.addEventListener('click', () => {
        setActiveFocusPill('tree-focus-ishaq');
        focusRegion(1065, 920, window.innerWidth < 768 ? 0.5 : 0.82);
      });
    }
  }

  function initSalasilahView() {
    renderTree();
    wirePanZoom();
    initialized = true;
  }

  root.JejakApp = root.JejakApp || {};
  root.JejakApp.initSalasilahView = initSalasilahView;
  root.JejakApp.onSalasilahShown = function () {
    if (!initialized) return;
    requestAnimationFrame(() => fitCanvasToViewport(false));
  };
})(window);
