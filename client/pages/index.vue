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
      <div class="tr-btn header-item px-3" @click.stop.prevent="decrement">
        <span>
          <img src="~/static/svg/minus.svg" width="60%" height="60%">
        </span>
      </div>
      <div class="tr header-item">
        <input v-model="transpose" type="number" min="-36" max="36">
      </div>
      <div class="tr-btn header-item px-3" @click.stop.prevent="increment">
        <span>
          <img src="~/static/svg/plus.svg" width="60%" height="60%">
        </span>
      </div>
      <div class="scale header-item">
        <span>
          <select v-model="scaleid" class="px-3 py-3 my-0" @change="blur">
            <option v-for="(scale, index) in $store.state.scaleList" :key="index" :value="index">
              {{ scale.name }}
            </option>
          </select>
        </span>
      </div>
      <div class="scale-label header-item px-3">
        <span>
          {{ type }}
        </span>
      </div>
    </div>
    <div class="scale-container">
      <Scale
        v-for="octave in octaves"
        :ref="'scale' + octave"
        :key="octave"
        :notes="transposenotes(notes, octave)"
        :revnotes="revnotes && transposenotes(revnotes, octave)"
        :width="width"
        :height="height"
        :colors="colors"
        :edit="edit"
        :sustain="sustain"
        @attack="attack"
        @release="release"
        @play="play"
      />
    </div>
    <div v-if="base" class="scale-container base-scale-container">
      <Scale
        v-if="base"
        :ref="'basescale'"
        :notes="transposenotes(basenotes, -1)"
        :revnotes="baserevnotes && transposenotes(baserevnotes, -1)"
        :width="baseWidth"
        :height="height"
        :colors="baseColors"
        :edit="edit"
        :sustain="sustain"
        @attack="attack"
        @release="release"
        @play="play"
      />
    </div>
  </div>
</template>

<script>
import * as Tone from 'tone'
// import Color from '../mixins/color'
const sizeList = ['S', 'M', 'L', 'X']
const keyIndexMap = { a: 0, s: 1, d: 2, f: 3, g: 4, h: 5, j: 6, k: 7, l: 8, ';': 9, ':': 10, ']': 11 }
const lowerKeyIndexMap = { z: 0, x: 1, c: 2, v: 3, b: 4, n: 5, m: 6, ',': 7, '.': 8, '/': 9, '\\': 10, shift: 11 }
const upperKeyIndexMap = { q: 0, w: 1, e: 2, r: 3, t: 4, y: 5, u: 6, i: 7, o: 8, p: 9, '@': 10, '[': 11 }
const baseKeyIndexMap = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 7: 6, 8: 7, 9: 8 }

const mediaQuery = window.matchMedia('(max-width: 575.96px)')
const revMediaQuery = window.matchMedia('(min-width: 576px)')

