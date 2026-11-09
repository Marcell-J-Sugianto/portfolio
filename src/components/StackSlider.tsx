
import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface StackSliderProps {
  className?: string;
  speed?: number;
  logoHeight?: number;
  gap?: number;
  reverse?: boolean;
}

const StackSlider = ({
  className,
  speed = 30,
  logoHeight = 48,
  gap = 64,
  reverse = false,
}: StackSliderProps) => {
  const [stacks, setStacks] = useState<string[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/stack", { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load stack");
        return res.json();
      })
      .then((data: string[]) => setStacks(data))
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Could not load stacks:", error);
        }
      });

    return () => controller.abort();
  }, []);

  if (!stacks.length) return null;

  return (
    <div
      className={cn("w-full overflow-hidden", className)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className={cn(
          "flex w-max animate-logo-slider",
          reverse && "[animation-direction:reverse]"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {/* Two identical tracks make the -50% animation loop seamlessly. */}
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center"
            style={{ gap, paddingRight: gap }}
          >
            {stacks.map((stack) => (
              <div
                key={`${copy}-${stack}`}
                className="flex shrink-0 items-center justify-center"
                style={{ height: logoHeight }}
              >
                <Image
                  src={stack}
                  alt={
                    copy === 0
                      ? stack.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "Logo"
                      : ""
                  }
                  width={160}
                  height={logoHeight}
                  className={cn(
                    "h-full w-auto max-w-[160px] object-contain",
                    "ease-in-out duration-300",
                    "saturate-0 opacity-70",
                    "hover:saturate-100 hover:opacity-100",
                    "cursor-pointer"
                  )}
                  unoptimized={stack.endsWith(".svg")}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackSlider;
