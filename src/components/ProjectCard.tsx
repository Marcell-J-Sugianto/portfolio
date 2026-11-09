import { cn } from "@/lib/utils";
import Image from "next/image";
import IconButton from "@/components/IconButton";

import IconGitHub from "@/../public/github.svg";
import IconLink from "@/../public/link.svg";

interface ProjectCardProps {
    screenshot?: string;
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
            {screenshot ? (
                <Image
                    src={screenshot}
                    alt={`${title} project screenshot`}
                    width={960}
                    height={600}
                    className={cn(
                        "aspect-[16/9] w-full max-w-[280px] shrink-0 rounded-[8px] object-cover",
                        "shadow-[-4px_-4px_16px_4px_var(--shadow-light),_4px_4px_16px_4px_var(--shadow-dark)]"
                    )}
                />
            ) : (
                /* The sample card uses a CSS preview so its colors follow the global theme tokens. */
                <div
                    role="img"
                    aria-label={`${title} project preview`}
                    className={cn(
                        "aspect-[16/9] w-full max-w-[280px] shrink-0 overflow-hidden rounded-[8px] bg-(--background-1) p-[10px]",
                        "shadow-[-4px_-4px_16px_4px_var(--shadow-light),_4px_4px_16px_4px_var(--shadow-dark)]"
                    )}
                >
                    <div className="h-full overflow-hidden rounded-[6px] border border-(--background-2)">
                        <div className="flex h-[24px] items-center gap-[5px] bg-(--secondary) px-[8px]">
                            <span className="size-[6px] rounded-full bg-(--primary)" />
                            <span className="size-[6px] rounded-full bg-(--primary) opacity-70" />
                            <span className="size-[6px] rounded-full bg-(--primary) opacity-40" />
                        </div>
                        <div className="space-y-[10px] p-[14px]">
                            <div className="h-[14px] w-1/2 rounded bg-(--primary)" />
                            <div className="h-[7px] w-3/4 rounded bg-(--background-2)" />
                            <div className="h-[7px] w-2/3 rounded bg-(--background-2)" />
                            <div className="mt-[12px] grid h-[76px] grid-cols-[1fr_1.3fr] gap-[10px] rounded-[6px] bg-(--background-2) p-[8px]">
                                <div className="rounded-[4px] bg-(--primary)" />
                                <div className="flex flex-col justify-center gap-[7px]">
                                    <div className="h-[7px] rounded bg-(--primary) opacity-80" />
                                    <div className="h-[5px] rounded bg-(--background-1)" />
                                    <div className="h-[5px] w-4/5 rounded bg-(--background-1)" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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
                                <span className="size-[14px] leading-[17px]">{tag}</span>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default ProjectCard;
