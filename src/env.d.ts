interface ImportMetaEnv {
  readonly KV_UUID: string;
  readonly DENO_KV_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
