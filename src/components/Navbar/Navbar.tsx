import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";
import { Img } from "react-image";
import KBIcon from "../../assets/icons/kb.svg";
import { FiSearch } from "react-icons/fi";

export const Navbar = () => {
  return (
    <div className={style.header}>
      <nav className={style.navbar}>
        <Link to={"/"} className={style.navbar__inner_el}>
          <Img src={KBIcon} className={style.navbar__icon} width={100} />
        </Link>
        <ul className={style.navbar__inner}>
          <li>
            <Link className={style.navbar__inner_el} to={"/"}>
              Film List
            </Link>
          </li>
          <li>
            <Link className={style.navbar__inner_el} to={"/favourites"}>
              Favourites
            </Link>
          </li>
        </ul>
      </nav>
      <div className={style.navbar__search}>
        <input type="text" />
        <button className={style.navbar__search_btn}>
          <FiSearch size={'2em'}/> 
        </button>
      </div>
      <div className={style.header__user}>
        <Link className={style.header__user_button} to={'/login'}>Войти</Link>
        /
        <Link className={style.header__user_button} to={'/authorization'}>Зарегистрироваться</Link>
      </div>
    </div>
  );
};
