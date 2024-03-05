import { ImageType } from "./const"
import { demo } from "./modules/demo"
export type Images = {
  [key: string]: string | Images | ImageType
}

export const images = {
  demo,
}
