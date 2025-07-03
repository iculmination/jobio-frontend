"use client"

import Button from "@mui/material/Button"
import styles from "@/src/app/styles.module.scss"

import { useCounterStore } from "@/src/app/providers/counter-store-provider"

export default function Home() {
  const { count, incrementCount, decrementCount } = useCounterStore((state) => state)

  return (
    <div className={styles.page}>
      Count: {count}
      <hr />
      <button type="button" onClick={incrementCount}>
        Increment Count
      </button>
      <button type="button" onClick={decrementCount}>
        Decrement Count
      </button>
    </div>
  )
}
