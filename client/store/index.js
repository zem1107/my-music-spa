export const state = () => ({
  pointerdown: false,
  currentnote: null,
  scaleList: [
    {
      name: 'Major Pentatonic',
      notes: ['C4', 'D4', 'E4', 'G4', 'A4', 'C5'],
      base: {
        notes: [['C4', 'E4', 'G4'], ['D4', 'F4', 'A4'], ['E4', 'G4', 'B4'], ['F4', 'A4', 'C5'], ['G4', 'B4', 'D5'], ['A4', 'C5', 'E5'], ['B4', 'D5', 'F5'], ['C5', 'E5', 'G5']]
      }
    },
    {
      name: 'Minor Pentatonic',
      notes: ['C4', 'Eb4', 'F4', 'G4', 'Bb4', 'C5'],
      base: {
        notes: [['C4', 'Eb4', 'G4'], ['D4', 'F4', 'Ab4'], ['Eb4', 'G4', 'Bb4'], ['F4', 'Ab4', 'C5'], ['G4', 'Bb4', 'D5'], ['Ab4', 'C5', 'Eb5'], ['Bb4', 'D5', 'F5'], ['C5', 'Eb5', 'G5']]
      }
    },
    {
      name: '🇯🇵ヨナ抜き音階',
      notes: ['C4', 'D4', 'E4', 'G4', 'A4', 'C5'],
      base: {
        notes: [['C4', 'E4', 'G4'], ['D4', 'F4', 'A4'], ['E4', 'G4', 'B4'], ['F4', 'A4', 'C5'], ['G4', 'B4', 'D5'], ['A4', 'C5', 'E5'], ['B4', 'D5', 'F5'], ['C5', 'E5', 'G5']]
      }
    },
    {
      name: '🇯🇵民謡音階',
      notes: ['C4', 'Eb4', 'F4', 'G4', 'Bb4', 'C5'],
      base: {
        notes: [['C4', 'Eb4', 'G4'], ['D4', 'F4', 'Ab4'], ['Eb4', 'G4', 'Bb4'], ['F4', 'Ab4', 'C5'], ['G4', 'Bb4', 'D5'], ['Ab4', 'C5', 'Eb5'], ['Bb4', 'D5', 'F5'], ['C5', 'Eb5', 'G5']]
      }
    },
    {
      name: '🇯🇵都節音階',
      notes: ['C4', 'Db4', 'F4', 'G4', 'Ab4', 'C5']
    },
    {
      name: '🇯🇵律音階',
      notes: ['C4', 'D4', 'F4', 'G4', 'A4', 'C5'],
      base: {
        notes: [['C4', 'E4', 'G4'], ['D4', 'F4', 'A4'], ['E4', 'G4', 'B4'], ['F4', 'A4', 'C5'], ['G4', 'B4', 'D5'], ['A4', 'C5', 'E5'], ['B4', 'D5', 'F5'], ['C5', 'E5', 'G5']]
      }
    },
    {
      name: '🇯🇵琉球音階',
      notes: ['C4', 'E4', 'F4', 'G4', 'B4', 'C5'],
      base: {
        notes: [['C4', 'E4', 'G4'], ['D4', 'F4', 'A4'], ['E4', 'G4', 'B4'], ['F4', 'A4', 'C5'], ['G4', 'B4', 'D5'], ['A4', 'C5', 'E5'], ['B4', 'D5', 'F5'], ['C5', 'E5', 'G5']]
      }
    },
    {
      name: '🇯🇵呂音階',
      notes: ['C4', 'D4', 'E4', 'G4', 'A4', 'C5'],
      base: {
        notes: [['C4', 'E4', 'G4'], ['D4', 'F4', 'A4'], ['E4', 'G4', 'B4'], ['F4', 'A4', 'C5'], ['G4', 'B4', 'D5'], ['A4', 'C5', 'E5'], ['B4', 'D5', 'F5'], ['C5', 'E5', 'G5']]
      }
    },
    {
      name: '🇯🇵呂陰音階',
      notes: ['C4', 'Db4', 'E4', 'G4', 'Ab4', 'C5'],
      base: {
        notes: [['C4', 'Eb4', 'G4'], ['D4', 'F4', 'Ab4'], ['Eb4', 'G4', 'Bb4'], ['F4', 'Ab4', 'C5'], ['G4', 'Bb4', 'D5'], ['Ab4', 'C5', 'Eb5'], ['Bb4', 'D5', 'F5'], ['C5', 'Eb5', 'G5']]
      }
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
      notes: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'],
      base: {
        notes: [['C4', 'E4', 'G4'], ['D4', 'F4', 'A4'], ['E4', 'G4', 'B4'], ['F4', 'A4', 'C5'], ['G4', 'B4', 'D5'], ['A4', 'C5', 'E5'], ['B4', 'D5', 'F5'], ['C5', 'E5', 'G5']]
      }
    },
    {
      name: 'Minor',
      notes: ['C4', 'D4', 'Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5'],
      base: {
        notes: [['C4', 'Eb4', 'G4'], ['D4', 'F4', 'Ab4'], ['Eb4', 'G4', 'Bb4'], ['F4', 'Ab4', 'C5'], ['G4', 'Bb4', 'D5'], ['Ab4', 'C5', 'Eb5'], ['Bb4', 'D5', 'F5'], ['C5', 'Eb5', 'G5']]
      }
    },
    {
      name: 'Harmonic Minor',
      notes: ['C4', 'D4', 'Eb4', 'F4', 'G4', 'Ab4', 'B4', 'C5'],
      base: {
        notes: [['C4', 'Eb4', 'G4'], ['D4', 'F4', 'Ab4'], ['Eb4', 'G4', 'B4'], ['F4', 'Ab4', 'C5'], ['G4', 'B4', 'D5'], ['Ab4', 'C5', 'Eb5'], ['B4', 'D5', 'F5'], ['C5', 'Eb5', 'G5']]
      }
    },
    {
      name: 'Melodic Minor',
      notes: ['C4', 'D4', 'Eb4', 'F4', 'G4', 'A4', 'B4', 'C5'],
      revnotes: ['C4', 'D4', 'Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5'],
      base: {
        notes: [['C4', 'Eb4', 'G4'], ['D4', 'F4', 'A4'], ['Eb4', 'G4', 'B4'], ['F4', 'A4', 'C5'], ['G4', 'B4', 'D5'], ['A4', 'C5', 'Eb5'], ['B4', 'D5', 'F5'], ['C5', 'Eb5', 'G5']]
      }
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
      name: 'Diatonic',
      notes: [['C4', 'E4', 'G4'], ['D4', 'F4', 'A4'], ['E4', 'G4', 'B4'], ['F4', 'A4', 'C5'], ['G4', 'B4', 'D5'], ['A4', 'C5', 'E5'], ['B4', 'D5', 'F5'], ['C5', 'E5', 'G5']],
      type: 'CHORDS'
    },
    {
      name: 'Diatonic [4]',
      notes: [['C4', 'E4', 'G4', 'B4'], ['D4', 'F4', 'A4', 'C5'], ['E4', 'G4', 'B4', 'D5'], ['F4', 'A4', 'C5', 'E5'], ['G4', 'B4', 'D5', 'F5'], ['A4', 'C5', 'E5', 'G5'], ['B4', 'D5', 'F5', 'A5'], ['C5', 'E5', 'G5', 'B5']],
      type: 'CHORDS'
    },
    {
      name: 'Minor Diatonic',
      notes: [['C4', 'Eb4', 'G4'], ['D4', 'F4', 'Ab4'], ['Eb4', 'G4', 'Bb4'], ['F4', 'Ab4', 'C5'], ['G4', 'Bb4', 'D5'], ['Ab4', 'C5', 'Eb5'], ['Bb4', 'D5', 'F5'], ['C5', 'Eb5', 'G5']],
      type: 'CHORDS'
    },
    {
      name: 'Minor Diatonic [4]',
      notes: [['C4', 'Eb4', 'G4', 'Bb4'], ['D4', 'F4', 'Ab4', 'C5'], ['Eb4', 'G4', 'Bb4', 'D5'], ['F4', 'Ab4', 'C5', 'Eb5'], ['G4', 'Bb4', 'D5', 'F5'], ['Ab4', 'C5', 'Eb5', 'G5'], ['Bb4', 'D5', 'F5', 'Ab5'], ['C5', 'Eb5', 'G5', 'Bb5']],
      type: 'CHORDS'
    },
    {
      name: 'Harmonic Minor Diatonic',
      notes: [['C4', 'Eb4', 'G4'], ['D4', 'F4', 'Ab4'], ['Eb4', 'G4', 'B4'], ['F4', 'Ab4', 'C5'], ['G4', 'B4', 'D5'], ['Ab4', 'C5', 'Eb5'], ['B4', 'D5', 'F5'], ['C5', 'Eb5', 'G5']],
      type: 'CHORDS'
    },
    {
      name: 'Harmonic Minor Diatonic [4]',
      notes: [['C4', 'Eb4', 'G4', 'B4'], ['D4', 'F4', 'Ab4', 'C5'], ['Eb4', 'G4', 'B4', 'D5'], ['F4', 'Ab4', 'C5', 'Eb5'], ['G4', 'B4', 'D5', 'F5'], ['Ab4', 'C5', 'Eb5', 'G5'], ['B4', 'D5', 'F5', 'Ab5'], ['C5', 'Eb5', 'G5', 'B5']],
      type: 'CHORDS'
    },
    {
      name: 'Melodic Minor Diatonic',
      notes: [['C4', 'Eb4', 'G4'], ['D4', 'F4', 'A4'], ['Eb4', 'G4', 'B4'], ['F4', 'A4', 'C5'], ['G4', 'B4', 'D5'], ['A4', 'C5', 'Eb5'], ['B4', 'D5', 'F5'], ['C5', 'Eb5', 'G5']],
      type: 'CHORDS'
    },
    {
      name: 'Melodic Minor Diatonic [4]',
      notes: [['C4', 'Eb4', 'G4', 'B4'], ['D4', 'F4', 'A4', 'C5'], ['Eb4', 'G4', 'B4', 'D5'], ['F4', 'A4', 'C5', 'Eb5'], ['G4', 'B4', 'D5', 'F5'], ['A4', 'C5', 'Eb5', 'G5'], ['B4', 'D5', 'F5', 'A5'], ['C5', 'Eb5', 'G5', 'B5']],
      type: 'CHORDS'
    },
    {
      name: 'Diatonic + ',
      notes: [['C4', 'E4', 'G4'], ['D4', 'F4', 'A4'], ['E4', 'G4', 'B4'], ['F4', 'A4', 'C5'], ['G4', 'B4', 'D5'], ['A4', 'C5', 'E5'], ['B4', 'D5', 'F5'], ['C5', 'E5', 'G5']],
      revnotes: [['C4', 'E4', 'G4', 'Bb4'], ['D4', 'F#4', 'A4', 'C5'], ['E4', 'G#4', 'B4', 'D5'], ['F4', 'A4', 'C5', 'Eb5'], ['G4', 'B4', 'D5', 'F5'], ['A4', 'C#5', 'E5', 'G5'], ['B4', 'D#5', 'F#5', 'A5'], ['C5', 'E5', 'G5', 'Bb5']],
      type: 'CHORDS'
    }
  ]
})

export const mutations = {
  setpointerdown (state, pointerdown) {
    state.pointerdown = pointerdown
  },
  setcurrentnote (state, currentnote) {
    state.currentnote = currentnote
  }
}
