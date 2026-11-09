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
            "shadow-[-4px_-4px_16px_8px_var(--shadow-light),_4px_4px_16px_8px_var(--shadow-dark)]"
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
                        color: "var(--text-green)"
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

                    <div className="relative isolate flex gap-[10px]">
                        {tags.map((tag) => (
                            <div key={tag} className="relative">
                                {/* Keep every tag shadow below all tag faces in this row. */}
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-0 z-0 rounded-[5px] shadow-[-4px_-4px_16px_4px_var(--shadow-light),_4px_4px_16px_4px_var(--shadow-dark)]"
                                />
                                <span className="relative z-10 inline-block rounded-[5px] bg-(--background-1) px-[7px] py-[4px]">
                                    <span className="size-[14px] leading-[17px]">{tag}</span>
                                </span>
                            </div>
                        ))}
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
