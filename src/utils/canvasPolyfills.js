// Canvas polyfills for older mobile browsers.
// ctx.roundRect is only available in Safari 16+ / Chrome 99+.
// BrickBreaker (and future canvas games) rely on it - without this polyfill the
// draw loop throws every frame on older iPhones and the game shows a blank canvas.

if (typeof CanvasRenderingContext2D !== 'undefined' && !CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, radii) {
    let r = Array.isArray(radii) ? radii.slice() : [radii || 0];
    if (r.length === 1) r = [r[0], r[0], r[0], r[0]];
    else if (r.length === 2) r = [r[0], r[1], r[0], r[1]];
    else if (r.length === 3) r = [r[0], r[1], r[2], r[1]];
    const clamp = (v) => Math.max(0, Math.min(Number(v) || 0, Math.min(w, h) / 2));
    const [tl, tr, br, bl] = r.map(clamp);
    this.moveTo(x + tl, y);
    this.lineTo(x + w - tr, y);
    this.arcTo(x + w, y, x + w, y + tr, tr);
    this.lineTo(x + w, y + h - br);
    this.arcTo(x + w, y + h, x + w - br, y + h, br);
    this.lineTo(x + bl, y + h);
    this.arcTo(x, y + h, x, y + h - bl, bl);
    this.lineTo(x, y + tl);
    this.arcTo(x, y, x + tl, y, tl);
    this.closePath();
    return this;
  };
}
