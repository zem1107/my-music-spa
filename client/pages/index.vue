<template>
  <div class="body">
    <div class="header">
      <!-- <div class="edit header-item px-5" @click="toggle">
        <span>
          {{ edit ? 'Done' : 'Edit' }}
        </span>
      </div> -->
      <div class="size-label header-item px-3">
        <span>
          SIZE
        </span>
      </div>
      <div class="size-btn header-item px-3" @click.stop="resize">
        <span>
          {{ size }}
        </span>
      </div>
      <div class="tr-label header-item px-3">
        <span>
          TRANSPOSE
        </span>
      </div>
      <div class="tr-btn header-item px-3" @click.stop="decrement">
        <span>
          -
        </span>
      </div>
      <div class="tr header-item">
        <input v-model="transpose" type="number" min="-36" max="36">
      </div>
      <div class="tr-btn header-item px-3" @click.stop="increment">
        <span>
          +
        </span>
      </div>
      <div class="scale header-item">
        <span>
          <select v-model="scaleid" class="px-3 py-3 my-0" @change="blur">
            <option v-for="(scale, index) in scales" :key="index" :value="index">
              {{ scale.name }}
            </option>
          </select>
        </span>
      </div>
      <div class="scale-label header-item px-3">
        <span>
          SCALE
        </span>
      </div>
    </div>
    <div class="scale-container">
      <div v-for="octave in octaves" :key="octave" class="note-container">
        <div v-for="(note, index) in transposenotes(notes, octave)" :key="index" :style="{ width: width, height: height }" class="note-set">
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
            v-if="revnotes && note != transposenotes(revnotes, octave)[index]"
            :edit="edit"
            :note="transposenotes(revnotes, octave)[index]"
            :color="colors[index]"
            :sustain="sustain"
            @attack="attack"
            @release="release"
            @play="play"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Tone from 'tone'
// import Color from '../mixins/color'
const scaleList = [
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
  }
]

const sizeList = ['S', 'M', 'L']
const keyIndexMap = { a: 0, s: 1, d: 2, f: 3, g: 4, h: 5, j: 6, k: 7, l: 8, ';': 9, ':': 10, ']': 11 }
const lowerKeyIndexMap = { z: 0, x: 1, c: 2, v: 3, b: 4, n: 5, m: 6, ',': 7, '.': 8, '/': 9, '\\': 10, shift: 11 }
const upperKeyIndexMap = { q: 0, w: 1, e: 2, r: 3, t: 4, y: 5, u: 6, i: 7, o: 8, p: 9, '@': 10, '[': 11 }

const mediaQuery = window.matchMedia('(max-width: 575.96px)')
const revMediaQuery = window.matchMedia('(min-width: 576px)')

