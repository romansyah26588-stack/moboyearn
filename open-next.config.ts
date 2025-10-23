// open-next.config.ts

import { CloudflareOpenNextConfig } from "@opennextjs/cloudflare/dist/cli/types";

const config: CloudflareOpenNextConfig = {
  // This is the default export structure the error is looking for
  default: {
    // You can remove the 'override' section if you want to use the defaults
    override: {
      wrapper: "cloudflare-node", // or "edge" if you are using Cloudflare Edge features
      converter: "edge",
      proxyExternalRequest: "fetch",
      // Choose an incrementalCache/tagCache solution, or use "dummy"
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy",
    },
  },
  // Add other properties if needed
  // edgeExternals: ["node:crypto"], // Example of an optional property
  // middleware: { ... }            // Example of an optional property
};

export default config;
