import Image from "next/image";
import { useState } from "react";

import styles from "@/styles/StackEntry.module.css";

type StackEntryProps = {
  name: string;
  icon?: string;
};

export default function StackEntry({ name, icon = "/vercel.svg" }: StackEntryProps) {
  const [pressCount, setPressCount] = useState(0);

  return (
    <li className={styles.entry}>
      <button className={styles.button} type="button" onClick={() => setPressCount((count) => count + 1)}>
        <Image
          key={pressCount}
          className={`${styles.icon} ${pressCount > 0 ? styles.bounce : ""}`}
          src={icon}
          alt=""
          width={40}
          height={40}
        />
        <span className={styles.name}>{name}</span>
      </button>
    </li>
  );
}
