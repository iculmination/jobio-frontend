"use client";

import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField";
import clsx from "clsx";

import styles from "./input.module.scss";

export interface InputProps extends Omit<TextFieldProps, "variant"> {
    variant?: "outlined" | "filled";
    size?: "small" | "medium";
}

export const Input = ({
    variant = "outlined",
    size = "small",
    className,
    ...props
}: InputProps) => {
    return (
        <TextField
            variant={variant}
            size={size}
            className={clsx(styles.input, styles[variant], styles[size], className)}
            {...props}
        />
    );
};
