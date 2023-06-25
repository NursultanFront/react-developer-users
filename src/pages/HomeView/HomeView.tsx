import { UserInfo } from "../../components/user-content/UserInfo";
import { LoupeIcon } from "../../assets/home/LoupeIcon";

import "./HomeView.scss";
import { useCallback, useState } from "react";
import { NewUserModal } from "../../components/modals/newUserModal/NewUserModal";
import { AdmitPopup } from "../../components/modals/admitPopup/AdmitPopup";

const HomeView = () => {
  const [showInvintation, setShowInvintation] = useState(false);
  const [showAdmit, setShowAdmit] = useState(false);

  const showModalInvint = () => {
    setShowInvintation(true);
  };

  const closeInvintation = () => {
    setShowInvintation(false);
  };

  const closeAdmit = () => {
    setShowAdmit(false);
  };

  const stateAdmitBtn = (value: boolean) => {
    closeInvintation();
    setShowAdmit(value);
  };

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
            <button className="home__add-btn" onClick={showModalInvint}>
              Добавить пользователя
            </button>
          </div>
        </div>
        <div className="home__content">
          <UserInfo></UserInfo>
          <UserInfo></UserInfo>
        </div>
      </div>

      {showInvintation && (
        <NewUserModal
          modalOpen={showInvintation}
          closeModal={closeInvintation}
          getValue={stateAdmitBtn}
        />
      )}
      {showAdmit && (
        <AdmitPopup modalOpen={showAdmit} closeModal={closeAdmit} />
      )}
    </div>
  );
};

export default HomeView;
