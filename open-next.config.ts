// open-next.config.ts
// Ini adalah file konfigurasi CommonJS yang dinamakan .ts

const config = {
  // Kunci 'default' untuk mengakomodasi error lama (walaupun aneh di CommonJS)
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
    },
  },
};

// CommonJS module export yang paling universal
module.exports = config;
