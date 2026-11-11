import { cn } from "@/lib/utils";

interface ActionButtonProps {
  onClick: () => void;
  maskSrc: { src: string };
  label: string;
}

/** Full-width raised callback button with a centered icon and visible label. */
const ActionButton = ({ onClick, maskSrc, label }: ActionButtonProps) => {
  return (
    <span className="relative block w-full">
      <button
        type="button"
        aria-label={label}
        onClick={() => {onClick()}}
        className={cn(
          "group relative flex h-[100px] w-full cursor-pointer flex-col items-center justify-center gap-[8px] rounded-[10px] bg-(--background-1)",
          "shadow-[-4px_-4px_16px_4px_var(--shadow-light),_4px_4px_16px_4px_var(--shadow-dark)]",
          "active:shadow-[inset_4px_4px_16px_4px_var(--shadow-dark),_inset_-4px_-4px_16px_4px_var(--shadow-light)]",
          "transition-shadow duration-200 ease-out"
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "flex size-[50px] items-center justify-center rounded-full bg-(--background-2)",
            "shadow-[0_0_0_0_var(--shadow-accent)] transition-all duration-200 ease-out",
            "group-hover:bg-(--secondary) group-hover:shadow-[0_0_8px_2px_var(--shadow-accent)]",
            "group-active:bg-(--button-pressed) group-active:shadow-[0_0_10px_5px_var(--shadow-accent)]"
          )}
        >
          <span
            className="block size-[26px] bg-(--text-1) group-hover:blur-[4px]"
            style={{
              maskImage: `url(${maskSrc.src})`,
              maskSize: "contain",
              maskPosition: "center",
              maskRepeat: "no-repeat",
              WebkitMaskImage: `url(${maskSrc.src})`,
              WebkitMaskSize: "contain",
              WebkitMaskPosition: "center",
              WebkitMaskRepeat: "no-repeat",
            }}
          />
        </span>
        <span className="text-(--text-1)">{label}</span>
      </button>
    </span>
  );
};

export default ActionButton;
