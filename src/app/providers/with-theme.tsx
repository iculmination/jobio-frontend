import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";

import { theme } from "@/shared/lib";

export const ThemeProvider = ({ children }: LayoutProps) => {
    return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};
