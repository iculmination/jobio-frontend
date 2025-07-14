"use client";

import { Button as MuiButton } from "@mui/material";
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import clsx from "clsx";

import styles from "./button.module.scss";

export interface ButtonProps extends Omit<MuiButtonProps, "variant"> {
    variant?: "primary" | "secondary" | "outlined" | "danger";
    loading?: boolean;
}

export const Button = ({
    variant = "primary",
    loading,
    children,
    disabled,
    className,
    ...props
}: ButtonProps) => {
    const getMuiProps = () => {
        switch (variant) {
            case "primary":
                return { variant: "contained" as const, color: "primary" as const };
            case "secondary":
                return { variant: "contained" as const, color: "secondary" as const };
            case "outlined":
                return { variant: "outlined" as const, color: "primary" as const };
            case "danger":
                return { variant: "contained" as const, color: "error" as const };
            default:
                return { variant: "contained" as const, color: "primary" as const };
        }
    };

    const muiProps = getMuiProps();

    return (
        <MuiButton
            {...muiProps}
            disabled={disabled || loading}
            className={clsx(styles.button, styles[variant], className)}
            {...props}>
            {loading ? "Loading..." : children}
        </MuiButton>
    );
};
