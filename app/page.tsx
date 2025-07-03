"use client";

import { useCounterStore } from "@/app/providers/counter-store-provider";
import styles from "@/app/styles.module.scss";

export default function Home() {
    const { count, incrementCount, decrementCount } = useCounterStore((state) => state);

    return (
        <div className={styles.page}>
            Count: {count}
            <hr />
            <button type='button' onClick={incrementCount}>
                Increment Count
            </button>
            <button type='button' onClick={decrementCount}>
                Decrement Count
            </button>
        </div>
    );
}
