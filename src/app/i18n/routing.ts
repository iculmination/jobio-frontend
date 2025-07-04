import { defineRouting } from "next-intl/routing";

export const languages = ["en", "uk"];

export const routing = defineRouting({
    locales: languages,
    defaultLocale: "en",
    localePrefix: "always"
});
