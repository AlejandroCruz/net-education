<template>
  <div id="dashboard-comp">
    <div class="row">

      <div class="col-md">
        <div class="card">
          <div class="card-body" v-for="item in charts" :key="item.id">
            <h5 class="card-title">{{ item.Title }}</h5>
            <canvas id="c1-chart"/>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <!-- <div class="col-md">
        <div class="card">
          <div class="card-body" v-for="item in charts" :key="item.id">
            <h5 class="card-title">{{ item.Title }}</h5>
            <canvas id="c{item.id}-chart"/>
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
        { id: 1, cData: chartData.c1Data, cTitle: 'Test pending' },
        { id: 2, cData: chartData.c2Data, cTitle: 'Practice Test' }
      ]
    }
  },
  components: {
  },
  mounted () {
    this.createChart('c1-chart', this.charts[0].cData)
    this.createChart('c2-chart', this.charts[1].cData)
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
