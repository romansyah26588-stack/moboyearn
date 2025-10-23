// open-next.config.ts

const config = {
  // Properti 'default' harus ada
  default: {
    // Properti 'override' harus ada
    override: {
      // Tentukan wrapper dan converter yang Anda butuhkan
      wrapper: "cloudflare-node", // atau "cloudflare-edge"
      converter: "edge",
      proxyExternalRequest: "fetch",
      // Pastikan semua properti yang wajib diisi (meskipun hanya 'dummy') ada
      incrementalCache: "dummy", 
      tagCache: "dummy",
      queue: "dummy", 
    },
  },
  // Properti lain (opsional, tapi seringkali membantu)
  edgeExternals: [], 
  middleware: {
    external: true,
    override: {
        wrapper: "cloudflare-edge",
        converter: "edge",
        proxyExternalRequest: "fetch",
        incrementalCache: "dummy",
        tagCache: "dummy",
        queue: "dummy",
    },
  },
};

// WAJIB: Gunakan default export
export default config;
