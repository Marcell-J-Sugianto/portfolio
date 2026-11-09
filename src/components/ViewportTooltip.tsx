import {
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
    type CSSProperties,
    type RefObject,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

// Measure before paint in the browser, while keeping server rendering warning-free.
const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

interface ViewportTooltipProps {
    anchorRef: RefObject<HTMLButtonElement | null>;
    label: string;
    visible: boolean;
}

const ViewportTooltip = ({ anchorRef, label, visible }: ViewportTooltipProps) => {
    const tooltipRef = useRef<HTMLSpanElement>(null);
    const [position, setPosition] = useState<CSSProperties>();

    useIsomorphicLayoutEffect(() => {
        if (!visible) {
            setPosition(undefined);
            return;
        }

        const updatePosition = () => {
            const anchor = anchorRef.current;
            const tooltip = tooltipRef.current;
            if (!anchor || !tooltip) return;

            const anchorRect = anchor.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();
            const margin = 8;
            const gap = 8;
            const left = Math.min(
                Math.max(margin, anchorRect.left + (anchorRect.width - tooltipRect.width) / 2),
                window.innerWidth - tooltipRect.width - margin
            );

            // Prefer placing the tooltip above; move it below when the viewport edge is too close.
            let top = anchorRect.top - tooltipRect.height - gap;
            if (top < margin) top = anchorRect.bottom + gap;
            top = Math.min(top, window.innerHeight - tooltipRect.height - margin);
            top = Math.max(margin, top);

            setPosition({ left: Math.max(margin, left), top });
        };

        updatePosition();
        window.addEventListener("resize", updatePosition);
        window.addEventListener("scroll", updatePosition, true);

        return () => {
            window.removeEventListener("resize", updatePosition);
            window.removeEventListener("scroll", updatePosition, true);
        };
    }, [anchorRef, visible, label]);

    if (!visible || typeof document === "undefined") return null;

    return createPortal(
        <span
            ref={tooltipRef}
            role="tooltip"
            className={cn(
                "icon-button-tooltip pointer-events-none fixed z-[1000] w-max max-w-[calc(100vw-16px)]",
                "break-words whitespace-normal rounded-[6px] bg-(--text-1) px-[10px] py-[6px]",
                "text-center text-[14px] leading-[17px] text-(--text-2)",
                "shadow-[2px_2px_8px_2px_var(--shadow-dark)]"
            )}
            style={position}
        >
            {label}
        </span>,
        document.body
    );
};

export default ViewportTooltip;
