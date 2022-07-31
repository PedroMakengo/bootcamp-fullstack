import { Plugin } from '@nuxt/types'
import { initializerAxios } from '@/utils/nuxt-instance'

const accessor: Plugin = ({ $axios }) => {
  initializerAxios($axios)
}

export default accessor
