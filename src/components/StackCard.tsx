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
            "shadow-[-4px_-4px_16px_8px_var(--shadow-light),_4px_4px_16px_8px_var(--shadow-dark)]"
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
