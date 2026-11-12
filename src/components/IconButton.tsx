import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import ViewportTooltip from "@/components/ViewportTooltip";
import { useTheme } from "@/context/ThemeContext";

interface IconButtonProps {
  href: string;
  maskSrc: { src: string };
  label: string;
}

const IconButton = ({ href, maskSrc, label }: IconButtonProps) => {
    const { theme } = useTheme();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [hovered, setHovered] = useState(false);
    const [keyboardFocused, setKeyboardFocused] = useState(false);

    const redirect = () => {
        setHovered(false);
        setKeyboardFocused(false);
        window.open(href, "_blank", "noopener,noreferrer");
    };

    return (
        <span className="relative inline-flex">
            <button
            className={cn(
                "h-[30px] w-[30px] cursor-pointer rounded-full bg-(--secondary)",
                "duration-[200ms] ease-out hover:shadow-[0_0_1px_1px_var(--shadow-accent)] active:shadow-[0_0_1px_1px_var(--shadow-accent)]"
            )}
            type="button"
            aria-label={label}
            ref={buttonRef}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
            onFocus={(event) => setKeyboardFocused(event.currentTarget.matches(":focus-visible"))}
            onBlur={() => setKeyboardFocused(false)}
            onClick={redirect}>
                <span
                aria-hidden="true"
                className={cn(
                    "block h-full w-full transform-gpu backface-hidden duration-[200ms] ease-out hover:blur-[9px] active:blur-[9px]",
                    theme === "dark" ? "bg-(--text-2)" : "bg-(--text-1)"
                )}
                style={{
                    maskImage: `url(${maskSrc.src})`,
                    maskSize: "70%",
                    maskPosition: "center",
                    maskRepeat: "no-repeat",

                    // WebKit-prefixed masks are needed for Safari.
                    WebkitMaskImage: `url(${maskSrc.src})`,
                    WebkitMaskSize: "70%",
                    WebkitMaskPosition: "center",
                    WebkitMaskRepeat: "no-repeat",
                }} />
            </button>

            <ViewportTooltip
                anchorRef={buttonRef}
                label={label}
                visible={hovered || keyboardFocused}
            />
        </span>
    );
};

export default IconButton;
