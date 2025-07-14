"use client";

import { ReactNode } from "react";

import { Card as MuiCard } from "@mui/material";
import clsx from "clsx";

import styles from "./card.module.scss";

export interface CardProps {
    children?: ReactNode;
    variant?: "default" | "outlined";
    padding?: "none" | "small" | "medium" | "large";
    className?: string;
    onClick?: () => void;
}

export const Card = ({
    children,
    variant = "default",
    padding = "medium",
    className,
    onClick,
    ...props
}: CardProps) => {
    return (
        <MuiCard
            elevation={variant === "outlined" ? 0 : 1}
            variant={variant === "outlined" ? "outlined" : "elevation"}
            className={clsx(
                styles.card,
                styles[variant],
                styles[`padding-${padding}`],
                { [styles.clickable]: onClick },
                className
            )}
            onClick={onClick}
            {...props}>
            {children}
        </MuiCard>
    );
};
