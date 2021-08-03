<template>
  <div class="note" :style="{ backgroundColor: color }" @touchstart="playEmit()" @mousedown="playEmit()">
    <span v-show="!edit">{{ internalnote }}</span>
    <input v-show="edit" v-model="internalnote" type="text" @click.stop>
  </div>
</template>

<script>
export default {
  props: {
    edit: Boolean,
    note: {
      type: String,
      default: 'C4'
    },
    color: {
      type: String,
      default: 'cornflowerblue'
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
  watch: {
    note (newNote) {
      this.internalnote = newNote
    }
  },
  methods: {
    // playprop (event) {
    //   this.play(this.note)
    // }
    playEmit () {
      this.$emit('play', this.internalnote)
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
  color:darkslategrey;
}
/* Extra large devices (large desktops) */
/* No media query since the extra-large breakpoint has no upper bound on its width */
.note {
    font-size: 2rem;
  }
/* Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) {
  .note {
    font-size: 1.8rem;
  }
}
/* Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) {
  .note {
    font-size: 1.6rem;
  }
}
/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) {
  .note {
    font-size: 1.3rem;
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
