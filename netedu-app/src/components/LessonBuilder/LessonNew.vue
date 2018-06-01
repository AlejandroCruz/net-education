<template>
  <div id="lesson-new" class="card text-center">

    <div class="card-header">
      <ul class="nav nav-pills card-header-pills">
        <li class="nav-item" v-for="item in headings" :key="item.id">
          <span
            :id="'skillsNewHeading-'+item.id"
            :class="{ active:item.id === subCompIndex }"
            class="nav-link">
            {{ item.id }}. {{ item.label }}
          </span>
        </li>
      </ul>
    </div>

    <div class="card-body">
      <div v-if="compareIndexToHeadings(0)">
        <LessonGrades/>
      </div>
      <div v-if="compareIndexToHeadings(1)">
        <LessonSubjects/>
      </div>
    </div>

    <div class="cardFooter">
      Footer
    </div>

  </div>
</template>

<script>
import LessonGrades from './LessonGrades'
import LessonSubjects from './LessonSubjects'
import { Lesson } from './lessonDataModules'

export default {
  data () {
    return {
      headings: null,
      subCompIndex: 1,
      counter: 0
    }
  },
  created () {
    this.headings = Lesson.Headings
  },
  methods: {
    compareIndexToHeadings (h) {
      return this.subCompIndex === this.headings[h].id
    }
  },
  components: {
    LessonGrades,
    LessonSubjects
  }
}
</script>
