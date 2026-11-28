import { useEffect, useRef } from "react";

import styles from "@/styles/Home.module.css";

type NavLinkProps = {
  href: string;
  label: string;
};

export default function NavLink({ href, label }: NavLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const boldRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const link = linkRef.current;
    const labelLayer = labelRef.current;
    const bold = boldRef.current;
    if (!link || !labelLayer || !bold) return;

    let active = true;
    function updateScale() {
      if (!active || !link || !labelLayer || !bold) return;
      const currentScale = new DOMMatrixReadOnly(getComputedStyle(bold).transform).a;
      const boldWidth = bold.getBoundingClientRect().width / currentScale;
      if (boldWidth) {
        link.style.setProperty("--nav-bold-scale", String(labelLayer.getBoundingClientRect().width / boldWidth));
      }
    }

    const observer = new ResizeObserver(updateScale);
    observer.observe(labelLayer);
    observer.observe(bold);
    document.fonts.ready.then(updateScale);
    document.fonts.addEventListener("loadingdone", updateScale);
    updateScale();

    return () => {
      active = false;
      observer.disconnect();
      document.fonts.removeEventListener("loadingdone", updateScale);
    };
  }, [label]);

  return (
    <a ref={linkRef} className={styles.headerLink} href={href}>
      <span ref={labelRef} className={styles.navLabel}>
        {label}
        <span className={styles.navBoldReveal} aria-hidden="true">
          <span ref={boldRef} className={styles.navBold}>{label}</span>
        </span>
      </span>
      <span className={styles.sandText} aria-hidden="true">
        {label}
        <span className={styles.navBoldReveal}>
          <span className={styles.navBold}>{label}</span>
        </span>
      </span>
    </a>
  );
}
