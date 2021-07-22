<template>
  <div class="note" :style="{ backgroundColor: color }" @click="play">
    <span v-show="!edit">{{ internalnote }}</span>
    <input v-show="edit" v-model="internalnote" type="text" @click.stop>
  </div>
</template>

<script>
import * as Tone from 'tone'
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
    play (event) {
      // create a synth and connect it to the main output (your speakers)
      const synth = new Tone.Synth().toDestination()
      // play a middle 'C' for the duration of an 8th note
      synth.triggerAttackRelease(this.internalnote, '8n')
    }
  }
}
</script>

<style>
.note {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 4rem;
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
</style>
