"use client";

import { ReactNode } from "react";

import {
    Card as MuiCard,
    CardActions as MuiCardActions,
    CardContent as MuiCardContent,
    CardHeader as MuiCardHeader
} from "@mui/material";
import { CardProps as MuiCardProps } from "@mui/material/Card";
import clsx from "clsx";

import styles from "./card.module.scss";

export interface CardProps extends Omit<MuiCardProps, "variant"> {
    variant?: "elevation" | "outlined";
    children?: ReactNode;
    header?: ReactNode;
    actions?: ReactNode;
}

export const Card = ({
    variant = "elevation",
    children,
    header,
    actions,
    className,
    ...props
}: CardProps) => {
    return (
        <MuiCard
            elevation={variant === "elevation" ? 2 : 0}
            variant={variant}
            className={clsx(styles.card, className)}
            {...props}>
            {header && <MuiCardHeader>{header}</MuiCardHeader>}

            {children && (
                <MuiCardContent className={styles.cardContent}>{children}</MuiCardContent>
            )}

            {actions && (
                <MuiCardActions className={styles.cardActions}>{actions}</MuiCardActions>
            )}
        </MuiCard>
    );
};
