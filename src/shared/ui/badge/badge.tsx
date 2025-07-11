"use client";

import { ReactNode } from "react";

import { Badge as MuiBadge } from "@mui/material";
import { BadgeProps as MuiBadgeProps } from "@mui/material/Badge";
import clsx from "clsx";

import styles from "./badge.module.scss";

export interface BadgeProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
    size?: "small" | "medium" | "large";
    rounded?: boolean;
    outlined?: boolean;
    className?: string;
    props?: MuiBadgeProps;
}

export const Badge = ({
    children,
    variant = "primary",
    size = "medium",
    rounded = false,
    outlined = false,
    className,
    ...props
}: BadgeProps) => {
    const badgeClasses = clsx(
        styles.badge,
        styles[variant],
        styles[size],
        {
            [styles.rounded]: rounded,
            [styles.outlined]: outlined
        },
        className
    );

    return (
        <MuiBadge className={badgeClasses} {...props}>
            {children}
        </MuiBadge>
    );
};
