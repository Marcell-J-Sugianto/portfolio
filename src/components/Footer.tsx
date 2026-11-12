import { cn } from "@/lib/utils";
import IconButton from "@/components/IconButton";
import { useTheme } from "@/context/ThemeContext";

import IconEmail from "@/../public/icons/email.svg";
import IconPhone from "@/../public/icons/phone.svg";
import IconGitHub from "@/../public/icons/github.svg";
import IconLinkedIn from "@/../public/icons/linkedin.svg";

const Footer = () => {
    const year = new Date().getFullYear();
    const { theme } = useTheme();

    return (
        <footer className={cn(
            "mt-[70px] w-full bg-(--primary) shadow-[0_-4px_16px_0_var(--shadow-dark)]",
            theme === "dark" ? "text-(--text-1)" : "text-(--text-2)"
        )}>
            <div className={cn(
                "mx-auto flex w-full max-w-[1024px] flex-col items-center gap-[15px]",
                "px-[10px] py-[25px] text-center sm:flex-row sm:justify-between sm:text-left"
            )}>
                <p>© {year} Marcell JS</p>

                {/* Match the contact button order and spacing used on the card. */}
                <nav aria-label="Footer contact links" className="flex gap-[7px]">
                    <IconButton href="mailto:marcelloesugianto@gmail.com" maskSrc={IconEmail} label="Email" />
                    <IconButton href="tel:+610402938886" maskSrc={IconPhone} label="Phone" />
                    <IconButton href="https://github.com/Marcell-J-Sugianto" maskSrc={IconGitHub} label="GitHub" />
                    <IconButton
                        href="https://www.linkedin.com/in/marcell-sugianto-135a9a338/"
                        maskSrc={IconLinkedIn}
                        label="LinkedIn"
                    />
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
