import getUuid from "./getUuid";

export const filenameHandle = (filename: any) => {
  const splitIndex = filename.lastIndexOf('.')
  const name = filename.substr(0, splitIndex)
  const suffix = filename.substr(splitIndex + 1, filename.length)

  return {
    name: name,
    hash: getUuid(),
    suffix: suffix,
  }
}

export const hashFilenameHandle = (hashFilename: any) => {
  const splitIndex = hashFilename.indexOf('.')
  return hashFilename.substr(0, splitIndex)
}

export const isImage = (suffix: string) => {
  return /(png|jpg|gif|jpeg|webp|svg\+xml)$/.test(suffix)
}


export const getFileSize = (size: any) => {
  return (size / 1024).toFixed(2) + ' KB'
}