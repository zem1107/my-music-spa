<template>
  <div class="body">
    <div class="header">
      <!-- <div class="edit header-item px-5" @click="toggle">
        <span>
          {{ edit ? 'Done' : 'Edit' }}
        </span>
      </div> -->
      <div class="tr-label header-item px-3">
        <span>
          transpose
        </span>
      </div>
      <div class="tr-btn header-item px-3" @click="decrement">
        <span>
          -
        </span>
      </div>
      <div class="tr header-item">
        <input v-model="transpose" type="number" min="-36" max="36">
      </div>
      <div class="tr-btn header-item px-3" @click="increment">
        <span>
          +
        </span>
      </div>
      <div class="scale header-item">
        <span>
          <select v-model="scaleid" class="px-3 py-3 my-0">
            <option v-for="(scale, index) in scales" :key="index" :value="index">
              {{ scale.name }}
            </option>
          </select>
        </span>
      </div>
    </div>
    <div class="note-container">
      <div v-for="(note, index) in notes" :key="index" :style="{ width: width, height: height }" class="note-set">
        <Note
          :edit="edit"
          :note="note"
          :color="colors[index]"
          :sustain="sustain"
          @attack="attack"
          @release="release"
          @play="play"
        />
        <Note
          v-if="revnotes && note != revnotes[index]"
          :edit="edit"
          :note="revnotes[index]"
          :color="colors[index]"
          :sustain="sustain"
          @attack="attack"
          @release="release"
          @play="play"
        />
      </div>
    </div>
  </div>
</template>

<script>
import * as Tone from 'tone'
const scaleList = [
  {
    name: 'Major Pentatonic Scale',
    notes: ['C4', 'D4', 'E4', 'G4', 'A4', 'C5']
  },
  {
    name: 'Minor Pentatonic Scale',
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
    name: 'Major Scale',
    notes: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']
  },
  {
    name: 'Minor Scale',
    notes: ['C4', 'D4', 'Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5']
  },
  {
    name: 'Harmonic Minor Scale',
    notes: ['C4', 'D4', 'Eb4', 'F4', 'G4', 'Ab4', 'B4', 'C5']
  },
  {
    name: 'Melodic Minor Scale',
    notes: ['C4', 'D4', 'Eb4', 'F4', 'G4', 'A4', 'B4', 'C5'],
    revnotes: ['C4', 'D4', 'Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5']
  },
  {
    name: 'Dorian Scale',
    notes: ['C4', 'D4', 'Eb4', 'F4', 'G4', 'A4', 'Bb4', 'C5']
  },
  {
    name: 'Phrygian Scale',
    notes: ['C4', 'Db4', 'Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5']
  },
  {
    name: 'Lydian Scale',
    notes: ['C4', 'D4', 'E4', 'F#4', 'G4', 'A4', 'B4', 'C5']
  },
  {
    name: 'Mixolydian Scale',
    notes: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'Bb4', 'C5']
  },
  {
    name: 'Aeolian Scale',
    notes: ['C4', 'D4', 'Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5']
  },
  {
    name: 'Locrian Scale',
    notes: ['C4', 'Db4', 'Eb4', 'F4', 'Gb4', 'Ab4', 'Bb4', 'C5']
  }
]

const color5List = [
  'cornflowerblue',
  'violet',
  'darkkhaki',
  'darkcyan',
  'salmon',
  'cornflowerblue'
]

const color7List = [
  'cornflowerblue',
  'violet',
  'darkorange',
  'darkkhaki',
  'darkcyan',
  'salmon',
  'darkorchid',
  'cornflowerblue'
]

const keyIndexMap = { a: 0, s: 1, d: 2, f: 3, g: 4, h: 5, j: 6, k: 7 }

const mediaQuery = window.matchMedia('(max-width: 575.96px)')
const revMediaQuery = window.matchMedia('(min-width: 576px)')

