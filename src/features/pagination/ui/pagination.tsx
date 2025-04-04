import Link from "next/link";
import Button from "@/shared/ui/button/button";
import styles from "./pagination.module.scss";

export const Pagination = ({ currentPage, totalPages }: {currentPage: number, totalPages: number}) => {
  return (
    <div className={styles.containerButtons}>
      {Array.from({ length: totalPages }, (_, index) => (
        <Link key={index} href={`/${index + 1}`}>
          <Button active={currentPage === index + 1}>
            {index + 1}
          </Button>
        </Link>
      ))}
    </div>
  );
};


