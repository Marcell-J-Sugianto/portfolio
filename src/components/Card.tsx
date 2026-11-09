import { cn } from "@/lib/utils";

import IconButton from "./IconButton";

import IconEmail from "@/../public/email.svg"
import IconPhone from "@/../public/phone.svg"
import IconGitHub from "@/../public/github.svg"
import IconLinkedIn from "@/../public/linkedin.svg"

interface CardProps {
  flipped: boolean;
  quote: string;
  quoteSource: string;

  flipFunction: () => void;
}

const Card = ({ flipped, quote, quoteSource, flipFunction }: CardProps) => {
    return (
        <div
        className="w-[336px] h-[192px]">
            <div
            className={cn(
                "w-full h-full",
                "perspective-midrange"
            )}>
                <div className={cn(
                    "w-full h-full",
                    "transform-3d",
                    "duration-[500ms]",
                    "shadow-[4px_4px_16px_4px_#0a100d80]",
                    "rounded-[8px]",
                    {"rotate-y-180": flipped}
                )}>

                    {/* The front and back share one 3D container that rotates on flip. */}
                    <div className={cn(
                        "absolute flex justify-center items-center",
                        "w-full h-full",
                        "rounded-[8px]",
                        "backface-hidden",
                        "overflow-hidden",

                        "bg-(--primary)",
                        "text-(--secondary)",

                        "group/card-front"
                    )}>
                        <div className="text-center">
                            <h2
                            className={cn(
                                "font-semibold",
                                "text-(length:--text-lg)",
                                "m-0 p-0",
                                "leading-[43px]",
                                "duration-[200ms] ease-out",

                                "group-hover/card-front:text-shadow-[0_0_5px_#96DA9280]"
                            )}>
                                Marcell JS
                            </h2>

                            <p
                            className={cn(
                                "text-(length:--text-sm)",
                                "m-0 p-0",
                                "leading-[19px]",
                                "duration-[200ms] ease-out",

                                "group-hover/card-front:text-shadow-[0_0_5px_#96DA9280]"
                            )}>
                                Web Developer
                            </p>
                        </div>
                    </div>

                    {/* Rotating the back face keeps it readable after the parent turns. */}
                    <div className={cn(
                        "absolute flex flex-col justify-between",
                        "w-full h-full",
                        "rounded-[8px]",
                        "backface-hidden",
                        "overflow-hidden",
                        "rotate-y-180",

                        "bg-(--background-1)"
                    )}>
                        <div className={cn(
                            "grid grid-rows-[min-content_auto_min-content]",
                            "w-full h-full"
                        )}>
                            <div className={cn(
                                "w-full h-full",
                                "p-[14px] pb-0"
                            )}>
                                <div className="flex flex-row items-stretch gap-[20px] h-min">
                                    <div className={cn(
                                        "w-[8px] min-w-[8px] shrink-0",
                                        "rounded-[6px]",
                                        "bg-(--primary)"
                                    )}></div>
                                    <p className={cn(
                                        "italic",
                                        "font-regular",
                                        "text-(length:--text-sm)",
                                        "leading-[19px]"
                                    )}>{quote}</p>
                                </div>
                                <span className={cn(
                                    "italic",
                                    "font-semibold",
                                    "text-(length:--text-sm)",
                                    "leading-[19px]"
                                )}>— {quoteSource}</span>

                            </div>
                            <div></div>
                            <div className={cn(
                                "flex flex-col justify-between gap-[7px]",
                                "w-full h-full",
                                "bg-(--primary)",
                                "p-[14px]"
                            )}>
                                <p
                                className={cn(
                                    "font-semibold",
                                    "text-(length:--text-sm)",
                                    "leading-[19px]",
                                    "text-(--text-2)"
                                )}>
                                    Let's connect!
                                </p>
                                <div className={cn(
                                    "flex justify-between",
                                    "w-full"
                                )}>
                                    <div className={cn(
                                    "flex",
                                    "gap-[7px]"
                                    )}>
                                        <IconButton
                                        href="mailto:marcelloesugianto@gmail.com"
                                        maskSrc={IconEmail}
                                        label="Email" />

                                        <IconButton
                                        href="tel:+610402938886"
                                        maskSrc={IconPhone}
                                        label="Phone" />

                                        <IconButton
                                        href="https://github.com/Marcell-J-Sugianto"
                                        maskSrc={IconGitHub}
                                        label="GitHub" />

                                        <IconButton
                                        href="https://www.linkedin.com/in/marcell-sugianto-135a9a338/"
                                        maskSrc={IconLinkedIn}
                                        label="LinkedIn" />
                                    </div>

                                    <button className={cn(
                                        "bg-(--secondary)",
                                        "rounded-full",
                                        "hover:shadow-[0_0_1px_1px_#96DA9280]",
                                        "duration-[200ms] ease-out",
                                        "cursor-pointer",
                                        "px-[15px]"
                                    )}
                                    onClick={flipFunction}>
                                        Flip!
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;
