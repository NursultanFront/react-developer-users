import React from "react";
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
    <ul>
      {menu.map((item) => {
        const IconComponent = item.icon;
        return (
          <li key={item.title}>
            <span>{item.title}</span>
            <IconComponent />
          </li>
        );
      })}
    </ul>
  );
};

export { AsideMenu };
