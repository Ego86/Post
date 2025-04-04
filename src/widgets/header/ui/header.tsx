import Button from "@/shared/ui/button/button";
import styles from "./header.module.scss";
import Link from "next/link";
export const Header = () => {
  return (
    <header className={styles.header}>
      <p>hello, Post</p>
      <Link href="/auth">
        <Button>Exit</Button>
      </Link>
    </header>
  );
};