export default {
  data () {
    return {
      edit: false,
      scales: scaleList,
      scaleid: 0,
      rows: 1,
      synth: new Tone.PolySynth().toDestination(),
      // TODO: not tested
      sustain: false,
      cycle: true,
      transpose: 0
    }
  },
  computed: {
    notes () {
      return this.scales[this.scaleid].notes.filter((element, index, array) => {
        if (this.cycle) {
          return true
        }
        return index < array.length - 1
      }).map((element) => {
        return Tone.Frequency(element).transpose(this.transpose).toNote()
      })
    },
    revnotes () {
      const revnotes = this.scales[this.scaleid].revnotes ? this.scales[this.scaleid].revnotes : this.scales[this.scaleid].notes
      return revnotes.filter((element, index, array) => {
        if (this.cycle) {
          return true
        }
        return index < array.length - 1
      }).map((element) => {
        return Tone.Frequency(element).transpose(this.transpose).toNote()
      })
    },
    colors () {
      if (this.scales[this.scaleid].notes.length === 6) {
        return color5List
      }
      return color7List
    },
    width () {
      return this.rows * 100 / this.scales[this.scaleid].notes.length + '%'
    },
    height () {
      return 100 / this.rows + '%'
    }
  },
  created () {
    mediaQuery.addEventListener('change', this.handleMQChange)
    this.handleMQChange(mediaQuery)
    revMediaQuery.addEventListener('change', this.handleRevMQChange)
    this.handleRevMQChange(revMediaQuery)
  },
  mounted () {
    window.addEventListener('keydown', this.keyplay)
  },
  methods: {
    toggle (event) {
      const mode = this.edit
      this.edit = !mode
    },
    handleMQChange (event) {
      if (event.matches) {
        this.rows = 2
      } else {
        this.rows = 1
      }
    },
    handleRevMQChange (event) {
      if (event.matches) {
        this.rows = 1
      } else {
        this.rows = 2
      }
    },
    decrement () {
      this.transpose--
    },
    increment () {
      this.transpose++
    },
    play (note) {
      this.synth.triggerAttackRelease(note, '8n')
    },
    attack (note) {
      this.synth.triggerAttack(note, '8n')
    },
    release (note) {
      const now = Tone.now()
      this.synth.triggerRelease(note, now + '8n', 0.5)
    },
    keyplay (event) {
      const index = keyIndexMap[event.key]
      if (index !== undefined && index < this.notes.length) {
        if (event.ctrlKey) {
          this.play(this.revnotes[index])
        } else {
          this.play(this.notes[index])
        }
      }
      // event.preventDefault()
    }
  }
}
</script>

<style scoped>
.body {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
}
.header {
  display: flex;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
}
.note-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-flow: wrap-reverse;
}
span {
  color: white;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* width: 100%; */
}
Note {
  width: 100%;
  height: 100%;
}
.header-item {
  /* width: 100%; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-item > span {
  /* width: 100%; */
  display: flex;
  align-items: right;
  justify-content: flex-end;
  text-align: center;
}
.edit {
  background-color: slategray;
  width: 20%;
}
/* .edit > span {
  text-align: center;
} */
.tr-btn {
  background-color:dimgray;
}
.tr-label {
  background-color: slategray;
}
.tr input {
  width: 100%;
  height: 100%;
  background-color: slategray;
  border: none;
  color: white;
  text-align: center;
}
.tr input::-webkit-outer-spin-button,
.tr input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.tr input[type=number] {
  -moz-appearance: textfield;
}
.tr {
  width: 5rem;
}
.tr-btn {
  width: 5rem;
}
.scale {
  background-color:slategray;
  display: flex;
  justify-content: flex-end;
  flex-grow: 1
}
.note-set {
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  flex-shrink: 1;
}
select, option {
  background-color: slategray;
  color: white;
}
select {
  height: 100%;
  width: 100%;
  border: none;
  text-align: right;
}
/* Extra large devices (large desktops) */
/* No media query since the extra-large breakpoint has no upper bound on its width */
.header {
  font-size: 1.8rem;
}
option {
  font-size: 1.8rem;
}
/* Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) {
  .header {
    font-size: 1.6rem;
  }
  option {
    font-size: 1.6rem;
  }
}
/* Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) {
  .header {
    font-size: 1.4rem;
  }
  option {
    font-size: 1.4rem;
  }
}
/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) {
  .header {
    font-size: 1rem;
  }
  option {
    font-size: 1rem;
  }
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .header {
    font-size: 1rem;
  }
  option {
    font-size: 1rem;
  }
}
</style>
