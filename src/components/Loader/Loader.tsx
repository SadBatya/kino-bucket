import kb from "../../assets/icons/kb.svg";
import style from './Loader.module.scss'
export const Loader = () => {
  return (
    <div className={style.loader}>
      <img className={style.loader__img} src={kb} alt="" />
    </div>
  );
};
