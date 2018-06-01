<template>
  <div id="lesson-grades">
    <h2 class="card-title">Please select grade:</h2>

    <div v-for="item in grades" :key="item.id">
      <div
        class="netedu-content-tab"
        @click="gradeEvent(item.label)">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
import { Lesson } from './lessonDataModules'

export default {
  data () {
    return {
      grades: Lesson.Grades
    }
  },
  methods: {
    gradeEvent (e) {
      this.$store.dispatch('setLessonBuildData', { 'grade': e })
      console.log('LessonGrades>gradeEvent -->')
      console.log(this.$store.getters.getLessonBuildData)
      console.log('<--')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../main.scss";

.netedu-content-tab {
  background-color: $netedu-red;
  border-color: $netedu-red-border;
  border-radius: 5px;
  color: $netedu-tab-text-color;
  float: left;
  margin: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 10%;

  &:hover {
    background-color: $netedu-red-hover;
    border-color: $netedu-red-hover-border;
  }
}
</style>
