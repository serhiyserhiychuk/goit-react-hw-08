import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.div}>
      <h1 className={css.title}>Welcome to PhoneBook!</h1>
      <p className={css.text}>Your contacts are safe here</p>
    </div>
  );
}
