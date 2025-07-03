import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "@/src/shared/lib"

import { CounterStoreProvider } from "@/src/app/providers/counter-store-provider"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: { default: "Jobio", template: "%s | Jobio" },
  description: "Jobio",
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${roboto.variable}`}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CounterStoreProvider>{children}</CounterStoreProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
