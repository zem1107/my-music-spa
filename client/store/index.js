export const state = () => ({
  scaleList: [
    {
      name: 'Major Pentatonic',
      notes: ['C4', 'D4', 'E4', 'G4', 'A4', 'C5']
    },
    {
      name: 'Minor Pentatonic',
      notes: ['C4', 'Eb4', 'F4', 'G4', 'Bb4', 'C5']
    },
    {
      name: '🇯🇵ヨナ抜き音階',
      notes: ['C4', 'D4', 'E4', 'G4', 'A4', 'C5']
    },
    {
      name: '🇯🇵民謡音階',
      notes: ['C4', 'Eb4', 'F4', 'G4', 'Bb4', 'C5']
    },
    {
      name: '🇯🇵都節音階',
      notes: ['C4', 'Db4', 'F4', 'G4', 'Ab4', 'C5']
    },
    {
      name: '🇯🇵律音階',
      notes: ['C4', 'D4', 'F4', 'G4', 'A4', 'C5']
    },
    {
      name: '🇯🇵琉球音階',
      notes: ['C4', 'E4', 'F4', 'G4', 'B4', 'C5']
    },
    {
      name: '🇯🇵呂音階',
      notes: ['C4', 'D4', 'E4', 'G4', 'A4', 'C5']
    },
    {
      name: '🇯🇵呂陰音階',
      notes: ['C4', 'Db4', 'E4', 'G4', 'Ab4', 'C5']
    },
    {
      name: '🇯🇵陽音階',
      notes: ['C4', 'D4', 'F4', 'G4', 'Bb4', 'C5'],
      revnotes: ['C4', 'D4', 'F4', 'G4', 'A4', 'C5']
    },
    {
      name: '🇯🇵陰音階',
      notes: ['C4', 'Db4', 'F4', 'G4', 'Bb4', 'C5'],
      revnotes: ['C4', 'Db4', 'F4', 'G4', 'Ab4', 'C5']
    },
    {
      name: 'Major',
      notes: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']
    },
    {
      name: 'Minor',
      notes: ['C4', 'D4', 'Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5']
    },
    {
      name: 'Harmonic Minor',
      notes: ['C4', 'D4', 'Eb4', 'F4', 'G4', 'Ab4', 'B4', 'C5']
    },
    {
      name: 'Melodic Minor',
      notes: ['C4', 'D4', 'Eb4', 'F4', 'G4', 'A4', 'B4', 'C5'],
      revnotes: ['C4', 'D4', 'Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5']
    },
    {
      name: 'Dorian',
      notes: ['C4', 'D4', 'Eb4', 'F4', 'G4', 'A4', 'Bb4', 'C5']
    },
    {
      name: 'Phrygian',
      notes: ['C4', 'Db4', 'Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5']
    },
    {
      name: 'Lydian',
      notes: ['C4', 'D4', 'E4', 'F#4', 'G4', 'A4', 'B4', 'C5']
    },
    {
      name: 'Mixolydian',
      notes: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'Bb4', 'C5']
    },
    {
      name: 'Aeolian',
      notes: ['C4', 'D4', 'Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5']
    },
    {
      name: 'Locrian',
      notes: ['C4', 'Db4', 'Eb4', 'F4', 'Gb4', 'Ab4', 'Bb4', 'C5']
    },
    {
      name: 'Oriental',
      notes: ['C4', 'D4', 'Eb4', 'F#4', 'G4', 'Ab4', 'B4', 'C5']
    },
    {
      name: 'Chromatic',
      notes: ['C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5']
    },
    {
      name: 'Diatonic Chord',
      notes: [['C4', 'E4', 'G4'], ['D4', 'F4', 'A4'], ['E4', 'G4', 'B4'], ['F4', 'A4', 'C5'], ['G4', 'B4', 'D5'], ['A4', 'C5', 'E5'], ['B4', 'D5', 'F5'], ['C5', 'E5', 'G5']]
    },
    {
      name: 'Happy Chord',
      notes: [['C4', 'E4', 'G4'], ['D4', 'F4', 'A4'], ['E4', 'G#4', 'B4'], ['F4', 'A4', 'C5'], ['G4', 'B4', 'D5'], ['A4', 'C5', 'E5'], ['B4', 'D5', 'F5'], ['C5', 'E5', 'G5']]
    },
    {
      name: 'Diatonic Chord Minor',
      notes: [['C4', 'Eb4', 'G4'], ['D4', 'F4', 'Ab4'], ['Eb4', 'G4', 'Bb4'], ['F4', 'Ab4', 'C5'], ['G4', 'Bb4', 'D5'], ['Ab4', 'C5', 'Eb5'], ['Bb4', 'D5', 'F5'], ['C5', 'Eb5', 'G5']]
    },
    {
      name: 'Diatonic Chord Harmonic Minor',
      notes: [['C4', 'Eb4', 'G4'], ['D4', 'F4', 'Ab4'], ['Eb4', 'G4', 'B4'], ['F4', 'Ab4', 'C5'], ['G4', 'B4', 'D5'], ['Ab4', 'C5', 'Eb5'], ['B4', 'D5', 'F5'], ['C5', 'Eb5', 'G5']]
    },
    {
      name: 'Diatonic Chord Melodic Minor',
      notes: [['C4', 'Eb4', 'G4'], ['D4', 'F4', 'A4'], ['Eb4', 'G4', 'B4'], ['F4', 'A4', 'C5'], ['G4', 'B4', 'D5'], ['A4', 'C5', 'Eb5'], ['B4', 'D5', 'F5'], ['C5', 'Eb5', 'G5']]
    }
  ]
})
