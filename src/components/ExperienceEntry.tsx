import Image from "next/image";

import styles from "@/styles/ExperienceEntry.module.css";

type ExperienceEntryProps = {
  date: string;
  title: string;
  organisation: string;
  description: string;
  image?: { src: string; alt: string };
};

export default function ExperienceEntry({
  date,
  title,
  organisation,
  description,
  image,
}: ExperienceEntryProps) {
  return (
    <article className={styles.entry}>
      <p className={styles.date}>{date}</p>
      <h3>{title}</h3>
      <p className={styles.organisation}>{organisation}</p>
      <p className={styles.description}>{description}</p>
      {image && (
        <div className={styles.media}>
          <Image src={image.src} alt={image.alt} width={80} height={69} />
        </div>
      )}
      {!image && <div className={styles.separator} aria-hidden="true" />}
    </article>
  );
}
