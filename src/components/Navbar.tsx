import { cn } from "@/lib/utils";

const Navbar = () => {
    return (
        <nav
        aria-label="Main navigation"
        className={cn(
            "sticky top-0 z-50 flex justify-center",
            "h-[60px] bg-(--primary)"
        )}>
            <div
            className={cn(
                "flex h-full w-full max-w-[1024px] items-center justify-start gap-[20px]",
                "overflow-x-auto px-[10px]"
            )}>
                {[
                    ["Home", "home"],
                    ["Stack", "stack"],
                    ["Experience", "experience"],
                    ["Projects", "projects"],
                ].map(([label, sectionId]) => (
                    <a
                        key={sectionId}
                        href={`#${sectionId}`}
                        className="shrink-0 text-(--text-2) transition-colors hover:text-(--secondary)"
                    >
                        {label}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
