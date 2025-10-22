// open-next.config.ts

const config = {
  default: {
    // Anda bisa meninggalkan ini kosong atau menambahkan override dasar Cloudflare di sini.
    override: {},
  },
};

// Menggunakan sintaks CommonJS untuk mengekspor objek yang memiliki kunci 'default'
module.exports = config;
