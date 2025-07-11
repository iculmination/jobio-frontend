"use client";

import { Typography as MuiTypography } from "@mui/material";
import { TypographyProps as MuiTypographyProps } from "@mui/material/Typography";
import clsx from "clsx";

import styles from "./typography.module.scss";

export interface TypographyProps extends Omit<MuiTypographyProps, "variant"> {
    variant?:
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "body1"
        | "body2"
        | "subtitle1"
        | "subtitle2"
        | "caption"
        | "overline"
        | "button"
        | "inherit";
    component?: React.ElementType;
    color?:
        | "primary"
        | "secondary"
        | "error"
        | "warning"
        | "info"
        | "success"
        | "textPrimary"
        | "textSecondary"
        | "inherit";
    align?: "left" | "center" | "right" | "justify" | "inherit";
    weight?: "light" | "regular" | "medium" | "bold";
    gutterBottom?: boolean;
    noWrap?: boolean;
}

export const Typography = ({
    variant = "body1",
    color = "textPrimary",
    weight = "regular",
    align,
    children,
    className,
    ...props
}: TypographyProps) => {
    const getAlignClass = () => {
        switch (align) {
            case "left":
                return styles.alignLeft;
            case "center":
                return styles.alignCenter;
            case "right":
                return styles.alignRight;
            case "justify":
                return styles.alignJustify;
            default:
                return undefined;
        }
    };

    const typographyClasses = clsx(
        styles.typography,
        variant && styles[variant],
        weight && styles[weight],
        color && styles[color],
        getAlignClass(),
        {
            [styles.gutterBottom]: props.gutterBottom,
            [styles.noWrap]: props.noWrap
        },
        className
    );

    return (
        <MuiTypography variant={variant} className={typographyClasses} {...props}>
            {children}
        </MuiTypography>
    );
};
