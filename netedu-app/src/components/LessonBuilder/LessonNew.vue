<template>
  <div id="lesson-new" class="card text-center">

    <div class="card-header">
      <ul class="nav nav-pills card-header-pills">
        <li class="nav-item" v-for="item in headings" :key="item.id">
          <span
            :id="'lessonNewHeading-' + item.id"
            :class="{active:item.id === subCompIndex}"
            class="nav-link">
            {{ item.id}}. {{ item.label }}
          </span>
        </li>
      </ul>
    </div>

    <div class="card-body">
      <div v-if="compareIndexToHeadings( 0 )">
        <LessonGrades/>
      </div>
      <div v-if="compareIndexToHeadings( 1 )">
        <LessonSubjects/>
      </div>
    </div>

    <div class="cardFooter">
      <p>
        <span v-if="lessonGrade" class="card-text">{{ propKeyGrade }}: {{ lessonGrade.Grade }}</span>
        <span v-if="lessonSubject" class="card-text">> {{ propKeySubject }}: {{ lessonSubject.Subject }}</span>
      </p>
      <a
        class="btn btn-primary"
        href="#"
        @click="prevSubComp"
        :class="{ btnDisable: isOverflowPrev }">Previous
      </a>
      <!-- <a
        class="btn btn-primary"
        v-if="isSkillsNewComplete"
        :href="linkSkillForm">Finish</a> -->
      <a
        class="btn btn-primary"
        href="#"
        ref="skillsNext"
        @click="nextSubComp"
        :class="{ btnDisable: isOverflowNext }"
        :disabled="elementDisable">Next
      </a>
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
      propKeyGrade: null,
      propKeySubject: null,
      elementDisable: null,
      isOverflowPrev: null,
      isOverflowNext: null,
      jsonKey: null,
      jsonVal: null,
      lessonNewComplete: [
        { lessonGradeHasValue: '' },
        { lessonSubjectHasValue: '' },
        { lessonLectureHasValue: '' },
        { lessonTitleHasValue: '' },
        { lessonCodeHasValue: '' }
      ],
      subCompIndex: 1
    }
  },
  created () {
    this.headings = Lesson.Headings
  },
  mounted () {
    this.eventGradeSelected()
    this.eventSubjectSelected()
  },
  methods: {
    compareIndexToHeadings ( h ) {
      return this.subCompIndex === this.headings[ h ].id
    },
    eventGradeSelected () {
      EventBus.$on('gradeSelected', ( e ) => {
        this._lessonGradeStore( e )
          .then( this._lessonGradeVal())
          .then( this._propKeyGrade( this.lessonGrade ))
      })
    },
    eventSubjectSelected () {
      EventBus.$on('subjectSelected', ( e ) => {
        this._lessonSubjectStore( e )
          .then( this._lessonSubjectVal())
          .then( this._propKeySubject( this.lessonSubject ))
      })
    },
    nextSubComp () {
      this.isOverflowPrev = false
      if ( this.subCompIndex >= this.headings.length ) {
        this.elementDisable = 'disabled'
        this.isOverflowNext = true
        return
      }
      this.subCompIndex++
    },
    prevSubComp () {
      this.isOverflowNext = false
      if ( this.subCompIndex <= 1 ) {
        this.elementDisable = 'disabled'
        this.isOverflowPrev = true
        return
      }
      this.subCompIndex--
    },
    _propKeyGrade ( jObj ) {
      this.propKeyGrade = Object.keys( jObj )[ 0 ]
    },
    _propKeySubject ( jObj ) {
      this.propKeySubject = Object.keys( jObj )[ 0 ]
    },
    _lessonGradeStore ( e ) {
      return new Promise( resolve => {
        this.$store.dispatch('setLessonGrade', { 'Grade': e })
      })
    },
    _lessonSubjectStore ( e ) {
      return new Promise( resolve => {
        this.$store.dispatch('setLessonSubject', { 'Subject': e })
      })
    },
    _lessonGradeVal () {
      this.lessonGrade = this.$store.getters.getLessonGrade
      this.lessonNewComplete[ 0 ] = true
    },
    _lessonSubjectVal () {
      this.lessonSubject = this.$store.getters.getLessonSubject
      this.lessonNewComplete[ 0 ] = true
    }
  },
  components: {
    LessonGrades,
    LessonSubjects
  }
}
</script>

<style lang="scss" scoped>
.cardFooter {
  clear: left;
  padding-top: 40px;

  p {
    font-weight: bold;
    padding: 10px;
    text-align: left;
  }
}
.btnDisable {
  background-color: #0160c6;
}
</style>