export default {
  // TODO: this causes vetur error
  // mixins: [Color],
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
      transpose: 0,
      colorList: [...Array(13).keys()].map(i => this.hsv2rgb([i * 30, 0.6, 0.85])),
      sizeIndex: 0
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
        return this.transposenote(element, this.transpose)
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
        return this.transposenote(element, this.transpose)
      })
    },
    size () {
      return sizeList[this.sizeIndex]
    },
    octaves () {
      let octaveList
      switch (this.sizeIndex) {
        case 0:
          octaveList = [0]
          break
        case 1:
          octaveList = [0, 1]
          break
        case 2:
          octaveList = [-1, 0, 1]
          break
      }
      return octaveList
    },
    colors () {
      if (this.scales[this.scaleid].notes.length === 6) {
        return this.colorList.filter((element, index) => {
          if ([0, 2, 4, 7, 9, 12].includes(index)) {
            return true
          }
          return false
        }).map((hsv) => {
          return `rgb(${hsv[0]}, ${hsv[1]}, ${hsv[2]})`
        })
      } else if (this.scales[this.scaleid].notes.length === 8) {
        return this.colorList.filter((element, index) => {
          if ([0, 2, 4, 5, 7, 9, 11, 12].includes(index)) {
            return true
          }
          return false
        }).map((hsv) => {
          return `rgb(${hsv[0]}, ${hsv[1]}, ${hsv[2]})`
        })
      }
      return this.colorList.map((hsv) => {
        return `rgb(${hsv[0]}, ${hsv[1]}, ${hsv[2]})`
      })
    },
    width () {
      const ceilLength = parseInt((this.scales[this.scaleid].notes.length + this.rows - 1) / this.rows) * this.rows
      return this.rows * 100.0 / ceilLength + '%'
    },
    height () {
      return 100.0 / this.rows + '%'
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
    resize () {
      this.sizeIndex = (this.sizeIndex + 1) % 3
      // if (this.sizeIndex in [1, 2]) {
      //   this.cycle = false
      // } else {
      //   this.cycle = true
      // }
    },
    decrement () {
      this.transpose--
    },
    increment () {
      this.transpose++
    },
    blur (event) {
      event.target.blur()
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
      const lowerIndex = lowerKeyIndexMap[event.key]
      if (lowerIndex !== undefined && lowerIndex < this.notes.length) {
        if (event.ctrlKey) {
          this.play(this.transposenote(this.revnotes[lowerIndex], -12))
        } else {
          this.play(this.transposenote(this.notes[lowerIndex], -12))
        }
      }
      const upperIndex = upperKeyIndexMap[event.key]
      if (upperIndex !== undefined && upperIndex < this.notes.length) {
        if (event.ctrlKey) {
          this.play(this.transposenote(this.revnotes[upperIndex], 12))
        } else {
          this.play(this.transposenote(this.notes[upperIndex], 12))
        }
      }
    },
    transposenote (note, transpose) {
      return Tone.Frequency(note).transpose(transpose).toNote()
    },
    transposenotes (notes, octave) {
      return notes.map((note) => {
        return this.transposenote(note, octave * 12)
      })
    },
    hsv2rgb (hsv) {
      const h = hsv[0] / 60
      const s = hsv[1]
      const v = hsv[2]
      if (s === 0) {
        return [v * 255, v * 255, v * 255]
      }
      let rgb
      const i = parseInt(h)
      const f = h - i
      const v1 = v * (1 - s)
      const v2 = v * (1 - s * f)
      const v3 = v * (1 - s * (1 - f))

      switch (i) {
        case 0:
        case 6:
          rgb = [v, v3, v1]
          break

        case 1:
          rgb = [v2, v, v1]
          break

        case 2:
          rgb = [v1, v, v3]
          break

        case 3:
          rgb = [v1, v2, v]
          break

        case 4:
          rgb = [v3, v1, v]
          break

        case 5:
          rgb = [v, v1, v2]
          break
      }

      return rgb.map((value) => {
        return value * 255
      })
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
  background-color:lightgray;
}
.header {
  display: flex;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
}
.scale-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column-reverse;
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
  background-color: slategray;
}
.header-item > span {
  /* width: 100%; */
  display: flex;
  align-items: right;
  justify-content: flex-end;
  text-align: center;
}
.edit {
  width: 20%;
}
.size-btn {
  width: 5rem;
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
  background-color:dimgray;
}
.scale {
  background-color:slategray;
  display: flex;
  justify-content: flex-end;
  flex-grow: 1
}
.scale span {
  width: 100%;
}
.note-set {
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  /* flex-grow: 1; */
  flex-shrink: 1;
}
select, option {
  background-color: slategray;
  color: white;
  text-align: right;
}
select {
  height: 100%;
  width: 100%;
  max-width: 20rem;
  border: none;
  outline: none;
  text-align: right;
}
/* Extra large devices (large desktops) */
/* No media query since the extra-large breakpoint has no upper bound on its width */
.header {
  font-size: 1.6rem;
}
option {
  font-size: 1.6rem;
}
/* Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) {
  .header {
    font-size: 1.3rem;
  }
  option {
    font-size: 1.3rem;
  }
}
/* Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) {
  .header {
    font-size: 1rem;
  }
  option {
    font-size: 1rem;
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
  .size-label,.tr-label.header-item,.scale-label.header-item {
    display: none;
  }
}
</style>
