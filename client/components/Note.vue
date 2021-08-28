<template>
  <div class="note" :style="{ backgroundColor: color }" @pointerdown="attack()" @pointerleave="release()" @pointerup="release()">
    <span v-show="!edit">{{ notelabel }}</span>
    <input v-show="edit" v-model="internalnote" type="text" @click.stop>
  </div>
</template>

<script>
import * as Tone from 'tone'
export default {
  props: {
    edit: Boolean,
    note: {
      type: [String, Array],
      default: 'C4'
    },
    color: {
      type: String,
      default: 'cornflowerblue'
    },
    sustain: {
      type: Boolean,
      default: false
    }
    // https://techblog.roxx.co.jp/entry/2020/07/09/092955
    // play: {
    //   type: Function,
    //   default: () => {}
    // }
  },
  data () {
    return {
      internalnote: this.note
    }
  },
  computed: {
    notelabel () {
      if (Array.isArray(this.internalnote)) {
        let notelabel = ''
        let first = 0
        if (this.internalnote.length >= 1) {
          first = Tone.Frequency(this.internalnote[0]).toMidi()
          notelabel += this.internalnote[0].slice(0, -1)
        }
        if (this.internalnote.length >= 3) {
          const second = Tone.Frequency(this.internalnote[1]).toMidi()
          const third = Tone.Frequency(this.internalnote[2]).toMidi()
          if (third - first === 6) {
            notelabel += 'dim'
          } else if (second - first === 3) {
            notelabel += 'm'
          }
        }
        if (this.internalnote.length >= 4) {
          const forth = Tone.Frequency(this.internalnote[3]).toMidi()
          if (forth - first === 11) {
            notelabel += 'M7'
          } else if (forth - first === 10) {
            notelabel += '7'
          }
        }
        return notelabel
      }
      return this.internalnote
    }
  },
  watch: {
    note (newNote) {
      this.internalnote = newNote
    }
  },
  methods: {
    play () {
      this.$emit('play', this.internalnote)
    },
    attack () {
      if (this.sustain) {
        this.$emit('attack', this.internalnote)
      } else {
        this.$emit('play', this.internalnote)
      }
    },
    release () {
      if (this.sustain) {
        this.$emit('release', this.internalnote)
      }
    }
  }
}
</script>

<style scoped>
.note {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
span {
  color: white;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
input {
  height: 5rem;
  width: 100%;
  text-align: center;
  color: white;
  background-color: transparent;
  border-width: 2px;
  border-color: white;
}
/* Extra large devices (large desktops) */
/* No media query since the extra-large breakpoint has no upper bound on its width */
.note {
    font-size: 3rem;
  }
/* Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) {
  .note {
    font-size: 2.4rem;
  }
}
/* Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) {
  .note {
    font-size: 1.8rem;
  }
}
/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) {
  .note {
    font-size: 1.2rem;
  }
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .note {
    font-size: 1.8rem;
  }
}
</style>
