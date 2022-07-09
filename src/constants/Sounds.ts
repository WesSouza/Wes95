export enum Sounds {
  chimes = 'chimes',
  chord = 'chord',
  ding = 'ding',
  tada = 'tada',
  theMicrosoftSound = 'theMicrosoftSound',
}

export const SoundsSrcs = {
  [Sounds.chimes]: new URL('../assets/CHIMES.mp3', import.meta.url),
  [Sounds.chord]: new URL('../assets/CHORD.mp3', import.meta.url),
  [Sounds.ding]: new URL('../assets/DING.mp3', import.meta.url),
  [Sounds.tada]: new URL('../assets/TADA.mp3', import.meta.url),
  [Sounds.theMicrosoftSound]: new URL('../assets/TheMicrosoftSound.mp3', import.meta.url),
};
