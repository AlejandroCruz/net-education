<template>
  <div id="dashboard-comp">
    <div class="row">

      <div class="col-md">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ charts[0].cTitle }}</h5>
            <canvas :id="charts[0].id"/>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
          </div>
        </div>
      </div>

      <div class="col-md">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ charts[1].cTitle }}</h5>
            <canvas :id="charts[1].id"/>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
          </div>
        </div>
      </div>

    </div>
    <div class="row">

      <!-- <div class="col-md">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ charts[2].cTitle }}</h5>
            <canvas :id="charts[2].id"/>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

      <div class="col-md">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ charts[3].cTitle }}</h5>
            <canvas :id="charts[3].id"/>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div> -->

    </div>

  </div>
</template>

<script>
import Chart from 'chart.js'
import { chartData } from './dashboard.config'

export default {
  name: 'DashboardComp',
  data () {
    return {
      charts: [
        { id: 'c1-chart', cData: chartData.c1Data, cTitle: 'Average Results' },
        { id: 'c2-chart', cData: chartData.c2Data, cTitle: 'Practice Test vs. Exam' }
        // { id: 'c3-chart', cData: chartData.c3Data, cTitle: 'Exams Completed' },
        // { id: 'c4-chart', cData: chartData.c4Data, cTitle: 'Exam Results' }
      ]
    }
  },
  mounted () {
    this.createChart('c1-chart', this.charts[0].cData)
    this.createChart('c2-chart', this.charts[1].cData)
    // this.createChart('c3-chart', this.charts[2].cData)
    // this.createChart('c4-chart', this.charts[3].cData)
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
