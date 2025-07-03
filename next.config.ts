import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // eslint-disable-next-line
  webpackDevMiddleware: (config: any) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
}

export default nextConfig
