import primelogo from '@/assets/logo-prime.png'
import appCompData from './dataModel'

export function data () {
  return {
    appCompData: appCompData
  }
}

export function resources () {
  return {
    primaryLogo: primelogo,
    chartDependencyLink: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
  }
}