export default {
  // TODO: this causes vetur error
  // mixins: [Color],
  data () {
    return {
      edit: false,
      scaleid: 0,
      rows: 1, // responsive
      synth: new Tone.PolySynth().toDestination(),
      // TODO: not tested
      sustain: false,
      cycle: true,
      transpose: 0,
      colorList: [...Array(13).keys()].map(i => this.hsv2rgb([i * 30, 0.5, 0.8])),
      sizeIndex: 0,
      base: false
    }
  },
  computed: {
    notes () {
      return this.$store.state.scaleList[this.scaleid].notes.filter((element, index, array) => {
        if (this.cycle) {
          return true
        }
        return index < array.length - 1
      }).map((element) => {
        return this.transposenote(element, this.transpose)
      })
    },
    revnotes () {
      const revnotes = this.$store.state.scaleList[this.scaleid].revnotes
      if (revnotes == null) {
        return null
      }
      return revnotes.filter((element, index, array) => {
        if (this.cycle) {
          return true
        }
        return index < array.length - 1
      }).map((element) => {
        return this.transposenote(element, this.transpose)
      })
    },
    basenotes () {
      if (this.$store.state.scaleList[this.scaleid].base == null) {
        return this.$store.state.scaleList.find(element => element.name === 'Chromatic'
        ).notes.filter((element, index, array) => {
          if (this.cycle) {
            return true
          }
          return index < array.length - 1
        }).map((element) => {
          return this.transposenote(element, this.transpose)
        })
      }
      return this.$store.state.scaleList[this.scaleid].base.notes.filter((element, index, array) => {
        if (this.cycle) {
          return true
        }
        return index < array.length - 1
      }).map((element) => {
        return this.transposenote(element, this.transpose)
      })
    },
    baserevnotes () {
      if (this.$store.state.scaleList[this.scaleid].base == null) {
        return null
      } else if (this.$store.state.scaleList[this.scaleid].base.revnotes == null) {
        return null
      } else {
        return this.$store.state.scaleList[this.scaleid].base.revnotes.filter((element, index, array) => {
          if (this.cycle) {
            return true
          }
          return index < array.length - 1
        }).map((element) => {
          return this.transposenote(element, this.transpose)
        })
      }
    },
    type () {
      return this.$store.state.scaleList[this.scaleid].type || 'SCALE'
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
        case 3:
          octaveList = [0, 1]
          break
      }
      return octaveList
    },
    colors () {
      return this.$store.state.scaleList[this.scaleid].notes.map((element, index, array) => {
        return this.colorList[parseInt(12 * index / (array.length - 1))]
      }).map((hsv) => {
        return `rgb(${hsv[0]}, ${hsv[1]}, ${hsv[2]})`
      })
    },
    baseColors () {
      if (this.$store.state.scaleList[this.scaleid].base == null) {
        return this.colorList.map((hsv) => {
          return `rgb(${hsv[0]}, ${hsv[1]}, ${hsv[2]})`
        })
      }
      return this.$store.state.scaleList[this.scaleid].base.notes.map((element, index, array) => {
        return this.colorList[parseInt(12 * index / (array.length - 1))]
      }).map((hsv) => {
        return `rgb(${hsv[0]}, ${hsv[1]}, ${hsv[2]})`
      })
    },
    width () {
      const ceilLength = parseInt(
        (this.$store.state.scaleList[this.scaleid].notes.length + this.rows - 1) / this.rows
      ) * this.rows
      return this.rows * 100.0 / ceilLength + '%'
    },
    baseWidth () {
      if (this.$store.state.scaleList[this.scaleid].base == null) {
        const ceilLength = parseInt((12 + this.rows) / this.rows) * this.rows
        return this.rows * 100.0 / ceilLength + '%'
      }
      const ceilLength = parseInt(
        (this.$store.state.scaleList[this.scaleid].base.notes.length + this.rows - 1) / this.rows
      ) * this.rows
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
    window.onkeydown = this.keyattack
    window.onkeyup = this.keyrelease
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
      this.sizeIndex = (this.sizeIndex + 1) % 4
      if (this.sizeIndex === 3) {
        this.base = true
      } else {
        this.base = false
      }
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
    keyattack (event) {
      this.keyplay(event)
    },
    keyrelease (event) {
      this.keyplay(event, true)
    },
    keyplay (event, release = false) {
      event.preventDefault()
      const index = keyIndexMap[event.key]
      if (index !== undefined && index < this.notes.length) {
        this.$refs.scale0[0].keyplay(index, event.ctrlKey, release)
      }
      const lowerIndex = lowerKeyIndexMap[event.key]
      if (this.sizeIndex === 2 && lowerIndex !== undefined && lowerIndex < this.notes.length) {
        this.$refs['scale-1'][0].keyplay(lowerIndex, event.ctrlKey, release)
      }
      const upperIndex = upperKeyIndexMap[event.key]
      if (this.sizeIndex > 0 && upperIndex !== undefined && upperIndex < this.notes.length) {
        this.$refs.scale1[0].keyplay(upperIndex, event.ctrlKey, release)
      }
      const baseIndex = baseKeyIndexMap[event.key]
      if (this.sizeIndex === 3 && baseIndex !== undefined && baseIndex < this.basenotes.length) {
        this.$refs.basescale.keyplay(baseIndex, event.ctrlKey, release)
      }
    },
    transposenote (note, transpose) {
      if (Array.isArray(note)) {
        return note.map((element) => {
          return Tone.Frequency(element).transpose(transpose).toNote()
        })
      }
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
  height: 0%;
  width: 100%;
  display: flex;
  flex-flow: column-reverse;
  flex-grow: 2;
}
.base-scale-container {
  height: 0%;
  flex-grow: 1;
}
span {
  color: white;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* width: 100%; */
}
Scale {
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
  justify-content: center;
  text-align: center;
}
.header-item.scale > span {
  justify-content: flex-end;
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
