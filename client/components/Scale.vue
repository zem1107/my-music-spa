<template>
  <div class="note-container">
    <div
      v-for="(note, index) in notes"
      :key="index"
      :style="{ width: width, height: height }"
      class="note-set"
    >
      <Note
        :ref="'note' + index"
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
        :ref="'revnote' + index"
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
</template>

<script>
export default {
  props: {
    edit: Boolean,
    notes: {
      type: Array,
      default: null
    },
    revnotes: {
      type: Array,
      default: null
    },
    colors: {
      type: Array,
      default: null
    },
    sustain: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }
  },
  methods: {
    play (note) {
      this.$emit('play', note)
    },
    attack (note) {
      if (this.sustain) {
        this.$emit('attack', note)
      } else {
        this.$emit('play', note)
      }
    },
    release (note) {
      if (this.sustain) {
        this.$emit('release', note)
      }
    },
    keyplay (index, rev, release) {
      if (release) {
        if (this.revnotes && this.$refs['revnote' + index]) {
          this.$refs['revnote' + index][0].release()
        }
        this.$refs['note' + index][0].release()
      } else if (rev && this.$refs['revnote' + index]) {
        this.$refs['revnote' + index][0].attack()
      } else {
        this.$refs['note' + index][0].attack()
      }
    }
  }
}
</script>

<style scoped>
  Note {
    width: 100%;
    height: 100%;
  }
  .note-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-flow: wrap-reverse;
  }
  .note-set {
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    /* flex-grow: 1; */
    flex-shrink: 1;
  }
</style>
