import style from "./Footer.module.scss";
import logo from "../../assets/icons/kb.svg";
import telegramIcon from "../../assets/icons/telegram.svg";
import youtubeIcon from "../../assets/icons/youtube.svg";

export const Footer = () => (
  <div className={style.footer}>
    <div className={style.footer__contacts}>
      <p>Написать нам</p>
      <a className={style.footer__link} href="https://t.me/sadbatya" target="_blank">
        <img src={telegramIcon} alt="" />
      </a>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygULcmljayBhc3RsZXk%3D" target="_blank">
        <img src={youtubeIcon} alt="" />
      </a>
    </div>
    <div>
      <img src={logo} alt="" />
    </div>
    <div className={style.footer__title}>Kino Bucket 2024 ©</div>
  </div>
);
