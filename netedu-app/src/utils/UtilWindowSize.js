export default {
  data () {
    return {
      utilWindowSize: {
        height: 0,
        width: 0
      }
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
  },
  mounted () {
    this.handleResize()
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    }
  }
}
