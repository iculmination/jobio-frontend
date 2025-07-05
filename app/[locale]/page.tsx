"use client";

import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useTranslations } from "next-intl";

import { useCounterStore } from "@/app/providers/counter-store-provider";
import styles from "@/app/styles.module.scss";

import { LanguageSwitcher } from "@/widgets/locale";
import { ThemeSwitcher } from "@/widgets/theme";

export default function Home() {
    const { count, incrementCount, decrementCount } = useCounterStore((state) => state);
    const t = useTranslations("test-counter");

    return (
        <Box className={styles.page} sx={{ bgcolor: "background.default" }}>
            <Typography variant='h3'>
                {t("count")}: {count}
            </Typography>
            <Button onClick={incrementCount}>{t("increment-count")}</Button>
            <Button onClick={decrementCount}>{t("decrement-count")}</Button>
            <LanguageSwitcher />
            <ThemeSwitcher />
        </Box>
    );
}
