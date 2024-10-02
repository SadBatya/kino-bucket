import style from "./SubmitButton.module.scss";
interface ISubmitButton {
  type?: "submit" | "reset" | "button" | undefined;
  text: string;
  path?: string | "";
  status?: boolean;
  onClick?: () => void;
}

export const SubmitButton = ({
  type,
  text,
  path = "",
  status,
  onClick,
}: ISubmitButton) => {
  return (
    <>
      {status ? (
        <button
          className={style.submit__btn}
          type={type}
          onClick={() => onClick}
          disabled={status}
        >
          {text}
        </button>
      ) : (
        <button
          className={style.submit__btn}
          type={type}
          onClick={() => onClick}
          disabled={status}
        >
          {text}
        </button>
      )}
    </>
  );
};
