import StackEntry from "@/components/StackEntry";
import styles from "@/styles/StackSection.module.css";

type StackSectionProps = {
  title: string;
  tools: string[];
  className?: string;
};

export default function StackSection({ title, tools, className }: StackSectionProps) {
  return (
    <section className={[styles.section, className].filter(Boolean).join(" ")}>
      <h3>{title}</h3>
      <ul className={styles.tools}>
        {tools.map((tool) => <StackEntry key={tool} name={tool} />)}
      </ul>
    </section>
  );
}
