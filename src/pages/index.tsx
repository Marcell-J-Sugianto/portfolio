import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";

import ExperienceEntry from "@/components/ExperienceEntry";
import StackSection from "@/components/StackSection";
import styles from "@/styles/Home.module.css";

const sections = [
  { id: "welcome", title: "Welcome" },
  { id: "stack", title: "My Stack" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
];

const stack = [
  { title: "Frameworks & libraries", tools: ["React", "Next.js", "Express.js", "Tailwind CSS"] },
  { title: "Cloud & databases", tools: ["AWS", "DynamoDB", "MySQL", "MSSQL"] },
  { title: "DevOps", tools: ["Ansible", "Terraform", "Docker", "GitHub Actions"] },
  { title: "Tools", tools: ["Figma", "Claude", "ChatGPT"] },
  { title: "Other languages", tools: ["Python", "Java", "C#"] },
];

const milestones = [
  {
    date: "Since 2025",
    title: "RMIT Peer Mentor",
    organisation: "RMIT University",
    description: "Helping students with Web Programming A, Programming A and Database Concepts A.",
  },
  {
    date: "2025",
    title: "2nd place nationally",
    organisation: "WorldSkills Australia",
    description: "National Web Design & Development Competition, representing Team Victoria.",
    image: { src: "/vercel.svg", alt: "" },
    paired: true,
  },
  {
    date: "2024",
    title: "3rd place regionally",
    organisation: "WorldSkills Australia",
    description: "Regional Web Design & Development Competition.",
    image: { src: "/vercel.svg", alt: "" },
    paired: true,
  },
];

function ImagePlaceholder() {
  return (
    <div className={styles.media}>
      <Image src="/vercel.svg" alt="" width={80} height={69} />
    </div>
  );
}

function HeaderLink({ href, label }: { href: string; label: string }) {
  return (
    <a className={styles.headerLink} href={href}>
      <span>{label}</span>
      <span className={styles.sandText} aria-hidden="true">{label}</span>
    </a>
  );
}

function darkBandMask(top: number, bottom: number) {
  return `linear-gradient(
    to bottom,
    transparent calc(${top}px - var(--nav-fade-edge)),
    rgb(0 0 0 / 8%) calc(${top}px - var(--nav-fade-outer)),
    rgb(0 0 0 / 25%) calc(${top}px - var(--nav-fade-inner)),
    rgb(0 0 0 / 50%) ${top}px,
    rgb(0 0 0 / 75%) calc(${top}px + var(--nav-fade-inner)),
    rgb(0 0 0 / 92%) calc(${top}px + var(--nav-fade-outer)),
    black calc(${top}px + var(--nav-fade-edge)) calc(${bottom}px - var(--nav-fade-edge)),
    rgb(0 0 0 / 92%) calc(${bottom}px - var(--nav-fade-outer)),
    rgb(0 0 0 / 75%) calc(${bottom}px - var(--nav-fade-inner)),
    rgb(0 0 0 / 50%) ${bottom}px,
    rgb(0 0 0 / 25%) calc(${bottom}px + var(--nav-fade-inner)),
    rgb(0 0 0 / 8%) calc(${bottom}px + var(--nav-fade-outer)),
    transparent calc(${bottom}px + var(--nav-fade-edge))
  )`;
}

export default function Home() {
  const headerRef = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const links = header.querySelectorAll("a");
    const darkBands = document.querySelectorAll("[data-nav-dark]");
    let frame = 0;

    function updateHeader() {
      frame = 0;
      if (!header) return;

      const scrolled = window.scrollY > 0;
      header.toggleAttribute("data-scrolled", scrolled);
      if (!scrolled) return;

      const { top, height } = header.getBoundingClientRect();
      const masks = Array.from(darkBands, (band) => {
        const bounds = band.getBoundingClientRect();
        return darkBandMask(bounds.top - top, bounds.bottom - top);
      });
      const offsets = Array.from(links, (link) => top - link.getBoundingClientRect().top);

      // Each link samples the same blurred section boundaries, even when the nav wraps.
      header.style.setProperty("--nav-band-mask", masks.join(", "));
      header.style.setProperty("--nav-mask-height", `${height}px`);
      links.forEach((link, index) => {
        link.style.setProperty("--nav-mask-offset", `${offsets[index]}px`);
      });
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(updateHeader);
    }

    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(header);
    if (mainRef.current) observer.observe(mainRef.current);
    darkBands.forEach((band) => observer.observe(band));
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    updateHeader();

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Marcell JS | Portfolio</title>
        <meta name="description" content="The portfolio of Marcell JS, a web developer in Melbourne." />
      </Head>

      <a className={styles.skip} href="#main">Skip to content</a>

      <header ref={headerRef} className={styles.headerBar}>
        <div className={styles.shell + " " + styles.header}>
          <HeaderLink href="#welcome" label="Marcell JS" />
          <nav aria-label="Portfolio sections">
            {sections.map(({ id, title }) => (
              <HeaderLink key={id} href={`#${id}`} label={title} />
            ))}
          </nav>
        </div>
      </header>

      <main ref={mainRef} id="main" tabIndex={-1}>
        <section id="welcome" aria-labelledby="welcome-title">
          <div className={styles.hero}>
            {/* Reserve the full-width scene independently of the heading. */}
            <div className={styles.scenery} aria-hidden="true" />
            <div className={styles.shell + " " + styles.heroCopy}>
              <h1 id="welcome-title">Marcell <em>JS.</em></h1>
              <p>Web developer in Melbourne</p>
            </div>
          </div>

          <div className={styles.shell + " " + styles.shoreNotes}>
            <p>Give me the beach over the mountains any day. I studied IT at RMIT and plan to pursue a Master’s in AI.</p>
            <figure>
              <blockquote>“Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.”</blockquote>
              <figcaption>Colossians 3:23 (NIV)</figcaption>
            </figure>
          </div>
        </section>

        <section id="stack" className={styles.shell + " " + styles.section} aria-labelledby="stack-title">
          <h2 id="stack-title">My Stack</h2>
          <div className={styles.stackGroups}>
            {stack.map(({ title, tools }) => (
              <StackSection key={title} title={title} tools={tools} className={styles.stackGroup} />
            ))}
          </div>
        </section>

        <section id="experience" className={styles.band} aria-labelledby="experience-title" data-nav-dark>
          <div className={styles.shell + " " + styles.section}>
            <h2 id="experience-title">Experience</h2>
            <ExperienceEntry
              date="2026"
              title="UX Designer"
              organisation="RMIT × Telstra muru-D"
              description="Helped design an internal tool that takes an idea from evaluation to an early HTML prototype."
            />

            <ul className={styles.timeline} aria-label="Earlier experience">
              {milestones.map(({ date, title, organisation, description, image, paired }) => (
                <li key={title} className={paired ? styles.timelineHalf : undefined}>
                  <ExperienceEntry date={date} title={title} organisation={organisation} description={description} image={image} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="projects" className={styles.shell + " " + styles.section} aria-labelledby="projects-title">
          <div className={styles.project}>
            <h2 id="projects-title">Projects</h2>
            <article>
              <h3>Portfolio Website</h3>
              <p>My personal site for sharing what I’ve built, the tools I use and the work I’ve been part of.</p>
              <ImagePlaceholder />
            </article>
          </div>
        </section>
      </main>

      <footer className={styles.band} data-nav-dark>
        <div className={styles.shell + " " + styles.footer}>
          <div>
            <h2>Drop me a line.</h2>
            <nav aria-label="Contact">
              <a href="mailto:marcelloesugianto@gmail.com">Email</a>
              <a href="https://github.com/Marcell-J-Sugianto">GitHub</a>
              <a href="https://www.linkedin.com/in/marcell-sugianto-135a9a338/">LinkedIn</a>
            </nav>
          </div>
          <a href="#welcome">Back to top</a>
        </div>
      </footer>
    </>
  );
}

