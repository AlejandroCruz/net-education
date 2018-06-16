<template>
  <div id="lesson-grades">

    <p class="card-title">Please select grade:</p>

    <div class="flex-container" >
      <div
        v-for="item in grades"
        :key="item.id"
        @click="gradeEvent(item.label)">
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
      grades: Lesson.Grades
    }
  },
  methods: {
    gradeEvent ( e ) {
      EventBus.$emit( 'gradeSelected', e )
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../main.scss";

#lesson-grades {
  p:first-child {
      font-size: 1.5rem;

      @media (min-width: 992px) {
      font-size: 1.75rem;
    }
  }
}

.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  @media (min-width: 576px) {
    justify-content: flex-start;
  }

  div {
    background-color: $netedu-red;
    border-color: $netedu-red-border;
    border-radius: 5px;
    color: $netedu-tab-text-color;
    margin: 5px;
    min-width: 55px;
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
