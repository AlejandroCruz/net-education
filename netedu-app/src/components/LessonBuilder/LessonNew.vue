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
      <div v-if="compareIndexToHeadings( 2 )">
        <LessonTitle/>
      </div>

      <div class="card-sub-body">
        <a
          class="btn btn-primary"
          href="#"
          @click="prevSubComp"
          :class="{ btnDisable: isOverflowPrev }">
          Previous
        </a>
        <a
          class="btn btn-primary"
          v-if="isLessonNewComplete"
          :href="lessonFormLink">
          Finish
        </a>
        <a
          class="btn btn-primary"
          href="#"
          ref="skillsNext"
          @click="nextSubComp"
          :class="{ btnDisable: isOverflowNext }"
          :disabled="elementDisable">
          Next
        </a>
      </div>
    </div>
    <div class="card-footer text-muted">
      <p>
        <span v-if="lessonGrade" class="card-text"><i class="fa fa-check-square"/> {{ propKeyGrade }}: {{ lessonGrade.Grade }}</span>
        <span v-if="lessonSubject" class="card-text"><i class="fa fa-check-square"/> {{ propKeySubject }}: {{ lessonSubject.Subject }}</span>
        <span v-if="lessonTitle" class="card-text"><i class="fa fa-check-square"/> {{ propKeyTitle }}: {{ lessonTitle.Title }}</span>
        <span v-if="lessonCode" class="card-text"><i class="fa fa-check-square"/> {{ propKeyCode }}: {{ lessonCode.Code }}</span>
      </p>
    </div>

  </div>
</template>

<script>
import LessonGrades from './LessonGrades'
import LessonSubjects from './LessonSubjects'
import LessonTitle from './LessonTitle'
import { Lesson } from './lessonDataModules'
import { resources } from './lessonBuild.config'
import { EventBus } from '@/main'

export default {
  data () {
    return {
      headings: null,
      lessonGrade: null,
      lessonSubject: null,
      lessonTitle: null,
      lessonCode: null,
      propKeyGrade: null,
      propKeySubject: null,
      propKeyTitle: null,
      propKeyCode: null,
      elementDisable: null,
      isOverflowPrev: null,
      isOverflowNext: null,
      jsonKey: null,
      jsonVal: null,
      lessonNewComplete: [
        { lessonGradeHasValue: '' },
        { lessonSubjectHasValue: '' },
        { lessonTitleHasValue: '' },
        { lessonCodeHasValue: '' }
      ],
      isLessonNewComplete: false,
      subCompIndex: 1,
      lessonFormLink: resources.lessonFormLink
    }
  },
  created () {
    this.headings = Lesson.Headings
  },
  mounted () {
    this.eventGradeSelected()
    this.eventSubjectSelected()
    this.eventTitleInput()
    this.eventCodeInput()
  },
  watch: {
    lessonNewComplete () {
      this.validateSelections()
    }
  },
  methods: {
    compareIndexToHeadings ( h ) {
      return this.subCompIndex === this.headings[ h ].id
    },
    eventGradeSelected () {
      EventBus.$on( 'gradeSelected', ( e ) => {
        this._lessonGradeStore( e )
          .then( this._lessonGradeVal() )
          .then( this._propKeyGrade( this.lessonGrade ))
      })
    },
    eventSubjectSelected () {
      EventBus.$on( 'subjectSelected', ( e ) => {
        this._lessonSubjectStore( e )
          .then( this._lessonSubjectVal() )
          .then( this._propKeySubject( this.lessonSubject ))
      })
    },
    eventTitleInput () {
      EventBus.$on( 'titleInput', ( e ) => {
        this._lessonTitleStore( e )
          .then( this._lessonTitleVal() )
          .then( this._propKeyTitle( this.lessonTitle ))
      })
    },
    eventCodeInput () {
      EventBus.$on( 'codeInput', ( e ) => {
        this._lessonCodeStore( e )
          .then( this._lessonCodeVal() )
          .then( this._propKeyCode( this.lessonCode ))
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
    validateSelections () {
      let count = 0
      this.lessonNewComplete.forEach( element => {
        if ( element !== true ) {
          count++
        }
      })
      if ( count === 0 ) {
        this.isLessonNewComplete = true
        EventBus.$emit( 'lessonNewCompleted', this.isLessonNewComplete )
      }
    },
    _propKeyGrade ( jObj ) {
      this.propKeyGrade = Object.keys( jObj )[ 0 ]
    },
    _propKeySubject ( jObj ) {
      this.propKeySubject = Object.keys( jObj )[ 0 ]
    },
    _propKeyTitle ( jObj ) {
      this.propKeyTitle = Object.keys( jObj )[ 0 ]
    },
    _propKeyCode ( jObj ) {
      this.propKeyCode = Object.keys( jObj )[ 0 ]
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
    _lessonTitleStore ( e ) {
      return new Promise( resolve => {
        this.$store.dispatch('setLessonTitle', { 'Title': e })
      })
    },
    _lessonCodeStore ( e ) {
      return new Promise( resolve => {
        this.$store.dispatch('setLessonCode', { 'Code': e })
      })
    },
    _lessonGradeVal () {
      this.lessonGrade = this.$store.getters.getLessonGrade
      this.lessonNewComplete[ 0 ] = true
    },
    _lessonSubjectVal () {
      this.lessonSubject = this.$store.getters.getLessonSubject
      this.lessonNewComplete[ 1 ] = true
    },
    _lessonTitleVal () {
      this.lessonTitle = this.$store.getters.getLessonTitle
      this.lessonNewComplete[ 2 ] = true
    },
    _lessonCodeVal () {
      this.lessonCode = this.$store.getters.getLessonCode
      this.lessonNewComplete[ 3 ] = true
    }
  },
  components: {
    LessonGrades,
    LessonSubjects,
    LessonTitle
  }
}
</script>

<style lang="scss" scoped>
.card-sub-body {
  clear: left;
  padding-top: 40px;
}

.card-footer {
  p > span {
    margin-right: 15px
  }
}

.btnDisable {
  background-color: #0160c6;
  cursor: default !important;
}
</style>
