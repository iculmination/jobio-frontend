"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: "#8B5CF6",
                    light: "#A78BFA",
                    dark: "#7C3AED",
                    contrastText: "#FFFFFF"
                },
                secondary: {
                    main: "#6B7280",
                    light: "#9CA3AF",
                    dark: "#4B5563",
                    contrastText: "#FFFFFF"
                },
                error: {
                    main: "#DC2626",
                    light: "#EF4444",
                    dark: "#B91C1C",
                    contrastText: "#FFFFFF"
                },
                warning: {
                    main: "#F59E0B",
                    light: "#FBBF24",
                    dark: "#D97706"
                },
                info: {
                    main: "#3B82F6",
                    light: "#60A5FA",
                    dark: "#2563EB"
                },
                success: {
                    main: "#10B981",
                    light: "#34D399",
                    dark: "#059669"
                },
                background: {
                    default: "#F9FAFB",
                    paper: "#FFFFFF"
                },
                text: {
                    primary: "#111827",
                    secondary: "#6B7280"
                },
                divider: "#E5E7EB"
            }
        },
        dark: {
            palette: {
                primary: {
                    main: "#A78BFA",
                    light: "#C4B5FD",
                    dark: "#8B5CF6",
                    contrastText: "#1F2937"
                },
                secondary: {
                    main: "#9CA3AF",
                    light: "#D1D5DB",
                    dark: "#6B7280",
                    contrastText: "#1F2937"
                },
                error: {
                    main: "#F87171",
                    light: "#FCA5A5",
                    dark: "#DC2626",
                    contrastText: "#1F2937"
                },
                background: {
                    default: "#111827",
                    paper: "#1F2937"
                },
                text: {
                    primary: "#F9FAFB",
                    secondary: "#D1D5DB"
                },
                divider: "#374151"
            }
        }
    },
    cssVariables: {
        colorSchemeSelector: "class"
    },
    typography: {
        fontFamily: "var(--font-roboto)",
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700
    },
    shape: {
        borderRadius: 8
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: "none",
                    fontWeight: 500,
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "none"
                    }
                }
            }
        }
    }
});
