"use client";

import { Chip } from "@mui/material";
import { ChipProps } from "@mui/material/Chip";
import clsx from "clsx";

import styles from "./badge.module.scss";

export interface BadgeProps extends Omit<ChipProps, "variant" | "color"> {
    variant?: "primary" | "secondary" | "success" | "warning" | "error";
    size?: "small" | "medium";
    outlined?: boolean;
}

export const Badge = ({
    variant = "primary",
    size = "small",
    outlined = false,
    className,
    ...props
}: BadgeProps) => {
    return (
        <Chip
            variant={outlined ? "outlined" : "filled"}
            size={size}
            className={clsx(
                styles.badge,
                styles[variant],
                styles[size],
                { [styles.outlined]: outlined },
                className
            )}
            {...props}
        />
    );
};
