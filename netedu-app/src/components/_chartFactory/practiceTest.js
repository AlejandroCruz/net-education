import {
  EXTERNAL_DATA_3,
  EXTERNAL_DATA_4
} from '@/VirtualData/virtualData'

export const planetChartData = {
  type: 'bar',
  data: {
    labels: ['January', 'March', 'May', 'July', 'September', 'November'],
    datasets: [
      { // one line graph
        label: 'Practice',
        data: EXTERNAL_DATA_3,
        backgroundColor: [
          '#3985a880', // Blue
          '#3985a880',
          '#3985a880',
          '#3985a880',
          '#3985a880',
          '#3985a880'
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
        label: 'Exam',
        data: EXTERNAL_DATA_4,
        backgroundColor: [
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)'
        ],
        borderColor: [
          '#39996c',
          '#39996c',
          '#39996c',
          '#39996c',
          '#39996c',
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
