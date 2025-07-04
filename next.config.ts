import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    // eslint-disable-next-line
    webpackDevMiddleware: (config: any) => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300
        };

        return config;
    }
};
const withNextIntl = createNextIntlPlugin("src/app/i18n/request.ts");
export default withNextIntl(nextConfig);
