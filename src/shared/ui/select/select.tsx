"use client";

import { Select as MuiSelect } from "@mui/material";
import { SelectProps as MuiSelectProps } from "@mui/material/Select";
import clsx from "clsx";

import styles from "./select.module.scss";

export interface SelectProps extends Omit<MuiSelectProps, "variant"> {
    variant?: "outlined" | "filled" | "standard";
    component?: React.ElementType;
    color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
}

export const Select = ({
    variant = "outlined",
    color = "primary",
    children,
    className,

    ...props
}: SelectProps) => {
    const selectClasses = clsx(
        styles.select,
        variant && styles[variant],
        color && styles[color],
        className
    );

    return (
        <MuiSelect variant={variant} className={selectClasses} {...props}>
            {children}
        </MuiSelect>
    );
};
