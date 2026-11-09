import { cn } from "@/lib/utils";

interface BoxProps {
  children: React.ReactNode;
}

const Box = ({ children }: BoxProps) => {
    return (
        <div className={cn(
            "p-[25px]",
            "bg-(--background-2)",
            "rounded-[25px]",
            "inset-shadow-[-4px_-4px_16px_8px_#CDD6D2,_4px_4px_16px_8px_#0A100D80]"
        )}>
            { children }
        </div>
    );
};

export default Box;