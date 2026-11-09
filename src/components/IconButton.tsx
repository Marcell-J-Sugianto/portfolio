import { cn } from "@/lib/utils";

interface IconButtonProps {
  href: string;
  maskSrc: { src: string };
  label: string;
}

const IconButton = ({ href, maskSrc, label }: IconButtonProps) => {
    const redirect = () => {
        window.open(href, "_blank", "noopener,noreferrer");
    };

    return (
        <span className="group/icon-button relative inline-flex">
            <button
            className={cn(
                "h-[30px] w-[30px] cursor-pointer rounded-full bg-(--secondary)",
                "duration-[200ms] ease-out hover:shadow-[0_0_1px_1px_var(--shadow-accent)]"
            )}
            type="button"
            aria-label={label}
            onClick={redirect}>
                <span
                aria-hidden="true"
                className="block h-full w-full bg-(--text-1) duration-[200ms] ease-out hover:blur-[9px]"
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

            {/* Also reveal the tooltip on keyboard focus so it works without a mouse. */}
            <span
                role="tooltip"
                className={cn(
                    "pointer-events-none absolute bottom-full left-1/2 z-50 mb-[8px]",
                    "-translate-x-1/2 translate-y-[4px] whitespace-nowrap rounded-[6px]",
                    "bg-(--text-1) px-[10px] py-[6px] text-[14px] leading-[17px] text-(--text-2)",
                    "shadow-[2px_2px_8px_2px_var(--shadow-dark)] opacity-0",
                    "transition-all duration-200 ease-out",
                    "group-hover/icon-button:translate-y-0 group-hover/icon-button:opacity-100",
                    "group-focus-within/icon-button:translate-y-0 group-focus-within/icon-button:opacity-100"
                )}
            >
                {label}
            </span>
        </span>
    );
};

export default IconButton;
