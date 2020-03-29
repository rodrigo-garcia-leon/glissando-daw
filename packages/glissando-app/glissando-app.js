const runWasm = async () => {
  const rust = await import('/web_modules/@glissando/glissando-synth/glissando_synth.js');
  await rust.default();

  const osc = new rust.Osc();
  osc.suspend();

  document.getElementById('start').addEventListener('click', () => {
    osc.resume();
  });

  document.getElementById('stop').addEventListener('click', () => {
    osc.suspend();
  });

  document.getElementById('volume-osc').addEventListener('input', e => {
    osc.set_osc_amp(parseFloat(e.target.value));
  });

  document.getElementById('volume-src-buffer').addEventListener('input', e => {
    osc.set_audio_buffer_amp(parseFloat(e.target.value));
  });
};

runWasm();
