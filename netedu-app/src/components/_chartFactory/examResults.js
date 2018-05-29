import {
  EXTERNAL_DATA_3
} from '@/VirtualData/virtualData'

export const planetChartData = {
  type: 'bubble',
  data: {
    labels: ['January', 'March', 'May', 'July', 'September', 'November'],
    datasets: [
      { // one line graph
        label: 'Student Avg.',
        data: EXTERNAL_DATA_3,
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
      }
    ]
  }
}

export default planetChartData
