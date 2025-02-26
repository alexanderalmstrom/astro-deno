interface ImportMetaEnv {
  readonly KV_UUID: string;
  readonly KV_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
