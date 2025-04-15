const { siteConfig } = require("./lib/constants");

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  async redirects() {
    return [
      {
        source: siteConfig.links.apply.kickstarterApplyPath,
        destination: siteConfig.links.apply.kickstarter,
        permanent: true,
      },
      {
        source: siteConfig.links.apply.eirApplyPath,
        destination: siteConfig.links.apply.eir,
        permanent: true,
      },
    ];
  },
};

/* --- Comment out v0 config merge logic --- 
if (userConfig) {
  const config = userConfig.default || userConfig; // Keep handling potential default export
  for (const key in config) {
    if (typeof nextConfig[key] === "object" && !Array.isArray(nextConfig[key])) {
      if (key === "redirects" && typeof config[key] === "function") {
        console.warn("Redirects from v0-user-next.config might be ignored or need manual merging.");
      } else {
        nextConfig[key] = {
          ...nextConfig[key],
          ...config[key],
        };
      }
    } else {
      nextConfig[key] = config[key];
    }
  }
}
*/

module.exports = nextConfig; // Use module.exports for CJS
