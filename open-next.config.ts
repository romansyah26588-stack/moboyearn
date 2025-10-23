// open-next.config.ts

export default {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      proxyExternalRequest: "fetch",
      incrementalCache: "dummy", // atau fungsi kustom
      tagCache: "dummy",         // atau fungsi kustom
      queue: "dummy",            // atau "direct" atau fungsi kustom
    },
  },
  edgeExternals: ["node:crypto"],
  middleware: {
    external: true,
    override: {
      wrapper: "cloudflare-edge",
      converter: "edge",
      proxyExternalRequest: "fetch",
      incrementalCache: "dummy", // atau fungsi kustom
      tagCache: "dummy",         // atau fungsi kustom
      queue: "dummy",            // atau "direct" atau fungsi kustom
    },
  },
};
