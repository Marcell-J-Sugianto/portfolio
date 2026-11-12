import { cn } from "@/lib/utils";
import Image from "next/image";
import IconButton from "@/components/IconButton";

import IconGitHub from "@/../public/icons/github.svg";
import IconLink from "@/../public/icons/link.svg";

interface ProjectCardProps {
    screenshot: string;
    githubUrl: string;
    projectUrl: string;
    title: string;
    description: string;
    tags: string[];
}

const ProjectCard = ({
    screenshot,
    githubUrl,
    projectUrl,
    title,
    description,
    tags,
}: ProjectCardProps) => {
    return (
        <article className={cn(
            "flex flex-col gap-[20px] p-[25px] md:flex-row",
            "bg-(--background-1) rounded-[10px]",
            "shadow-[-4px_-4px_16px_8px_var(--shadow-light),_4px_4px_16px_8px_var(--shadow-dark)]"
        )}>
            <Image
                src={screenshot}
                alt={`${title} project screenshot`}
                width={960}
                height={600}
                className={cn(
                    "aspect-[16/9] w-full shrink-0 self-center rounded-[8px] object-cover object-top md:w-[280px] md:max-w-[280px] md:self-start",
                    "shadow-[-4px_-4px_16px_4px_var(--shadow-light),_4px_4px_16px_4px_var(--shadow-dark)]"
                )}
            />

            <div className="flex min-w-0 flex-1 flex-col items-start">
                <div className="mb-[10px] flex w-full flex-wrap items-start justify-between gap-[10px]">
                    <h2 style={{ fontSize: "24px", lineHeight: "29px", padding: "0 0 5px 0" }}>
                        {title}
                    </h2>

                    {/* Project actions use the same icon buttons as the contact card. */}
                    <nav aria-label={`${title} project links`} className="flex gap-[7px]">
                        <IconButton href={githubUrl} maskSrc={IconGitHub} label="View GitHub repository" />
                        <IconButton href={projectUrl} maskSrc={IconLink} label="Open live project" />
                    </nav>
                </div>

                <p className="mb-[15px]">{description}</p>

                <ul className="relative isolate mt-auto flex flex-wrap gap-[10px]">
                    {tags.map((tag) => (
                        <li key={tag} className="relative list-none">
                            <span
                                aria-hidden="true"
                                className="absolute inset-0 z-0 rounded-[5px] shadow-[-4px_-4px_16px_4px_var(--shadow-light),_4px_4px_16px_4px_var(--shadow-dark)]"
                            />
                            <span className="relative z-10 inline-block rounded-[5px] bg-(--background-1) px-[7px] py-[4px]">
                                <span className="font-fira-code size-[14px] leading-[17px]">{tag}</span>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default ProjectCard;
