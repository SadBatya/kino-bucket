import style from "./SubmitButton.module.scss";
import { Link } from "react-router-dom";
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
        <Link className={style.submit__btn_link} to={path}>
          <button
            className={style.submit__btn}
            type={type}
            onClick={() => onClick}
            disabled={status}
          >
            {text}
          </button>
        </Link>
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
