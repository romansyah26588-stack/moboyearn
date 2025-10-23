// Pastikan file menggunakan default export
const openNextConfig = {
  default: {
    // Pastikan properti ini ada dan dikonfigurasi
    override: {
      wrapper: "cloudflare-node", // atau 'cloudflare-edge' tergantung kebutuhan
      converter: "edge",
      proxyExternalRequest: "fetch",
      incrementalCache: "dummy", // Placeholder, ganti dengan implementasi cache jika diperlukan
      tagCache: "dummy", // Placeholder
      queue: "dummy", // Placeholder
    },
  },
  // Tambahkan properti lain yang mungkin diperlukan
  edgeExternals: [], 
  middleware: {
    external: false,
  }
};

export default openNextConfig;
