// open-next.config.ts

const config = {
  // Objek konfigurasi yang diminta
  default: {
    override: {
      wrapper: "cloudflare-node", // Nilai yang dibutuhkan untuk Cloudflare
      converter: "edge",          // Nilai yang dibutuhkan untuk Cloudflare
    },
  },
};

// Gunakan export default
export default config;
