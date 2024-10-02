import style from "./AuthorizationPage.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { SubmitButton } from "../../components";

type Inputs = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const AuthorizationPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<Inputs>({
    mode: "onBlur",
  });

  const password = watch("password");

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const userData = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    localStorage.setItem("username", JSON.stringify(userData));

    console.log(data);
    console.log(localStorage.getItem("username"));
  };

  return (
    <div className={style.form}>
      <h1 className={style.form__title}>Регистрация</h1>
      <form className={style.form__info} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Имя</label>
        <input
          type="text"
          placeholder="Введите логин..."
          {...register("username", {
            required: "Поле не должно быть пустым",
            maxLength: {
              value: 20,
              message: "Должно быть не больше 20 символов",
            },
            minLength: {
              value: 5,
              message: "Должно быть не меньше 5 символов",
            },
          })}
        />
        {errors.username && (
          <p className={style.error__message}>{errors.username.message}</p>
        )}

        <label htmlFor="email">Почта</label>
        <input
          type="text"
          id="email"
          placeholder="Введите свой email..."
          {...register("email", {
            required: "Поле не должно быть пустым",
            minLength: {
              value: 5,
              message: "Должно быть не меньше 5 символов",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              message: "Некорректный email",
            },
          })}
        />
        {errors.email && (
          <p className={style.error__message}>{errors.email.message}</p>
        )}

        <label htmlFor="channel">Пароль</label>
        <input
          type="password"
          id="password"
          placeholder="Введите пароль..."
          {...register("password", {
            required: "Поле не должно быть пустым",
            minLength: {
              value: 5,
              message: "Должно быть больше 5 символов",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/,
              message: "Пароль должен иметь специальный символ",
            },
          })}
        />
        {errors.password && (
          <p className={style.error__message}>{errors.password.message}</p>
        )}

        <label htmlFor="repeatPassword">Повторите пароль</label>
        <input
          type="password"
          id="repeatPassword"
          placeholder="Повторите пароль..."
          {...register("confirmPassword", {
            required: "Пожалуйста подтвердите пароль",
            validate: (value) => value === password || "Пароли не совпадают",
          })}
        />
        {errors.confirmPassword && (
          <p className={style.error__message}>
            {errors.confirmPassword.message}
          </p>
        )}
        <SubmitButton
          type={"submit"}
          text={"Зарегистрироваться"}
          status={!isDirty || !isValid}
        />
        <SubmitButton text={"Ввести логин"} path="/login" />
      </form>
    </div>
  );
};
