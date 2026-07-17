// Lightweight sound-effects manager built on the Web Audio API.
//
// WHY: creating `new Audio()` per event (balloon pop, diamond collect...) piles up
// HTMLMediaElements which iOS Safari garbage-collects poorly, and creating a new
// AudioContext per tone (old SimonSays) hits the iOS cap of ~4-6 live contexts.
// This module keeps ONE shared AudioContext for the whole app and synthesizes
// short SFX with oscillators/noise - zero audio assets, near-zero memory.

let sharedCtx = null;

function getCtx() {
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  try {
    if (!sharedCtx || sharedCtx.state === 'closed') {
      sharedCtx = new AC();
    }
    if (sharedCtx.state === 'suspended') {
      sharedCtx.resume().catch(() => {});
    }
  } catch {
    return null;
  }
  return sharedCtx;
}

/**
 * General tone (used by Simon Says buttons).
 * @param {number} freq - frequency in Hz
 * @param {number} duration - ms
 * @param {object} opts - { type: OscillatorType, volume: 0..1 }
 */
export function playTone(freq, duration = 300, { type = 'sine', volume = 0.3 } = {}) {
  const ac = getCtx();
  if (!ac) return;
  try {
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.frequency.value = freq;
    osc.type = type;
    const t = ac.currentTime;
    gain.gain.setValueAtTime(volume, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + duration / 1000);
    osc.start(t);
    osc.stop(t + duration / 1000);
  } catch { /* audio not available - ignore */ }
}

/** Balloon pop: short descending "thump" + tiny noise burst. */
export function playPop() {
  const ac = getCtx();
  if (!ac) return;
  try {
    const t = ac.currentTime;
    // Tonal thump with random pitch for variety
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(450 + Math.random() * 300, t);
    osc.frequency.exponentialRampToValueAtTime(90, t + 0.09);
    gain.gain.setValueAtTime(0.5, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.1);
    osc.start(t);
    osc.stop(t + 0.11);
    // Air burst
    const len = Math.floor(ac.sampleRate * 0.05);
    const buf = ac.createBuffer(1, len, ac.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const src = ac.createBufferSource();
    const nGain = ac.createGain();
    src.buffer = buf;
    src.connect(nGain);
    nGain.connect(ac.destination);
    nGain.gain.setValueAtTime(0.22, t);
    src.start(t);
  } catch { /* ignore */ }
}

/** Diamond/coin collect: bright quick two-note ding (B5 -> E6). */
export function playDing() {
  const ac = getCtx();
  if (!ac) return;
  try {
    const t = ac.currentTime;
    [987.77, 1318.51].forEach((freq, i) => {
      const osc = ac.createOscillator();
      const gain = ac.createGain();
      osc.connect(gain);
      gain.connect(ac.destination);
      osc.type = 'sine';
      osc.frequency.value = freq;
      const start = t + i * 0.055;
      gain.gain.setValueAtTime(0.22, start);
      gain.gain.exponentialRampToValueAtTime(0.01, start + 0.22);
      osc.start(start);
      osc.stop(start + 0.23);
    });
  } catch { /* ignore */ }
}

/** Special pickup / bonus: fast ascending sparkle arpeggio. */
export function playSparkle() {
  const ac = getCtx();
  if (!ac) return;
  try {
    const t = ac.currentTime;
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
      const osc = ac.createOscillator();
      const gain = ac.createGain();
      osc.connect(gain);
      gain.connect(ac.destination);
      osc.type = 'triangle';
      osc.frequency.value = freq;
      const start = t + i * 0.05;
      gain.gain.setValueAtTime(0.22, start);
      gain.gain.exponentialRampToValueAtTime(0.01, start + 0.28);
      osc.start(start);
      osc.stop(start + 0.3);
    });
  } catch { /* ignore */ }
}

/** Obstacle hit: low descending thud. */
export function playThud() {
  const ac = getCtx();
  if (!ac) return;
  try {
    const t = ac.currentTime;
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.type = 'square';
    osc.frequency.setValueAtTime(160, t);
    osc.frequency.exponentialRampToValueAtTime(55, t + 0.18);
    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.2);
    osc.start(t);
    osc.stop(t + 0.21);
  } catch { /* ignore */ }
}

/** Soft whoosh for lane change / jump. */
export function playWhoosh() {
  const ac = getCtx();
  if (!ac) return;
  try {
    const t = ac.currentTime;
    const len = Math.floor(ac.sampleRate * 0.15);
    const buf = ac.createBuffer(1, len, ac.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) {
      const env = Math.sin((i / len) * Math.PI); // fade in-out
      data[i] = (Math.random() * 2 - 1) * env;
    }
    const src = ac.createBufferSource();
    const filter = ac.createBiquadFilter();
    const gain = ac.createGain();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(600, t);
    filter.frequency.exponentialRampToValueAtTime(2200, t + 0.15);
    filter.Q.value = 1.2;
    src.buffer = buf;
    src.connect(filter);
    filter.connect(gain);
    gain.connect(ac.destination);
    gain.gain.setValueAtTime(0.15, t);
    src.start(t);
  } catch { /* ignore */ }
}
