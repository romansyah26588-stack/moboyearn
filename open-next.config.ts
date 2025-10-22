// open-next.config.ts

/** @type {import('@opennextjs/cloudflare').OpenNextConfig} */
const config = {};

// Ekspor sebagai CommonJS, dengan 'default' juga diatur
module.exports = {
  ...config,
  default: config, // Menambahkan properti 'default' yang eksplisit
};
