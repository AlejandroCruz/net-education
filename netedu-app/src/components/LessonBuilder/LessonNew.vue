<template>
  <div id="lesson-new" class="card">

    <div class="class-header">
      <ul class="nav nav-pills card-header-pills">
        <li class="nav-item" v-for="item in headings" :key="item.id">
          <span
            :id="'skillsNewHeading-'+item.id"
            :class="{ active:item.id == subCompIndex }"
            class="nav-link">
            {{ item.id }}. {{ item.label }}
          </span>
        </li>
      </ul>
    </div>

    <div class="card-body">
      <div v-if="subCompIndex == headings[0].id">
        <LessonGrades/>
      </div>
      <div v-if="subCompIndex == headings[1].id">
        <LessonSubjects/>
      </div>
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
      subCompIndex: 1
    }
  },
  mounted () {
    this.headings = Lesson.Headings
  },
  components: {
    LessonGrades,
    LessonSubjects
  }
}
</script>
