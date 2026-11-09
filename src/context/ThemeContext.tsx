import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
const themeStorageKey = "portfolio-theme";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const systemPreference = window.matchMedia("(prefers-color-scheme: dark)");
        const storedTheme = window.localStorage.getItem(themeStorageKey);
        const initialTheme: Theme = storedTheme === "light" || storedTheme === "dark"
            ? storedTheme
            : systemPreference.matches ? "dark" : "light";

        setTheme(initialTheme);

        // Follow system preference until the visitor chooses a theme.
        const followSystemPreference = (event: MediaQueryListEvent) => {
            const savedTheme = window.localStorage.getItem(themeStorageKey);
            if (savedTheme !== "light" && savedTheme !== "dark") {
                setTheme(event.matches ? "dark" : "light");
            }
        };

        systemPreference.addEventListener("change", followSystemPreference);
        return () => systemPreference.removeEventListener("change", followSystemPreference);
    }, []);

    const toggleTheme = () => {
        const nextTheme: Theme = theme === "dark" ? "light" : "dark";
        window.localStorage.setItem(themeStorageKey, nextTheme);
        setTheme(nextTheme);
    };

    const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            <div className={`theme-shell ${theme}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used inside ThemeProvider");
    return context;
};
