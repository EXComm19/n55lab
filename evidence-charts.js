(() => {
  const NS = 'http://www.w3.org/2000/svg';
  const palette = {
    oat: '#A88345',
    mauve: '#927684',
    rose: '#A8676E',
    sage: '#6F806D',
    blueGrey: '#687F86',
    ink: '#17120E',
    muted: '#6F655B',
    grid: '#D3C8B2',
  };

  const svgNode = (name, attrs = {}, text = '') => {
    const node = document.createElementNS(NS, name);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, String(value)));
    if (text !== '') node.textContent = text;
    return node;
  };

  const appendText = (parent, x, y, text, className, anchor = 'middle') => {
    const label = svgNode('text', { x, y, class: className, 'text-anchor': anchor });
    const lines = Array.isArray(text) ? text : [text];
    lines.forEach((line, index) => {
      label.append(svgNode('tspan', { x, dy: index === 0 ? 0 : 15 }, line));
    });
    parent.append(label);
    return label;
  };

  const marker = (parent, shape, x, y, color, size = 5) => {
    const common = { class: 'chart-marker', fill: '#F6F0DF', stroke: color, 'stroke-width': 2 };
    let node;
    if (shape === 'square') {
      node = svgNode('rect', { ...common, x: x - size, y: y - size, width: size * 2, height: size * 2, rx: 1 });
    } else if (shape === 'diamond') {
      node = svgNode('path', { ...common, d: `M ${x} ${y - size - 1} L ${x + size + 1} ${y} L ${x} ${y + size + 1} L ${x - size - 1} ${y} Z` });
    } else if (shape === 'triangle') {
      node = svgNode('path', { ...common, d: `M ${x} ${y - size - 1} L ${x + size + 1} ${y + size} L ${x - size - 1} ${y + size} Z` });
    } else {
      node = svgNode('circle', { ...common, cx: x, cy: y, r: size });
    }
    parent.append(node);
  };

  const chartFrame = (config, width = 640, height = 400) => {
    const svg = svgNode('svg', {
      viewBox: `0 0 ${width} ${height}`,
      role: 'img',
      'aria-labelledby': `${config.id}-svg-title ${config.id}-svg-desc`,
      focusable: 'false',
    });
    svg.append(svgNode('title', { id: `${config.id}-svg-title` }, config.title));
    svg.append(svgNode('desc', { id: `${config.id}-svg-desc` }, config.description));
    return svg;
  };

  const renderRadar = (config) => {
    const width = 640;
    const height = 430;
    const cx = 320;
    const cy = 205;
    const radius = 142;
    const max = config.max ?? 10;
    const count = config.axes.length;
    const color = palette[config.color] ?? palette.mauve;
    const svg = chartFrame(config, width, height);
    const pointAt = (index, value, radial = radius) => {
      const angle = -Math.PI / 2 + (index * Math.PI * 2) / count;
      const r = radial * (value / max);
      return [cx + Math.cos(angle) * r, cy + Math.sin(angle) * r];
    };

    [2, 4, 6, 8, 10].forEach((level) => {
      const points = config.axes.map((_, index) => pointAt(index, level)).map((point) => point.join(',')).join(' ');
      svg.append(svgNode('polygon', { points, class: 'chart-grid radar-grid' }));
      appendText(svg, cx + 7, cy - radius * (level / max) + 4, String(level), 'chart-tick', 'start');
    });

    config.axes.forEach((axis, index) => {
      const [x, y] = pointAt(index, max);
      svg.append(svgNode('line', { x1: cx, y1: cy, x2: x, y2: y, class: 'chart-grid' }));
      const [labelX, labelY] = pointAt(index, max, radius + 42);
      const anchor = labelX < cx - 15 ? 'end' : labelX > cx + 15 ? 'start' : 'middle';
      appendText(svg, labelX, labelY, axis.label, 'chart-axis-label', anchor);
    });

    const dataPoints = config.axes.map((axis, index) => pointAt(index, axis.value));
    const area = svgNode('polygon', {
      points: dataPoints.map((point) => point.join(',')).join(' '),
      class: 'radar-area',
      fill: color,
      stroke: color,
    });
    svg.append(area);
    dataPoints.forEach(([x, y], index) => {
      marker(svg, 'circle', x, y, color, 4.5);
      const valueY = y < cy ? y - 11 : y + 18;
      appendText(svg, x, valueY, String(config.axes[index].value), 'chart-value');
    });
    return svg;
  };

  const renderLine = (config) => {
    const width = 680;
    const height = 390;
    const margin = { top: 28, right: 132, bottom: 72, left: 72 };
    const plotWidth = width - margin.left - margin.right;
    const plotHeight = height - margin.top - margin.bottom;
    const yMin = config.yAxis.min;
    const yMax = config.yAxis.max;
    const svg = chartFrame(config, width, height);
    const x = (index) => margin.left + (plotWidth * index) / Math.max(1, config.xAxis.values.length - 1);
    const y = (value) => margin.top + ((yMax - value) / (yMax - yMin)) * plotHeight;

    config.yAxis.ticks.forEach((tick) => {
      const tickY = y(tick);
      svg.append(svgNode('line', { x1: margin.left, y1: tickY, x2: margin.left + plotWidth, y2: tickY, class: 'chart-grid' }));
      appendText(svg, margin.left - 12, tickY + 4, String(tick), 'chart-tick', 'end');
    });
    svg.append(svgNode('line', { x1: margin.left, y1: margin.top, x2: margin.left, y2: margin.top + plotHeight, class: 'chart-axis' }));
    svg.append(svgNode('line', { x1: margin.left, y1: margin.top + plotHeight, x2: margin.left + plotWidth, y2: margin.top + plotHeight, class: 'chart-axis' }));

    config.xAxis.values.forEach((item, index) => {
      const tickX = x(index);
      appendText(svg, tickX, margin.top + plotHeight + 27, item.label, 'chart-axis-label');
      if (item.meta) appendText(svg, tickX, margin.top + plotHeight + 47, item.meta, 'chart-meta');
    });
    const yTitle = appendText(svg, 19, margin.top + plotHeight / 2, config.yAxis.title, 'chart-axis-title');
    yTitle.setAttribute('transform', `rotate(-90 19 ${margin.top + plotHeight / 2})`);
    appendText(svg, margin.left + plotWidth / 2, height - 8, config.xAxis.title, 'chart-axis-title');

    config.series.forEach((series) => {
      const color = palette[series.color] ?? palette.blueGrey;
      const points = series.values.map((value, index) => [x(index), y(value)]);
      const path = points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point[0]} ${point[1]}`).join(' ');
      svg.append(svgNode('path', {
        d: path,
        class: `chart-series ${series.lineStyle === 'dashed' ? 'is-dashed' : ''}`,
        stroke: color,
      }));
      points.forEach(([pointX, pointY], index) => {
        marker(svg, series.marker ?? 'circle', pointX, pointY, color, 5);
        appendText(svg, pointX, pointY - 14, series.values[index].toFixed(series.decimals ?? 2), 'chart-value');
      });
      const [lastX, lastY] = points[points.length - 1];
      appendText(svg, lastX + 18, lastY + (series.labelOffset ?? 4), series.label, 'chart-direct-label', 'start').setAttribute('fill', color);
    });
    return svg;
  };

  const renderScatter = (config) => {
    const width = 680;
    const height = 410;
    const margin = { top: 28, right: 82, bottom: 78, left: 84 };
    const plotWidth = width - margin.left - margin.right;
    const plotHeight = height - margin.top - margin.bottom;
    const svg = chartFrame(config, width, height);
    const x = (value) => margin.left + ((value - config.xAxis.min) / (config.xAxis.max - config.xAxis.min)) * plotWidth;
    const y = (value) => margin.top + ((config.yAxis.max - value) / (config.yAxis.max - config.yAxis.min)) * plotHeight;

    config.xAxis.ticks.forEach((tick) => {
      const tickX = x(tick);
      svg.append(svgNode('line', { x1: tickX, y1: margin.top, x2: tickX, y2: margin.top + plotHeight, class: 'chart-grid' }));
      appendText(svg, tickX, margin.top + plotHeight + 28, tick.toFixed(config.xAxis.decimals ?? 2), 'chart-tick');
    });
    config.yAxis.ticks.forEach((tick) => {
      const tickY = y(tick);
      svg.append(svgNode('line', { x1: margin.left, y1: tickY, x2: margin.left + plotWidth, y2: tickY, class: 'chart-grid' }));
      appendText(svg, margin.left - 12, tickY + 4, tick.toFixed(config.yAxis.decimals ?? 2), 'chart-tick', 'end');
    });
    svg.append(svgNode('line', { x1: margin.left, y1: margin.top, x2: margin.left, y2: margin.top + plotHeight, class: 'chart-axis' }));
    svg.append(svgNode('line', { x1: margin.left, y1: margin.top + plotHeight, x2: margin.left + plotWidth, y2: margin.top + plotHeight, class: 'chart-axis' }));

    const yTitle = appendText(svg, 20, margin.top + plotHeight / 2, config.yAxis.title, 'chart-axis-title');
    yTitle.setAttribute('transform', `rotate(-90 20 ${margin.top + plotHeight / 2})`);
    appendText(svg, margin.left + plotWidth / 2, height - 9, config.xAxis.title, 'chart-axis-title');

    config.points.forEach((point) => {
      const color = palette[point.color] ?? palette.sage;
      const pointX = x(point.x);
      const pointY = y(point.y);
      marker(svg, point.shape ?? 'circle', pointX, pointY, color, 6);
      appendText(svg, pointX + (point.labelDx ?? 11), pointY + (point.labelDy ?? -10), point.label, 'chart-direct-label', point.labelAnchor ?? 'start').setAttribute('fill', color);
    });
    return svg;
  };

  const renderers = { radar: renderRadar, line: renderLine, scatter: renderScatter };
  document.querySelectorAll('[data-evidence-chart]').forEach((component) => {
    const configNode = component.querySelector('script[type="application/json"]');
    const canvas = component.querySelector('.evidence-chart__canvas');
    if (!configNode || !canvas) return;
    try {
      const config = JSON.parse(configNode.textContent);
      const render = renderers[config.type];
      if (!render) throw new Error(`Unsupported chart type: ${config.type}`);
      canvas.replaceChildren(render(config));
      component.classList.add('is-rendered');
    } catch (error) {
      component.classList.add('has-chart-error');
      console.error('N°55 evidence chart could not render.', error);
    }
  });
})();
