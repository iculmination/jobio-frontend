"use client";

import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField";
import clsx from "clsx";

import styles from "./input.module.scss";

export interface InputProps extends Omit<TextFieldProps, "variant"> {
    variant?: "outlined" | "filled" | "standard";
    helperText?: string;
    error?: boolean;
    loading?: boolean;
}

export const Input = ({ className, ...props }: InputProps) => {
    return <TextField className={clsx(styles.input, className)} {...props} />;
};
