import React from "react";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return <section className={styles.section}>{children}</section>;
}
