// open-next.config.ts

// Hapus type annotation untuk menghindari konflik
// /** @type {import('@opennextjs/cloudflare').OpenNextConfig} */

const config = {
  // Pastikan kunci 'default' ada di level teratas
  default: {
    // Tambahkan konfigurasi minimal untuk Cloudflare agar tidak kosong
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      proxyExternalRequest: "fetch",
    },
  },
};

// Gunakan CommonJS module.exports untuk mengekspor objek config.
// Ini adalah format yang paling mungkin diharapkan oleh sistem build OpenNext yang lama.
module.exports = config;
