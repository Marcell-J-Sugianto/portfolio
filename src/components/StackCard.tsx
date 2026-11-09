import { cn } from "@/lib/utils";

interface StackCardProps {
  title: string,
  stack: string[]
}

const StackCard = ({ title, stack }: StackCardProps) => {
    return (
        <div className={cn(
            "p-[25px]",
            "bg-(--background-1)",
            "rounded-[10px]",
            "shadow-[-4px_-4px_16px_8px_#EFF5F380,_4px_4px_16px_8px_#0A100D80]"
        )}>
            <h2 style={{ fontSize: "24px", lineHeight: "29px", padding: "0 0 5px 0" }}>
                {title}
            </h2>

            <ul className="list-disc pl-[15px]">
                {stack.map(s => 
                    <li key={s}>{s}</li>
                )}
            </ul>
        </div>
    );
};

export default StackCard;