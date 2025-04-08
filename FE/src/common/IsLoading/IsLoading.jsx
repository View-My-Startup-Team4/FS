import React from "react";
import styles from "./IsLoading.module.scss";

export default function IsLoading() {
  return (
    <section className={styles.loadingContainer}>
      <div className={styles.loadingWrapper}>
        <img
          className={styles.loadingImage}
          src="../../assets/images/icons/loading.gif"
          alt="Loading..."
        />
        <p className={styles.loadingText}>Loading...</p>
      </div>
    </section>
  );
}
