import { useState } from "react";
import { UserAccessChange } from "./UserAccessChange";
import { UserAdvance } from "./UserAdvance";

import "../../assets/styles/semantic-ui-reset.scss";
import "./UserInfo.scss";
import { AdmitPopup } from "../modals/admitPopup/AdmitPopup";
type Props = {};

const UserInfo = (props: Props) => {
  const [isContent, setIsContent] = useState(false);
  const [isAdvance, showAdvance] = useState(false);
  const [admitPopup, setAdmitPopup] = useState(false);

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
  };

  const closeAdmitPopup = () => {
    setAdmitPopup(false);
  };

  return (
    <article className="user-info">
      <img src="" alt="user img" className="user-info__img" />
      <div className="user-info__person">
        <div className="user-info__box ">
          <h2>Артем Иванов</h2>
          <h3>Не зарегистрирован</h3>
          <span>Почта</span>
        </div>
        <ul className="user-info__roles">
          <li>Администратор</li>
        </ul>
      </div>
      <button className="user-info__option-btn" onClick={showContent}>
        <UserAdvance
          showAdmitPopup={showAdmitPopup}
          changeAccess={changeAcess}
          text="..."
        ></UserAdvance>
      </button>
      {isAdvance && <UserAccessChange closeAdvance={closeAdvance} />}
      {admitPopup && (
        <AdmitPopup modalOpen={admitPopup} closeModal={closeAdmitPopup} />
      )}
    </article>
  );
};

export { UserInfo };
