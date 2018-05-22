// TODO: API data injection
import {
  EXTERNAL_DATA_1,
  EXTERNAL_DATA_2
} from '@/virtualData'

export const planetChartData = {
  type: 'line',
  data: {
    labels: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    datasets: [
      { // one line graph
        label: 'Number of Moons',
        data: EXTERNAL_DATA_1,
        backgroundColor: [
          'rgba(54,73,93,.5)', // Blue
          'rgba(54,73,93,.5)',
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
          '#36495d',
          '#36495d',
          '#36495d'
        ],
        borderWidth: 3
      },
      { // another line graph
        label: 'Planet Mass (x1,000 km)',
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