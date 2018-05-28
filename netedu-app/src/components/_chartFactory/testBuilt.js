import {
  EXTERNAL_DATA_1,
  EXTERNAL_DATA_2
} from '@/VirtualData/virtualData'

export const planetChartData = {
  type: 'line',
  data: {
    labels: ['January', 'March', 'May', 'July', 'September', 'November'],
    datasets: [
      { // one line graph
        label: 'Enrolled',
        data: EXTERNAL_DATA_1,
        backgroundColor: [
          'rgba(54,73,93,.5)', // Blue
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)'
        ],
        borderColor: [
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d'
        ],
        borderWidth: 3
      },
      { // another line graph
        label: 'Pending',
        data: EXTERNAL_DATA_2,
        backgroundColor: [
          'rgba(71, 183,132,.5)' // Green
        ],
        borderColor: [
          '#47b784'
        ],
        borderWidth: 3
      }
    ]
  },
  options: {
    lineTension: 1,
    maintainAspectRatio: true,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          padding: 25
        }
      }]
    }
  }
}

export default planetChartData
