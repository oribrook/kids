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

/** Jump: quick rising "boing" blip. */
export function playJump() {
  const ac = getCtx();
  if (!ac) return;
  try {
    const t = ac.currentTime;
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, t);
    osc.frequency.exponentialRampToValueAtTime(720, t + 0.14);
    gain.gain.setValueAtTime(0.25, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.18);
    osc.start(t);
    osc.stop(t + 0.19);
  } catch { /* ignore */ }
}

/** Slide/roll: fast downward filtered swoosh. */
export function playSlide() {
  const ac = getCtx();
  if (!ac) return;
  try {
    const t = ac.currentTime;
    const len = Math.floor(ac.sampleRate * 0.18);
    const buf = ac.createBuffer(1, len, ac.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) {
      const env = Math.sin((i / len) * Math.PI);
      data[i] = (Math.random() * 2 - 1) * env;
    }
    const src = ac.createBufferSource();
    const filter = ac.createBiquadFilter();
    const gain = ac.createGain();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1800, t);
    filter.frequency.exponentialRampToValueAtTime(300, t + 0.18);
    filter.Q.value = 1.1;
    src.buffer = buf;
    src.connect(filter);
    filter.connect(gain);
    gain.connect(ac.destination);
    gain.gain.setValueAtTime(0.2, t);
    src.start(t);
  } catch { /* ignore */ }
}

/** Extra life gained: warm 3-note ascending heart chime. */
export function playHeart() {
  const ac = getCtx();
  if (!ac) return;
  try {
    const t = ac.currentTime;
    [659.25, 830.61, 987.77].forEach((freq, i) => {
      const osc = ac.createOscillator();
      const gain = ac.createGain();
      osc.connect(gain);
      gain.connect(ac.destination);
      osc.type = 'sine';
      osc.frequency.value = freq;
      const start = t + i * 0.09;
      gain.gain.setValueAtTime(0.26, start);
      gain.gain.exponentialRampToValueAtTime(0.01, start + 0.4);
      osc.start(start);
      osc.stop(start + 0.42);
    });
  } catch { /* ignore */ }
}

/** Explosion (bomb / smash): noise burst + low pitch drop. */
export function playBoom() {
  const ac = getCtx();
  if (!ac) return;
  try {
    const t = ac.currentTime;
    // Low descending body
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(40, t + 0.3);
    gain.gain.setValueAtTime(0.4, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.32);
    osc.start(t);
    osc.stop(t + 0.33);
    // Noise crack
    const len = Math.floor(ac.sampleRate * 0.22);
    const buf = ac.createBuffer(1, len, ac.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2);
    const src = ac.createBufferSource();
    const filter = ac.createBiquadFilter();
    const nGain = ac.createGain();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2600, t);
    filter.frequency.exponentialRampToValueAtTime(350, t + 0.2);
    src.buffer = buf;
    src.connect(filter);
    filter.connect(nGain);
    nGain.connect(ac.destination);
    nGain.gain.setValueAtTime(0.35, t);
    src.start(t);
  } catch { /* ignore */ }
}

/** Level-up / speed-up: short triumphant fanfare. */
export function playLevelUp() {
  const ac = getCtx();
  if (!ac) return;
  try {
    const t = ac.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51];
    notes.forEach((freq, i) => {
      const osc = ac.createOscillator();
      const gain = ac.createGain();
      osc.connect(gain);
      gain.connect(ac.destination);
      osc.type = 'square';
      osc.frequency.value = freq;
      const start = t + i * 0.07;
      gain.gain.setValueAtTime(0.12, start);
      gain.gain.exponentialRampToValueAtTime(0.01, start + 0.3);
      osc.start(start);
      osc.stop(start + 0.31);
    });
  } catch { /* ignore */ }
}

/** Game over: gentle descending "wah" - sad but not scary. */
export function playGameOver() {
  const ac = getCtx();
  if (!ac) return;
  try {
    const t = ac.currentTime;
    [523.25, 440, 349.23].forEach((freq, i) => {
      const osc = ac.createOscillator();
      const gain = ac.createGain();
      osc.connect(gain);
      gain.connect(ac.destination);
      osc.type = 'triangle';
      osc.frequency.value = freq;
      const start = t + i * 0.18;
      gain.gain.setValueAtTime(0.22, start);
      gain.gain.exponentialRampToValueAtTime(0.01, start + 0.4);
      osc.start(start);
      osc.stop(start + 0.42);
    });
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
