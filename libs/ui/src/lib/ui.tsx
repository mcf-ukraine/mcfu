import styles from "./ui.module.css";

/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  return (
    <div className={styles.container}>
      <h1>Welcome to Ui!</h1>
      <button className="btn btn-primary">Button</button>
    </div>
  );
}

export default Ui;
