"use client";

import { Button as MuiButton } from "@mui/material";
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import clsx from "clsx";
import { useTranslations } from "next-intl";

import styles from "./button.module.scss";

export interface ButtonProps extends Omit<MuiButtonProps, "variant"> {
    variant?: "primary" | "secondary" | "outlined" | "text" | "danger";
    size?: "small" | "medium" | "large";
    fullWidth?: boolean;
    loading?: boolean;
}

export const Button = ({
    variant = "primary",
    size = "medium",
    loading,
    children,
    disabled,
    className,
    ...props
}: ButtonProps) => {
    const t = useTranslations("ui.button");

    const getMuiVariant = (): MuiButtonProps["variant"] => {
        switch (variant) {
            case "primary":
            case "danger":
                return "contained";
            case "secondary":
                return "contained";
            case "outlined":
                return "outlined";
            case "text":
                return "text";
            default:
                return "contained";
        }
    };

    const getColor = (): MuiButtonProps["color"] => {
        switch (variant) {
            case "danger":
                return "error";
            case "secondary":
                return "secondary";
            default:
                return "primary";
        }
    };

    return (
        <MuiButton
            variant={getMuiVariant()}
            color={getColor()}
            size={size as MuiButtonProps["size"]}
            disabled={disabled || loading}
            className={clsx(styles.button, className)}
            {...props}>
            {loading ? t("loading") : children}
        </MuiButton>
    );
};
