<template>
  <div id="lesson-form">
    <label>Lesson:</label>
    <input
      v-model='lessonTitle'
      type="text"
      class="form-control"
      placeholder="Edit Title">
    <hr>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lessonTitle: null
    }
  },
  mounted () {
    this.lessonTitle = window.sessionStorage.getItem('lessonTitle')
  }
}
</script>
