// open-next.config.ts

/** @type {import('@opennextjs/cloudflare').OpenNextConfig} */
const config = {
  // Masukkan objek 'default' yang berisi konfigurasi utama Next.js Anda
  default: {
    // Override minimal yang dibutuhkan untuk menghindari error 'cannot be empty'
    override: {}, 
  },
};

export default config;
