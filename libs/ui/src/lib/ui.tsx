import { Button } from "./components";
import styles from "./ui.module.css";

/* eslint-disable-next-line */
export interface UiProps {}

export const Ui = (_props: UiProps) => (
  <div className={styles.container}>
    <h1>Welcome to Ui!</h1>
    <Button>New button</Button>
  </div>
);
