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
        label: 'Student Avg.',
        data: EXTERNAL_DATA_1,
        backgroundColor: [
          '#3985a880' // Blue
        ],
        borderColor: [
          '#36495d'
        ],
        borderWidth: 3
      },
      { // another line graph
        label: 'State Avg.',
        data: EXTERNAL_DATA_2,
        backgroundColor: [
          'rgba(71, 183,132,.5)' // Green
        ],
        borderColor: [
          '#39996c'
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
