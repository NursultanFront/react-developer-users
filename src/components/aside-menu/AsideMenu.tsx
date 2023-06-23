import {
  AnalitycaIcon,
  BannerIcon,
  BlogIcon,
  ChatIcon,
  CurrencyIcon,
  ExitIcon,
  ModerationIcon,
  ProfileIcon,
  TeamIcon,
} from "../../assets/aside";
import "./AsideMenu.scss";
import { Link } from "react-router-dom";

import UserImage from "../../assets/User.png";
import LogoIcon from "../../assets/Logo.svg";

const menu = [
  { title: "Аналитика", icon: AnalitycaIcon },
  { title: "Профиль", icon: ProfileIcon },
  { title: "Модерация", icon: ModerationIcon },
  { title: "Чаты", icon: ChatIcon },
  { title: "Баннеры", icon: BannerIcon },
  { title: "Команда", icon: TeamIcon },
  { title: "Блог", icon: BlogIcon },
  { title: "Курс Валют", icon: CurrencyIcon },
  { title: "Выйти", icon: ExitIcon },
];

const AsideMenu = () => {
  return (
    <aside className="aside">
      <div className="aside__wrapper">
        <Link to="/" className="aside__logo">
          <img src={LogoIcon} alt="logo" />
        </Link>
        <div className="aside__user user">
          <img src={UserImage} alt="user" className="user__img" />
          <div className="user__info">
            <h2 className="user__name">Артем Иванов</h2>
            <h3 className="user__role">Собственник</h3>
          </div>
        </div>
        <div className="aside__nav">
          {menu.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link to="/" key={item.title} className="aside__item">
                <IconComponent />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export { AsideMenu };
