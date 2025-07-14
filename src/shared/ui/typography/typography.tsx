"use client";

import { Typography as MuiTypography } from "@mui/material";
import { TypographyProps as MuiTypographyProps } from "@mui/material/Typography";
import clsx from "clsx";

import styles from "./typography.module.scss";

export interface TypographyProps extends Omit<MuiTypographyProps, "variant"> {
    variant?: "h1" | "h2" | "h3" | "h4" | "body1" | "body2" | "caption";
    color?: "primary" | "secondary" | "error" | "text" | "inherit";
    weight?: "normal" | "medium" | "bold";
    align?: "left" | "center" | "right";
}

export const Typography = ({
    variant = "body1",
    color = "text",
    weight = "normal",
    align,
    children,
    className,
    ...props
}: TypographyProps) => {
    return (
        <MuiTypography
            variant={variant}
            className={clsx(
                styles.typography,
                styles[variant],
                styles[`color-${color}`],
                styles[`weight-${weight}`],
                align && styles[`align-${align}`],
                className
            )}
            {...props}>
            {children}
        </MuiTypography>
    );
};
