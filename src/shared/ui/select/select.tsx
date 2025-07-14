"use client";

import { Select as MuiSelect } from "@mui/material";
import { SelectProps as MuiSelectProps } from "@mui/material/Select";
import clsx from "clsx";

import styles from "./select.module.scss";

export interface SelectProps extends Omit<MuiSelectProps, "variant"> {
    variant?: "outlined" | "filled";
    size?: "small" | "medium";
}

export const Select = ({
    variant = "outlined",
    size = "small",
    children,
    className,
    ...props
}: SelectProps) => {
    return (
        <MuiSelect
            variant={variant}
            size={size}
            className={clsx(styles.select, styles[variant], styles[size], className)}
            {...props}>
            {children}
        </MuiSelect>
    );
};
