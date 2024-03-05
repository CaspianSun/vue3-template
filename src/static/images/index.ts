import { images } from "./images"
import { ImageType } from "./const"

const OSS_URL = import.meta.env.VITE_OSS_URL
const OSS_URL_END_WITHOUT_SLASH = OSS_URL.endsWith("/") ? OSS_URL.slice(0, -1) : OSS_URL

let isUpdateImageUrls = false
function updateImageUrls(obj: Record<string, any>, parentKeys: string[] = []) {
  if (isUpdateImageUrls && !parentKeys) return
  isUpdateImageUrls = true
  for (const key in obj) {
    const keyArr = key.split(/(?=[A-Z])/)
    const keyStr = keyArr.join("-").toLowerCase()
    const currentKeys = [...parentKeys]
    const url = `${OSS_URL_END_WITHOUT_SLASH}/${currentKeys.join("/")}`
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      updateImageUrls(obj[key], [...parentKeys, keyStr])
    } else if (
      obj[key] === ImageType.PNG ||
      obj[key] === ImageType.JPG ||
      obj[key] === ImageType.JPEG ||
      obj[key] === ImageType.GIF ||
      obj[key] === ImageType.SVG
    ) {
      obj[key] = `${url}/${keyStr}${obj[key]}`
    } else if (typeof obj[key] === "string") {
      if (obj[key].startsWith("/")) {
        obj[key] = `${url}${obj[key]}`
      } else {
        obj[key] = `${url}/${obj[key]}`
      }
    }
  }
}
updateImageUrls(images)
export { images }

const imagePreloader = (url: string) => {
  return new Promise<boolean>((resolve, reject) => {
    let image = new Image()
    image.src = url
    image.onload = () => resolve(true)
    image.onerror = () => reject(false)
  })
}

export const imagesPreloader = async (imgs: Record<string, string>) => {
  let promiseArr: ReturnType<typeof imagePreloader>[] = []
  Object.keys(imgs).forEach((key) => {
    promiseArr.push(imagePreloader(imgs[key]))
  })
  try {
    const res = await Promise.allSettled(promiseArr)
    return res.every((item) => item.status === "fulfilled")
  } catch (err) {
    console.log(err)
    return false
  }
}
