<template>
  <div id="lesson-subjects">

    <h3 class="card-title">Please select subject:</h3>
    <div class="flex-container" >
      <div
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

.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  div {
    background-color: $netedu-red;
    border-color: $netedu-red-border;
    border-radius: 5px;
    color: $netedu-tab-text-color;
    margin: 5px;
    min-width: 70px;
    padding: 10px 0;
    width: 10%;

    &:hover {
      cursor: pointer;
      background-color: $netedu-red-hover;
      border-color: $netedu-red-hover-border;
    }
  }
}

</style>
