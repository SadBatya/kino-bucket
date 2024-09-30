import style from "./LoginPage.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { SubmitButton } from "../../components";
import { useState } from "react";

type Inputs = {
  username: string;
  password: string;
};

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<Inputs>({
    mode: "onBlur",
  });
  const [errorMessage, setErrorMessage] = useState(true);

  const onSubmit: SubmitHandler<Inputs> = (data) => {};

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
          })}
        />
        {errors.password && (
          <p className={style.error__message}>{errors.password.message}</p>
        )}
        {errorMessage && (
          <p className={style.error__message}>Пользователь на найден :c</p>
        )}
        <SubmitButton text={"Войти"} status={!isDirty || !isValid} />
        <SubmitButton text={"Зарегистрироваться"} />
      </form>
    </div>
  );
};
