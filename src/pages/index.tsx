import Navbar from "@/components/Navbar";
import CardSection from "@/components/CardSection";
import StackSection from "@/components/StackSection";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import Box from "@/components/Box";
import Footer from "@/components/Footer";

import { useRouter } from "next/router";
import Head from "next/head";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import stacks from "@/generated/stackLogos.json";
import ActionButton from "@/components/ActionButton";
import IconCv from "@/../public/icons/cv.svg";
import IconGuestbook from "@/../public/icons/guestbook.svg";

import { cn } from "@/lib/utils";

interface HomeProps {
  stacks: string[];
}

// The build-generated manifest keeps filesystem access out of the deployed Worker.
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return { props: { stacks } };
};

export default function Home({
  stacks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  const downloadCv = () => {
    console.log("Downloading CV...");
    const link = document.createElement("a");
    link.href = `${router.basePath}/cv/MarcellJoeSugianto_CV.pdf`;
    link.download = "MarcellJoeSugianto_CV.pdf";
    link.click();
  };

  return (
    <>
      <Head>
        <title>Marcell JS | Portfolio</title>
      </Head>
      <Navbar />
      <main className="w-full flex justify-center">
        <div className="w-full max-w-[1024] p-[10px] flex flex-col gap-[20px]">
          <section id="home" className="w-full scroll-mt-[80px]">
            <h1>Welcome <span className="bob-element">🙌</span></h1>

            <div className={cn(
              "w-full",
              "grid min-w-0 grid-cols-1",
              "lg:grid-cols-[minmax(0,1fr)_minmax(0,386px)]",
              "gap-[25px]"
            )}>
              <Box>
                <div className="flex h-full flex-col">
                  <h2 className="font-fira-sans">I'm Marcell JS</h2>

                  <p>
                    ...or just Marcell for short!<br /><br />

                    I just finished my Bachelor’s in IT at RMIT, and soon will take my Master’ degree in 2027. My skillsets are primarily focused on full stack web development. I’m confident in frontend and comfortable with backend, yet still eager to learn more.<br /><br />

                    I’m currently looking for a web related part-time or an internship to both apply and expand my skillset.
                  </p>
                  <div className="mt-auto grid grid-cols-1 gap-[15px] pt-[20px]">
                    <ActionButton
                      onClick={downloadCv}
                      maskSrc={IconCv}
                      label="Get my CV"
                    />
                    {/* <ActionButton
                      onClick={() => router.push("/guestbook")}
                      maskSrc={IconGuestbook}
                      label="Guestbook"
                    /> */}
                  </div>
                </div>
              </Box>
              <Box>
                <CardSection />
              </Box>
            </div>
          </section>

          <section id="stack" className="w-full scroll-mt-[80px]">
              <h1>My Stack</h1>

              <StackSection stacks={stacks} />
          </section>

          <section id="experience" className="w-full scroll-mt-[80px]">
              <h1>Experience</h1>

              <Box>
                <div className="flex flex-col gap-[25px]">
                  <ExperienceCard 
                  title="UX Designer"
                  year={ 2026 }
                  subtitle="Capstone Project: AI System & Agentic in muru-D"
                  place="RMIT University & Telstra muru-D"
                  tags={[
                    "UI/UX",
                    "AI",
                  ]}/>

                  <ExperienceCard 
                  title="RMIT Peer Mentor"
                  year={ 2025 }
                  subtitle="Web Programming A, Programming A and Database Concepts A"
                  place="RMIT University"
                  tags={[
                    "Web Developing",
                    "Database",
                    "Java",
                  ]}/>

                  <ExperienceCard 
                  title="2nd Place Winner"
                  year={ 2025 }
                  subtitle="WorldSkills National Competition in Web Design and Development"
                  place="WorldSkills Australia"
                  tags={[
                    "Frontend",
                    "Backend",
                    "PHP",
                    "MySQL",
                    "API Development",
                  ]}/>

                  
                  <ExperienceCard 
                  title="3rd Place Winner"
                  year={ 2024 }
                  subtitle="WorldSkills Regional Competition in Web Design and Development"
                  place="WorldSkills Australia"
                  tags={[
                    "Frontend",
                    "PHP",
                    "MySQL",
                  ]}/>
                </div>
              </Box>
          </section>

          <section id="projects" className="w-full scroll-mt-[80px]">
              <h1>Projects</h1>

              <Box>
                <div className="flex flex-col gap-[25px]">
                  <ProjectCard
                    screenshot={`${router.basePath}/projects/portfolio.png`}
                    githubUrl="https://github.com/Marcell-J-Sugianto"
                    projectUrl="https://marcell-js.com/portfolio"
                    title="Portfolio Website"
                    description="A personal portfolio showcasing my experience, technical skills, and selected projects."
                    tags={["Next.js", "React", "Tailwind CSS"]}
                  />
                </div>
              </Box>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
