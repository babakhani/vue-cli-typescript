import Config from '@/config'
export const BaseUrl = Config.apiServerUrl
export default {
  SampleGet: { method: 'GET', url: BaseUrl + 'info' },
  SamplePost: { method: 'POST', url: BaseUrl + 'SamplepApi/add' },
  SampleDelete: { method: 'DELETE', url: BaseUrl + 'SamplepApi' }
}
