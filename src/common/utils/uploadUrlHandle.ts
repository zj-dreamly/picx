import { UserConfigInfoModel } from '../model/userConfigInfo.model'
import TimeHelper from '@/common/utils/timeHelper'

const uploadUrlHandle = (config: UserConfigInfoModel, filename: string): string => {
  const date = TimeHelper.getYyyyMmDd()
  let path = `${date}/`
  if (config.selectedDir !== '/') {
    // path = config.selectedDir + '/'
    path = `${date}/`
  }
  return `/repos/${config.owner}/${config.selectedRepos}/contents/${path}${filename}`
}
export default uploadUrlHandle
