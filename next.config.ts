import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    // eslint-disable-next-line
    webpackDevMiddleware: (config: any) => {
        config.watchOptions = {
            poll: 5000,
            aggregateTimeout: 1000,
            ignored: /node_modules/
        };

        return config;
    },

    experimental: {
        turbo: {}
    }
};

const withNextIntl = createNextIntlPlugin("src/app/i18n/request.ts");
export default withNextIntl(nextConfig);
