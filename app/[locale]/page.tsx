"use client";

import { useTranslations } from "next-intl";

import { useCounterStore } from "@/app/providers/counter-store-provider";
import styles from "@/app/styles.module.scss";

import { LanguageSwitcher } from "@/widgets/locale";
import { ThemeSwitcher } from "@/widgets/theme";

import { Badge, Button, Card, Input } from "@/shared";

export default function Home() {
    const { count, incrementCount, decrementCount } = useCounterStore((state) => state);
    const t = useTranslations("test-counter");

    return (
        <Card className={styles.page}>
            {t("count")}: {count}
            <Button variant='primary' onClick={incrementCount}>
                {t("increment-count")}
            </Button>
            <Button variant='secondary' onClick={decrementCount}>
                {t("decrement-count")}
            </Button>
            <Input label='Name' variant='outlined' />
            <Input label='Name' variant='filled' />
            <Input label='Name' variant='standard' />
            <Card variant='outlined'>
                <ThemeSwitcher />
            </Card>
            <Card variant='outlined'>
                <LanguageSwitcher />
            </Card>
            <Badge variant='primary' size='small' rounded>
                Primary
            </Badge>
        </Card>
    );
}
