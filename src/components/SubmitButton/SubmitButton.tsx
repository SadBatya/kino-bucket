import style from "./SubmitButton.module.scss";
import { Link } from "react-router-dom";
interface ISubmitButton {
  type?: "submit" | "reset" | "button" | undefined;
  text: string;
  path?: string | "";
  status?: boolean
}

export const SubmitButton = ({ type, text, path = "", status }: ISubmitButton) => {
  return (
    <button type={type} disabled={status} className={style.submit__btn}>
      <Link className={style.submit__btn_link} to={path}>{text}</Link>
    </button>
  );
};
