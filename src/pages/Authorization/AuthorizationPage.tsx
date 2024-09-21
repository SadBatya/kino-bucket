import style from "./AuthorizationPage.module.scss";

export const AuthorizationPage = () => {
  return (
    <div className={style.form}>
      <h1 className={style.form__title}>Регистрация</h1>
      <form className={style.form__info} action="">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />

        <label htmlFor="channel">Password</label>
        <input type="password" id="password" name="password" />

        <label htmlFor="repeatPassword">RepeatPassword</label>
        <input type="password" name="repeatPassword" id="repeatPassword"/>
      </form>
    </div>
  );
};
