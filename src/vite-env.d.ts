/// <reference types="vite/client" />
interface ImportMetaEnviroment {
  readonly VITE_SOCKET_URL: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnviroment;
}
