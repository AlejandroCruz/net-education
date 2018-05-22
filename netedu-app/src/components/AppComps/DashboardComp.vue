<template>
  <div id="dashboard-comp">
    <div class="row">

      <div class="col-sm">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Dashboard</h5>
            <div class='chart'>
              <canvas id="first-chart" />
            </div>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
import { data } from './appcomps.config'
// import firstChartData from '../_chartsStore/firstChart'

export default {
  name: 'DashboardComp',
  data () {
    return {
      firstChartData: data.c1Data,
      firstChart: null
    }
  },
  components: {
  },
  mounted () {
    this.createChart('first-chart', this.firstChartData)
  },
  methods: {
    createChart (cId, cData) {
      const cElement = document.getElementById(cId)
      // eslint-disable-next-line
      const myChart = new Chart(cElement, {
        type: cData.type,
        data: cData.data,
        options: cData.options
      })
    }
  }
}
</script>

<style lang="scss" scoped>
// .card {
//   border: 0;

//   .chart{
//     width: inherit;
//     height: 300px;
//   }
// }
</style>
