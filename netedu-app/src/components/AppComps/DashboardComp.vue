<template>
  <div id="dashboard-comp">

    <!-- <link :href='chartLink' rel='stylesheet'>
    <chart-pie :data='chartData' :config='pieChartConfig' />-->

  <div class="row">

  <div class="col-sm">
    <div class="card">
      <div class='chart'>
        <link :href='chartLink' rel='stylesheet'>
        <chart-pie :data='chartData' :config='pieChartConfig' />
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ chartTitle }}</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>

  </div>
  </div>
</template>

<script>
// import { data, resources } from './appcomps.config'
import { ChartPie } from 'vue-d2b'
// let aCD = {
//   cData: data.appCompData,
//   cTitle: 'Dashboard'
// }

export default {
  name: 'DashboardComp',
  data () {
    return {
      chartData: [
        { label: 'arc 1', value: 23 },
        { label: 'arc 2', value: 31 },
        { label: 'arc 3', value: 80 },
        { label: 'arc 4', value: 8 }
      ],
      chartTitle: 'Dashboard',
      chartLink: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      pieChartConfig: function (chart) {
        chart.donutRatio(0.0).legend()
      }
    }
  },
  components: {
    // ChartAxis,
    ChartPie
  }
}
</script>

<style lang="scss" scoped>
.card {
  border: 0;

  .chart{
    width: inherit;
    height: 300px;
  }
}
</style>
