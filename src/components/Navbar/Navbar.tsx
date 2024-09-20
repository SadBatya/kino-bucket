import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";
import { Img } from "react-image";
import KBIcon from "../../assets/icons/kb.svg";

export const Navbar = () => {
  return (
    <div className={style.header}>
      <nav className={style.navbar}>
        <Img src={KBIcon} width={100} />
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
      <div className={style.user}>Пользователь</div>
    </div>
  );
};
