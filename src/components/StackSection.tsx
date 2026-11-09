import { cn } from "@/lib/utils";

import Box from "@/components/Box";
import StackSlider from "@/components/StackSlider";
import StackCard from "@/components/StackCard";

interface StackSectionProps {
    stacks: string[];
}

export default function StackSection({ stacks }: StackSectionProps) {
    return (
        <Box>
            <div className="w-full flex flex-col gap-[25px]">
                <div
                    className={cn(
                        "logo-slider-container w-full overflow-hidden",
                        "px-[25px]",
                        "bg-(--background-1)",
                        "rounded-[10px]",
                        "shadow-[-4px_-4px_16px_8px_var(--shadow-light),_4px_4px_16px_8px_var(--shadow-dark)]"
                    )}>
                    <StackSlider
                        stacks={stacks}
                        speed={30}
                        logoHeight={40}
                        gap={30}
                        className="py-4" />
                </div>

                <div
                        className={cn(
                        "w-full",
                        "grid grid-cols-[1fr] gap-[25px]",
                        "md:grid-cols-[1fr_1fr_1fr_1fr]"
                    )}>

                        <StackCard 
                        title="Frameworks & Libs"
                        stack={[
                            "React",
                            "Next.js",
                            "Express.js",
                            "Tailwind CSS"
                        ]} />

                        <StackCard 
                        title="Cloud & Database"
                        stack={[
                            "AWS",
                            "DynamoDB",
                            "MySQL",
                            "MSSQL"
                        ]} />

                        <StackCard 
                        title="Devops"
                        stack={[
                            "Ansible",
                            "Terraform",
                            "Docker",
                            "GitHub Actions"
                        ]} />

                        <StackCard 
                        title="Tools"
                        stack={[
                            "Figma",
                            "Claude",
                            "ChatGPT (Codex)"
                        ]} />
                </div>
            </div>
        </Box>
    )
}
