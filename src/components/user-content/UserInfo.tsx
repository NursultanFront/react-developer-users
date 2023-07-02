import { useState } from "react";
import { UserAccessChange } from "./UserAccessChange";
import { UserAdvance } from "./UserAdvance";

import DefaultUserImage from "../../assets/defaultUser.png";
import { AdmitPopup } from "../modals/admitPopup/AdmitPopup";
import { User } from "../../api/user/types";

import "../../assets/styles/semantic-ui-reset.scss";
import "./UserInfo.scss";
import { api } from "../../api";

type Props = {
  user: User;
};

const UserInfo = ({ user }: Props) => {
  const [, setIsContent] = useState(false);
  const [isAdvance, showAdvance] = useState(false);
  const [admitPopup, setAdmitPopup] = useState(false);

  const activateEmail = async () => {
    try {
      await api.user.activateEmail(user.id);
    } catch (error) {}
  };

  const showContent = () => {
    setIsContent(true);
    showAdvance(false);
  };

  const changeAcess = () => {
    setIsContent(false);
    showAdvance(true);
  };

  const closeAdvance = () => {
    showAdvance(false);
  };

  const showAdmitPopup = () => {
    setAdmitPopup(true);
    activateEmail();
  };

  const closeAdmitPopup = () => {
    setAdmitPopup(false);
  };

  return (
    <article className="user-info">
      <img
        src={user.image ?? DefaultUserImage}
        alt="user img"
        className="user-info__img"
      />
      <div className="user-info__person">
        <div className="user-info__box ">
          <h2>{user.name}</h2>
          <h3>{!user.isActivate && "Не зарегистрирован"}</h3>
          <span>{user.email}</span>
        </div>
        <ul className="user-info__roles">
          {user.permissions.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
      <button className="user-info__option-btn" onClick={showContent}>
        <UserAdvance
          isActivate={user.isActivate}
          userId={user.id}
          showAdmitPopup={showAdmitPopup}
          changeAccess={changeAcess}
        ></UserAdvance>
      </button>
      {isAdvance && (
        <UserAccessChange
          userId={user.id}
          permissions={user.permissions}
          closeAdvance={closeAdvance}
        />
      )}
      {admitPopup && (
        <AdmitPopup
          emailText={user.email}
          modalOpen={admitPopup}
          closeModal={closeAdmitPopup}
        />
      )}
    </article>
  );
};

export { UserInfo };
