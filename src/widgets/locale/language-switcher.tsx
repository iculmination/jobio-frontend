"use client";

import { usePathname, useRouter } from "next/navigation";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useLocale, useTranslations } from "next-intl";

import { languages } from "@/app/i18n";

export const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    const t = useTranslations("language");

    const handleLanguageSwitch = (event: SelectChangeEvent) => {
        const newLocale = event.target.value;

        const segments = pathname?.split("/") || [];
        segments[1] = newLocale;
        const newPath = segments.join("/") || "/";

        router.push(newPath);
        router.refresh();
    };

    return (
        <FormControl fullWidth>
            <InputLabel id='language-select-label'>{t("select-language")}</InputLabel>
            <Select
                labelId='language-select-label'
                id='language-select'
                value={locale}
                onChange={handleLanguageSwitch}>
                {languages.map((language) => (
                    <MenuItem key={language} value={language}>
                        {language}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
