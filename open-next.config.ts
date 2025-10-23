// open-next.config.ts
export default {
  default: {
    override: {
      // Menggunakan wrapper "cloudflare-node" untuk kompatibilitas terbaik
      // dengan library yang membutuhkan Node.js (seperti Prisma, NextAuth).
      wrapper: "cloudflare-node",
      converter: "edge",
      proxyExternalRequest: "fetch",
      // Menggunakan "dummy" adalah cara termudah untuk cache di Cloudflare Pages.
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy",
    },
  },
  // Middleware NextAuth.js membutuhkan 'node:crypto'
  edgeExternals: ["node:crypto"],
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
