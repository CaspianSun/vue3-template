/// <reference types="vite/client" />
declare module "md5"
interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_WS_URL: string
  readonly VITE_SOCKET_MAX_RECONNECT_ATTEMPTS: number
  readonly VITE_OSS_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
