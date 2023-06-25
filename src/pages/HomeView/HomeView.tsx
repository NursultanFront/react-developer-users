import { UserInfo } from "../../components/user-content/UserInfo";
import { LoupeIcon } from "../../assets/home/LoupeIcon";

import "./HomeView.scss";
import { NewUserModal } from "../../components/modals/newUserModal/NewUserModal";

const HomeView = () => {
  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__header">
          <h2 className="home__title">Команда</h2>
          <div className="home__input">
            <label className="home__label">
              <input type="text" placeholder="Поиск по Email" />
              <button className="home__loupe">
                <LoupeIcon />
              </button>
            </label>
            <button className="home__add-btn">Добавить пользователя</button>
          </div>
        </div>
        <div className="home__content">
          <UserInfo></UserInfo>
          <UserInfo></UserInfo>
        </div>
      </div>

      <NewUserModal></NewUserModal>
    </div>
  );
};

export default HomeView;
