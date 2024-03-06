/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_WS_URL: string
  readonly VITE_SOCKET_MAX_RECONNECT_ATTEMPTS: number
  readonly VITE_OSS_URL: string
  readonly VITE_ACT_ID: number
  readonly VITE_ACT_CODE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
