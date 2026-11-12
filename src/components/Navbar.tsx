import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import CallbackIconButton from "@/components/CallbackIconButton";
import { useTheme } from "@/context/ThemeContext";
import IconLogo from "@/../public/logo/logo.svg";
import IconHamburger from "@/../public/icons/hamburger.svg";
import IconClose from "@/../public/icons/close.svg";
import IconLightMode from "@/../public/icons/light-mode.svg";
import IconDarkMode from "@/../public/icons/dark-mode.svg";

interface NavbarProps {
    homeOnly?: boolean;
}

const Navbar = ({ homeOnly = false }: NavbarProps) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const links = homeOnly
        ? [{ label: "Home", href: "/", sectionId: "home" }]
        : [
            { label: "Home", href: "#home", sectionId: "home" },
            { label: "Stack", href: "#stack", sectionId: "stack" },
            { label: "Experience", href: "#experience", sectionId: "experience" },
            { label: "Projects", href: "#projects", sectionId: "projects" },
        ];

    const renderLink = (
        { label, href, sectionId }: typeof links[number],
        mobile = false,
    ) => {
        const className = cn(
            mobile
                ? "flex h-[50px] w-full shrink-0 items-center justify-center rounded-[10px] text-(--text-1)"
                : cn(
                    "shrink-0 transition-colors hover:text-(--text-green)",
                    theme === "dark" ? "text-(--text-1)" : "text-(--text-2)"
                ),
            mobile && [
                "shadow-[-4px_-4px_16px_4px_var(--shadow-light),_4px_4px_16px_4px_var(--shadow-dark)]",
                "active:shadow-none active:inset-shadow-[4px_4px_16px_8px_var(--shadow-dark),_-4px_-4px_16px_8px_var(--background-1)]",
            ]
        );

        return homeOnly ? (
            <Link key={sectionId} href={href} className={className} onClick={() => setMenuOpen(false)}>
                {label}
            </Link>
        ) : (
            <a key={sectionId} href={href} className={className} onClick={() => setMenuOpen(false)}>
                {label}
            </a>
        );
    };

    return (
        <>
            <nav
                aria-label="Main navigation"
                className={cn(
                    "sticky top-0 z-50 flex h-[60px] justify-center",
                    "bg-(--primary) shadow-[0_4px_16px_0_var(--shadow-dark)]"
                )}
            >
                <div className="flex h-full w-full max-w-[1024px] items-center justify-between px-[15px] sm:px-[10px]">
                    <div className="flex h-full items-center gap-[20px]">
                        <Link
                            href={homeOnly ? "/" : "#home"}
                            aria-label="Go to home section"
                            className="flex shrink-0 items-center"
                            onClick={() => setMenuOpen(false)}
                        >
                            {/* Use the SVG as a mask so its fill follows the site's text color token. */}
                            <span
                                aria-hidden="true"
                                className={cn(
                                    "block h-[24px] w-[39px] translate-y-0 transition-colors duration-200 ease-out hover:bg-(--secondary) active:bg-(--secondary) sm:h-[20px] sm:w-[32px] sm:-translate-y-[2px]",
                                    theme === "dark" ? "bg-(--text-1)" : "bg-(--text-2)"
                                )}
                                style={{
                                    maskImage: `url(${IconLogo.src})`,
                                    maskSize: "contain",
                                    maskPosition: "center",
                                    maskRepeat: "no-repeat",
                                    WebkitMaskImage: `url(${IconLogo.src})`,
                                    WebkitMaskSize: "contain",
                                    WebkitMaskPosition: "center",
                                    WebkitMaskRepeat: "no-repeat",
                                }}
                            />
                        </Link>

                        <div className="hidden items-center justify-start gap-[20px] sm:flex">
                            {links
                                .filter((link) => link.label !== "Home")
                                .map((link) => renderLink(link))}
                        </div>
                    </div>

                    <div className="ml-auto flex h-full items-center gap-[10px]">
                        <CallbackIconButton
                            maskSrc={theme === "dark" ? IconDarkMode : IconLightMode}
                            label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                            onClick={toggleTheme}
                        />

                        <div className="flex h-full items-center sm:hidden">
                        <CallbackIconButton
                            maskSrc={menuOpen ? IconClose : IconHamburger}
                            label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                            ariaPressed={menuOpen}
                            onClick={() => setMenuOpen((open) => !open)}
                        />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Full-screen backdrop and drop-down menu for narrow screens. */}
            <div
                className={cn(
                    "fixed inset-0 z-40 sm:hidden",
                    menuOpen ? "pointer-events-auto" : "pointer-events-none"
                )}
                aria-hidden={!menuOpen}
                inert={!menuOpen}
            >
                <button
                    type="button"
                    aria-label="Close navigation menu"
                    tabIndex={-1}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                        "absolute inset-0 h-full w-full bg-(--primary)/40 backdrop-blur-[6px]",
                        "transition-opacity duration-300 ease-out motion-reduce:transition-none",
                        menuOpen ? "opacity-100" : "opacity-0"
                    )}
                />

                <nav
                    aria-label="Mobile navigation"
                    className={cn(
                        "absolute left-0 top-[60px] w-full",
                        "transition-[opacity,translate] duration-300 ease-out motion-reduce:transition-none",
                        menuOpen ? "translate-y-0 opacity-100" : "-translate-y-[10px] opacity-0"
                    )}
                >
                    {/* The navbar masks the upper shell shadow; the viewport clips its side shadows. */}
                    <div className="w-full rounded-b-[30px] bg-(--background-1) p-[25px] shadow-[-4px_-4px_16px_8px_var(--shadow-light),_4px_4px_16px_8px_var(--shadow-dark)] inset-shadow-[4px_4px_16px_8px_var(--shadow-dark)]">
                        <div className="flex w-full flex-col gap-[20px] rounded-[20px] bg-(--background-1) p-[25px] inset-shadow-[-4px_-4px_16px_8px_var(--background-2),_4px_4px_16px_8px_var(--shadow-dark)]">
                            {links.map((link) => renderLink(link, true))}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
