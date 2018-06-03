<template>
  <div id="lesson-subjects">
    <h2 class="card-title">Please select subject:</h2>

    <div v-for="item in subjects" :key="item.id">
      <div class="netedu-content-tab">
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
      subjects: Lesson.Subjects
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../main.scss";

.netedu-content-tab {
  background-color: #d32f2ff3;
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.75);
  margin: 10px 0;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 20%;

  &:hover {
    cursor: pointer;
    background-color: $netedu-red-hover;
    border-color: $netedu-red-hover-border;
  }
}
</style>
