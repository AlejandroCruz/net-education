<template>
  <div id="lesson-subjects">

    <h2 class="card-title">Please select subject:</h2>
    <div class="netedu-content-wrapper" >
      <div
        class="netedu-content-tab"
        v-for="item in subjects"
        :key="item.id"
        @click="subjectEvent(item.label)">
        {{ item.label }}
      </div>
    </div>

  </div>
</template>

<script>
import { Lesson } from './lessonDataModules'
import { EventBus } from '@/main'

export default {
  data () {
    return {
      subjects: Lesson.Subjects
    }
  },
  methods: {
    subjectEvent ( e ) {
      EventBus.$emit( 'subjectSelected', e )
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../main.scss";

.netedu-content-wrapper {
  display: flex;
  justify-content: center;
}

.netedu-content-tab {
  background-color: $netedu-red;
  border-color: $netedu-red-border;
  border-radius: 5px;
  color: $netedu-tab-text-color;
  float: left;
  margin: 5px;
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
