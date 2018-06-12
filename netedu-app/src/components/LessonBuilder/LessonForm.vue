<template>
  <div id="lesson-form">
    <h3>Lesson:</h3>
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

<style lang="scss" scoped>
@import "../../main";

#lesson-form {
  text-align: left;

  input {
    color: #fff;
    background-color: $netedu-blue;
  }
}
</style>
