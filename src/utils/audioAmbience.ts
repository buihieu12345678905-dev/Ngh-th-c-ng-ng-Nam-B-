// Web Audio API Synthesized Ambient Soundscapes for Southeast Vietnam Traditional Crafts

class SoundScapeEngine {
  private ctx: AudioContext | null = null;
  private currentType: string | null = null;
  private nodes: (AudioNode | number)[] = [];
  private isPlaying: boolean = false;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public play(type: 'kiln' | 'lacquer' | 'bronze' | 'morning_mist') {
    this.stop();
    this.initCtx();
    if (!this.ctx) return;

    this.currentType = type;
    this.isPlaying = true;

    if (type === 'kiln') {
      this.playKilnAmbience();
    } else if (type === 'lacquer') {
      this.playWaterPolishingAmbience();
    } else if (type === 'bronze') {
      this.playBronzeBell();
    } else if (type === 'morning_mist') {
      this.playDawnMistAmbience();
    }
  }

  private playKilnAmbience() {
    if (!this.ctx) return;
    // Low rumble of dragon kiln
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(55, this.ctx.currentTime); // Low 55Hz kiln hum
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(140, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.04, this.ctx.currentTime);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();

    this.nodes.push(osc, gain, filter);

    // Crackle simulator using periodic noise
    const crackleInterval = window.setInterval(() => {
      if (!this.ctx || !this.isPlaying) return;
      const crackleOsc = this.ctx.createOscillator();
      const crackleGain = this.ctx.createGain();
      crackleOsc.frequency.setValueAtTime(300 + Math.random() * 800, this.ctx.currentTime);
      crackleGain.gain.setValueAtTime(0.02 + Math.random() * 0.03, this.ctx.currentTime);
      crackleGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.05 + Math.random() * 0.08);

      crackleOsc.connect(crackleGain);
      crackleGain.connect(this.ctx.destination);
      crackleOsc.start();
      crackleOsc.stop(this.ctx.currentTime + 0.15);
    }, 280);

    this.nodes.push(crackleInterval);
  }

  private playWaterPolishingAmbience() {
    if (!this.ctx) return;
    // Soothing water ripple & rhythmic circular polishing sound
    const dripInterval = window.setInterval(() => {
      if (!this.ctx || !this.isPlaying) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      const freq = 600 + Math.random() * 400;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.025, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
    }, 450);

    this.nodes.push(dripInterval);
  }

  private playBronzeBell() {
    if (!this.ctx) return;
    // Pure resonant deep bell tone
    const chime = () => {
      if (!this.ctx || !this.isPlaying) return;
      const baseFreq = 220; // A3
      const harmonics = [1, 2.76, 5.4, 8.93];
      harmonics.forEach((h, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.frequency.setValueAtTime(baseFreq * h, this.ctx.currentTime);
        
        const initialGain = 0.04 / (idx + 1);
        gain.gain.setValueAtTime(initialGain, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 3.5);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 3.6);
      });
    };

    chime();
    const interval = window.setInterval(chime, 4500);
    this.nodes.push(interval);
  }

  private playDawnMistAmbience() {
    if (!this.ctx) return;
    // Gentle cricket & dawn breeze
    const cricketInterval = window.setInterval(() => {
      if (!this.ctx || !this.isPlaying) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(4500 + Math.random() * 200, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    }, 600);

    this.nodes.push(cricketInterval);
  }

  public stop() {
    this.isPlaying = false;
    this.currentType = null;
    this.nodes.forEach((item) => {
      if (typeof item === 'number') {
        window.clearInterval(item);
      } else {
        try {
          (item as AudioNode).disconnect();
        } catch {
          // ignore cleanup
        }
      }
    });
    this.nodes = [];
  }

  public getCurrentType() {
    return this.isPlaying ? this.currentType : null;
  }
}

export const audioAmbience = new SoundScapeEngine();
