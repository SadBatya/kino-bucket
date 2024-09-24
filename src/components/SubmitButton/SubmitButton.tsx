import style from "./SubmitButton.module.scss";
import { Link } from "react-router-dom";
interface ISubmitButton {
  type?: "submit" | "reset" | "button" | undefined;
  text: string;
  link?: string | "";
}

export const SubmitButton = ({ type, text, link = "" }: ISubmitButton) => {
  return (
    <button type={type} className={style.submit__btn}>
      <Link to={link}>{text}</Link>
    </button>
  );
};
