interface ImportMetaEnv extends Readonly<Record<string, string>> {
    readonly FIREBASE_KEY: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
