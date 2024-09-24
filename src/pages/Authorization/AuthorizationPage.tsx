import style from "./AuthorizationPage.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";

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
    // reset,
    formState: { errors, isValid, isDirty },
  } = useForm<Inputs>({
    mode: "onChange",
  });
  const password = watch("password");
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className={style.form}>
      <h1 className={style.form__title}>Регистрация</h1>
      <form className={style.form__info} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Имя</label>
        <input
          type="text"
          placeholder="Введите логин..."
          {...register("username", {
            required: "Поле обязательно",
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
        {errors.username && <p>{errors.username.message}</p>}

        <label htmlFor="email">Почта</label>
        <input
          type="text"
          id="email"
          placeholder="Введите свой email..."
          {...register("email", {
            required: true,
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
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="channel">Пароль</label>
        <input
          type="password"
          id="password"
          placeholder="Введите пароль..."
          {...register("password", {
            required: true,
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
        {errors.password && <p>{errors.password.message}</p>}

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
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <button
          className={style.form__submit_btn}
          type="submit"
          disabled={!isDirty || !isValid}
          // onClick={() => reset()}
        >
          Зарегистрироваться
        </button>
      </form>
      <button className={style.form__submit_btn}>Ввести логин</button>
    </div>
  );
};
