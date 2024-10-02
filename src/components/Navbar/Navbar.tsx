import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";
import { Img } from "react-image";
import KBIcon from "../../assets/icons/kb.svg";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";

export const Navbar = () => {
  const [user, setUser] = useState<{ username: string } | null>(null);
  const userStatus = useAppSelector(state => state.user.isUserLogin)
  
  useEffect(() => {
    const localData = localStorage.getItem("user");
    if (localData) {
      setUser(JSON.parse(localData));
    }
  }, [userStatus]);

  const deleteUser = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

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
          <FiSearch size={"2em"} />
        </button>
      </div>
      <div className={style.header__user}>
        {user ? (
          <>
            {user?.username}
            <button
              onClick={() => deleteUser()}
              className={style.header__user_exit}
            >
              Выйти
            </button>
          </>
        ) : (
          <>
            <Link className={style.header__user_button} to={"/login"}>
              Войти
            </Link>
            /
            <Link className={style.header__user_button} to={"/authorization"}>
              Зарегистрироваться
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
