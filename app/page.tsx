"use client";

import Button from "@mui/material/Button";

import { useCounterStore } from "@/app/providers/counter-store-provider";
import styles from "@/app/styles.module.scss";

export default function Home() {
    const { count, incrementCount, decrementCount } = useCounterStore((state) => state);

    return (
        <div className={styles.page}>
            Count: {count}
            <hr />
            <Button onClick={incrementCount}>Increment Count</Button>
            <Button onClick={decrementCount}>Decrement Count</Button>
        </div>
    );
}
