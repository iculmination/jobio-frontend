import { NextIntlClientProvider, hasLocale } from "next-intl";

import { routing } from "@/app/i18n/routing";

interface TranslationsProviderProps extends LayoutProps {
    locale: string;
}

export default async function TranslationsProvider({
    children,
    locale
}: TranslationsProviderProps) {
    if (!hasLocale(routing.locales, locale)) {
        // todo: cannot use in root layout
        // notFound();
    }

    return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
}
