<template>
  <div class="body">
    <div class="header">
      <div class="edit header-item" @click="toggle">
        <span>
          {{ edit ? 'Done' : 'Edit' }}
        </span>
      </div>
      <div class="scale header-item">
        <span class="mx-4">
          <select v-model="scaleid" class="px-3 py-1 my-2">
            <option v-for="(scale, index) in scales" :key="index" :value="index">
              {{ scale.name }}
            </option>
          </select>
        </span>
        <span class="mr-4">
          Scale
        </span>
      </div>
    </div>
    <div class="note-container">
      <div v-for="(note, index) in notes" :key="index" class="note-set">
        <Note :edit="edit" :note="note" :color="colors[index]" />
        <Note v-if="revnotes && note != revnotes[index]" :edit="edit" :note="revnotes[index]" :color="colors[index]" />
      </div>
    </div>
  </div>
</template>

<script>
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
    name: 'Yonanuki',
    notes: ['C4', 'D4', 'E4', 'G4', 'A4', 'C5']
  },
  {
    name: 'Minyo',
    notes: ['C4', 'Eb4', 'F4', 'G4', 'Bb4', 'C5']
  },
  {
    name: 'Miyakobushi',
    notes: ['C4', 'Db4', 'F4', 'G4', 'Ab4', 'C5']
  },
  {
    name: 'Ritsu',
    notes: ['C4', 'D4', 'F4', 'G4', 'A4', 'C5']
  },
  {
    name: 'Ryukyu',
    notes: ['C4', 'E4', 'F4', 'G4', 'B4', 'C5']
  },
  {
    name: 'Ryo',
    notes: ['C4', 'D4', 'F4', 'G4', 'A4', 'C5']
  },
  {
    name: 'Yo',
    notes: ['C4', 'D4', 'F4', 'G4', 'Bb4', 'C5'],
    revnotes: ['C4', 'D4', 'F4', 'G4', 'A4', 'C5']
  },
  {
    name: 'In',
    notes: ['C4', 'Db4', 'F4', 'G4', 'Bb4', 'C5'],
    revnotes: ['C4', 'Db4', 'F4', 'G4', 'Ab4', 'C5']
  }
]

const colorList = [
  'cornflowerblue',
  'violet',
  'darkkhaki',
  'darkcyan',
  'salmon',
  'cornflowerblue'
]

export default {
  data () {
    return {
      edit: false,
      scales: scaleList,
      colors: colorList,
      scaleid: 0
    }
  },
  computed: {
    notes () {
      return this.scales[this.scaleid].notes
    },
    revnotes () {
      const scale = this.scales[this.scaleid]
      return scale.revnotes
    }
  },
  methods: {
    toggle (event) {
      const mode = this.edit
      this.edit = !mode
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
  font-size: 3rem;
  width: 100%;
}
.note-container {
  height: 100%;
  width: 100%;
  display: flex;
}
Note {
  width: 100%;
}
.header-item {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.edit {
  background-color: gray;
}
.scale {
  background-color:slategray;
  display: flex;
  justify-content: flex-end;
}
.note-set {
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
}
select, option {
  background-color: slategray;
  color: white;
}
option {
  font-size: 2rem;
}
select {
  border-color:lightslategrey;
  border-radius: 2rem;
  text-align: center;
}
</style>
