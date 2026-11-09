import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  title: string,
  year: number,
  subtitle: string,
  place: string,
  tags: string[]
}

const ExperienceCard = ({ title, year, subtitle, place, tags }: ExperienceCardProps) => {
    return (
        <div className={cn(
            "p-[25px]",
            "bg-(--background-1)",
            "rounded-[10px]",
            "shadow-[-4px_-4px_16px_8px_#EFF5F380,_4px_4px_16px_8px_#0A100D80]"
        )}>
            <div className="flex">
                <div className={cn("flex-1")}>
                    <h2 style={{
                        backgroundColor: "var(--primary)",
                        display: "inline-block", 
                        padding: "5px 8px", 
                        margin: "0 0 7px 0",
                        fontSize: "20px",
                        lineHeight: "24px",
                        borderRadius: "5px",
                        color: "var(--secondary)"
                    }}>
                        { title }
                    </h2>

                    <div className="flex flex-row gap-[10px] mb-[15px]">
                        <div className="w-[7px] rounded-full bg-(--primary)"></div>
                        <div>
                            <span className="size-[16px] leading-[19px] font-semibold">{ subtitle }</span><br />
                            <span className="size-[14px] leading-[17px]">{ place }</span><br />
                        </div>
                    </div>

                    <div className={cn(
                        "flex gap-[10px]"
                    )}>
                        {tags.map(t => 
                            <div
                            key={t}
                            className={cn(
                                "px-[7px] py-[4px]",
                                "bg-(--background-1)",
                                "rounded-[5px]",
                                "shadow-[-4px_-4px_16px_4px_#EFF5F380,_4px_4px_16px_4px_#0A100D80]"
                            )}>
                                <span className="size-[14px] leading-[17px]">
                                    {t}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    { year }
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;