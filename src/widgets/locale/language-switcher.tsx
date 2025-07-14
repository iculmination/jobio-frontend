"use client";

import { ChangeEvent } from "react";

import { usePathname, useRouter } from "next/navigation";

import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";

import { languages } from "@/app/i18n";

import { Select } from "@/shared";

import styles from "./styles.module.scss";

export const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    const t = useTranslations("language");

    const handleLanguageSwitch = (
        event:
            | ChangeEvent<HTMLInputElement>
            | (Event & { target: { value: unknown; name: string } })
    ) => {
        const newLocale = event.target.value as string;

        const segments = pathname?.split("/") || [];
        segments[1] = newLocale;
        const newPath = segments.join("/") || "/";

        router.push(newPath);
        router.refresh();
    };

    return (
        <FormControl className={styles.languageSwitcher}>
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
