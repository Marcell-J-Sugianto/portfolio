
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";

interface StackSliderProps {
  stacks: string[];
  className?: string;
  speed?: number;
  logoHeight?: number;
  gap?: number;
  reverse?: boolean;
}

const StackSlider = ({
  stacks,
  className,
  speed = 30,
  logoHeight = 48,
  gap = 64,
  reverse = false,
}: StackSliderProps) => {
  const { basePath } = useRouter();
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
          "flex w-max",
          imagesReady && "animate-logo-slider",
          reverse && "[animation-direction:reverse]"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {/* Two identical tracks make the -50% animation loop seamlessly. */}
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="stack-slider-track flex shrink-0 items-center"
            style={{ gap, paddingRight: gap }}
          >
            {stacks.map((stack) => (
              <div
                key={`${copy}-${stack}`}
                className="flex shrink-0 items-center justify-center"
                style={{ height: logoHeight }}
              >
                <Image
                  // Public image paths need the configured prefix applied explicitly.
                  src={`${basePath}${stack}`}
                  alt={
                    copy === 0
                      ? stack.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "Logo"
                      : ""
                  }
                  width={160}
                  height={logoHeight}
                  loading="eager"
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
