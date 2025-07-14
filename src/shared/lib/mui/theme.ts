"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    colorSchemes: {
        dark: {
            palette: {
                primary: {
                    main: "#8B5CF6",
                    light: "#A78BFA",
                    dark: "#7C3AED"
                },
                secondary: {
                    main: "#06B6D4",
                    light: "#22D3EE",
                    dark: "#0891B2"
                },
                background: {
                    default: "#0F172A",
                    paper: "#1E293B"
                }
            }
        },
        light: {
            palette: {
                primary: {
                    main: "#8B5CF6",
                    light: "#A78BFA",
                    dark: "#7C3AED"
                },
                secondary: {
                    main: "#06B6D4",
                    light: "#22D3EE",
                    dark: "#0891B2"
                },
                background: {
                    default: "#F8FAFC",
                    paper: "#FFFFFF"
                }
            }
        }
    },
    cssVariables: {
        colorSchemeSelector: "class"
    },
    typography: {
        fontFamily: "var(--font-roboto)",
        fontSize: 14
    },
    shape: {
        borderRadius: 8
    },
    spacing: 8,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    fontWeight: 500
                },
                sizeSmall: {
                    padding: "6px 12px"
                },
                sizeMedium: {
                    padding: "8px 16px"
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiInputBase-root": {
                        fontSize: "0.875rem"
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow:
                        "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
                }
            }
        }
    }
});
