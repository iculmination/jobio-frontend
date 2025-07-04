"use client";

import Button from "@mui/material/Button";
import { useTranslations } from "next-intl";

import { useCounterStore } from "@/app/providers/counter-store-provider";
import styles from "@/app/styles.module.scss";

import { LanguageSwitcher } from "@/widgets/locale";

export default function Home() {
    const { count, incrementCount, decrementCount } = useCounterStore((state) => state);
    const t = useTranslations("test-counter");

    return (
        <div className={styles.page}>
            {t("count")}: {count}
            <Button onClick={incrementCount}>{t("increment-count")}</Button>
            <Button onClick={decrementCount}>{t("decrement-count")}</Button>
            <LanguageSwitcher />
        </div>
    );
}
