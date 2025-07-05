import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { NextIntlClientProvider } from "next-intl";

import { CounterStoreProvider } from "@/app/providers/counter-store-provider";
import { ReactQueryProvider } from "@/app/providers/with-react-query";

import { theme } from "@/shared/lib";

import "./globals.css";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto"
});

export const metadata: Metadata = {
    title: { default: "Jobio", template: "%s | Jobio" },
    description: "Jobio"
};

interface RootLayoutProps extends LayoutProps {
    params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
    const { locale } = await params;

    return (
        <html lang={locale}>
            <body className={`${roboto.variable}`}>
                <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    <ThemeProvider theme={theme}>
                        <NextIntlClientProvider>
                            <ReactQueryProvider>
                                <CounterStoreProvider>{children}</CounterStoreProvider>
                            </ReactQueryProvider>
                        </NextIntlClientProvider>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
