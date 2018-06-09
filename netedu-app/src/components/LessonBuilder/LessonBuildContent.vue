<template>
  <div id="lesson-build-content">
    <lesson-new/>
    <lesson-form v-if="showLessonForm"/>
  </div>
</template>

<script>
import LessonNew from './LessonNew'
import LessonForm from './LessonForm'
import { EventBus } from '@/main'

export default {
  data () {
    return {
      showLessonForm: false
    }
  },
  components: {
    LessonForm,
    LessonNew
  },
  methods: {
    showForm () {
      EventBus.$on( 'lessonNewCompleted', ( e ) => {
        this.showLessonForm = e
      })
    }
  }
}
</script>
