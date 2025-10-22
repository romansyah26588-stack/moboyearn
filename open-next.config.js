// open-next.config.js

/**
 * @type {import('@opennextjs/cloudflare').OpenNextConfig}
 */
const config = {
  // Gunakan struktur 'default' yang disarankan oleh OpenNext
  default: {
    override: {
      // Menambahkan wrapper dan converter default untuk Cloudflare
      wrapper: "cloudflare-node",
      converter: "edge",
    },
  },
};

// Gunakan CommonJS export yang merupakan standar untuk file .js
module.exports = config;
