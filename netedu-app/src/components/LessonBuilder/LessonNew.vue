<template>
  <div id="lesson-new" class="card text-center">

    <div class="card-header">
      <ul class="nav nav-pills card-header-pills">
        <li class="nav-item" v-for="item in headings" :key="item.id">
          <span
            :id="'lessonNewHeading-'+item.id"
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
      <p>Footer
        <span v-if="lessonGrade" class="card-text">{{ lessonGrade }}</span>
      </p>
      <!-- <a
        class="btn btn-primary"
        href="#"
        v-on:click="prevSubComp"
        :class="{btnDisable: isOverflowPrev}">Previous</a>
      <a
        class="btn btn-primary"
        v-if="isSkillsNewComplete"
        :href="linkSkillForm">Finish</a>
      <a
        class="btn btn-primary"
        href="#"
        ref="skillsNext"
        v-on:click="nextSubComp"
        :class="{btnDisable: isOverflowNext}"
        :disabled="elementDisable">Next</a> -->
    </div>

  </div>
</template>

<script>
import LessonGrades from './LessonGrades'
import LessonSubjects from './LessonSubjects'
import { Lesson } from './lessonDataModules'
import { EventBus } from '@/main'

export default {
  data () {
    return {
      headings: null,
      lessonGrade: null,
      lessonSubject: null,
      lessonNewCompleteArr: [
        {lessonGradeHasValue: ''},
        {lessonSubjectHasValue: ''},
        {lessonLectureHasValue: ''},
        {lessonTitleHasValue: ''},
        {lessonCodeHasValue: ''}
      ],
      subCompIndex: 1
    }
  },
  created () {
    this.headings = Lesson.Headings
  },
  mounted () {
    this.eventGradeSelected()
  },
  watch: {
    lessonGrade () {
      console.log('LessonNew>watch --> this.lessonGrade:')
      console.log(this.lessonGrade)
      console.log('<--')
      // this.lessonGrade = this.$store.getters.getLessonGrade
    }
  },
  methods: {
    compareIndexToHeadings (h) {
      return this.subCompIndex === this.headings[h].id
    },
    eventGradeSelected () {
      EventBus.$on('gradeSelected', (e) => {
        this.lessonGrade = e
        this.lessonNewCompleteArr[0] = true
        console.log('LessonNew>eventGradeSelected --> this.lessonGrade:')
        console.log(e)
        console.log('<--')
      })
    }
  },
  components: {
    LessonGrades,
    LessonSubjects
  }
}
</script>
