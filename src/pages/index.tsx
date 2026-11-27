import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

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
  { date: "Since 2025", title: "RMIT Peer Mentor", organisation: "RMIT University" },
  { date: "2025", title: "2nd place nationally", organisation: "WorldSkills Australia" },
  { date: "2024", title: "3rd place regionally", organisation: "WorldSkills Australia" },
];

function ImagePlaceholder() {
  return (
    <div className={styles.media}>
      <Image src="/vercel.svg" alt="" width={80} height={69} />
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 0);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Marcell JS | Portfolio</title>
        <meta name="description" content="The portfolio of Marcell JS, a web developer in Melbourne." />
      </Head>

      <a className={styles.skip} href="#main">Skip to content</a>

      <header className={`${styles.headerBar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.shell + " " + styles.header}>
          <a href="#welcome">Marcell JS</a>
          <nav aria-label="Portfolio sections">
            {sections.map(({ id, title }) => <a key={id} href={`#${id}`}>{title}</a>)}
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
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

        <section id="experience" className={styles.band} aria-labelledby="experience-title">
          <div className={styles.shell + " " + styles.section}>
            <h2 id="experience-title">Experience</h2>
            <article className={styles.feature}>
              <div>
                <p><time dateTime="2026">2026</time></p>
                <h3>UX Designer</h3>
                <p>RMIT × Telstra muru-D</p>
                <p>Helped design an internal tool that takes an idea from evaluation to an early HTML prototype.</p>
              </div>
              <ImagePlaceholder />
            </article>

            <ul className={styles.timeline} aria-label="Earlier experience">
              {milestones.map(({ date, title, organisation }) => (
                <li key={title}>
                  <p>{date}</p>
                  <h3>{title}</h3>
                  <p>{organisation}</p>
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

      <footer className={styles.band}>
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

