<template>
  <div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Lesson Title:</span>
      </div>
      <input
        class="form-control"
        type="text"
        v-model="title"
        @change="titleAction( title )">
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Coding Standard:</span>
      </div>
      <input
        class="form-control"
        type="text"
        v-model="code"
        @change="codeAction( code )">
    </div>

  </div>
</template>

<script>
import { EventBus } from '@/main'

export default {
  data () {
    return {
      title: null,
      code: null
    }
  },
  mounted () {
    let t = window.sessionStorage.getItem( 'skillsTitle' )
    let c = window.sessionStorage.getItem( 'skillsCode' )

    if ( t != null ) {
      this.title = t
      this.titleAction( t )
    }
    if ( c != null ) {
      this.code = c
      this.codeAction( c )
    }
  },
  methods: {
    titleAction ( t ) {
      window.sessionStorage.setItem( 'lessonTitle', t )
      this.$store.commit( 'setLessonTitle', t )
      EventBus.$emit( 'titleInput', t )
    },
    codeAction ( c ) {
      window.sessionStorage.setItem( 'lessonCode', c )
      EventBus.$emit( 'codeInput', c )
    }
  }
}
</script>
