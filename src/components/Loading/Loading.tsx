import React from "react";
import styles from "./loading.module.sass";

interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = () => {
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.main}>
        <div className={styles.loading}></div>
      </div>
    </>
  );
};
