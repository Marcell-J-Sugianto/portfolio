import { cn } from "@/lib/utils";
import CallbackIconButton from "@/components/CallbackIconButton";
import { useTheme } from "@/context/ThemeContext";

import IconLightMode from "@/../public/light-mode.svg";
import IconDarkMode from "@/../public/dark-mode.svg";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav
        aria-label="Main navigation"
        className={cn(
            "sticky top-0 z-50 flex justify-center",
            "h-[60px] bg-(--primary)"
        )}>
            <div
            className={cn(
                "flex h-full w-full max-w-[1024px] items-center justify-between",
                "px-[10px]"
            )}>
                <div className="flex items-center justify-start gap-[20px]">
                    {[
                        ["Home", "home"],
                        ["Stack", "stack"],
                        ["Experience", "experience"],
                        ["Projects", "projects"],
                    ].map(([label, sectionId]) => (
                        <a
                            key={sectionId}
                            href={`#${sectionId}`}
                            className="shrink-0 text-(--text-2) transition-colors hover:text-(--text-green)"
                        >
                            {label}
                        </a>
                    ))}
                </div>
                
                

                
                <CallbackIconButton
                    maskSrc={theme === "dark" ? IconLightMode : IconDarkMode}
                    label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                    ariaPressed={theme === "dark"}
                    onClick={toggleTheme}
                />
                
            </div>
        </nav>
    );
};

export default Navbar;
