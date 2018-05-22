<template>
  <div id="dashboard-comp">
    <div class="row">

      <div class="col-md">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Dashboard</h5>
            <canvas id="c1-chart"/>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

      <div class="col-md">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Dashboard</h5>
            <canvas id="c2-chart"/>
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
    this.createChart('c1-chart', this.firstChartData)
    this.createChart('c2-chart', this.firstChartData)
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
#dashboard-comp {
  text-align: center;

  canvas {
    margin: 0 auto;
    max-width: 98%;
  }
}

@media (min-width: 576px) {
  .col-md:first-child {
    margin-bottom: 20px;
  }
}
</style>
