import { useEffect, useRef, useState } from "react";
import { OptionIcon } from "../../assets/home/OptionIcon";
import { UserAccessChange } from "./UserAccessChange";
import { UserAdvance } from "./UserAdvance";

import "./UserInfo.scss";
type Props = {};

const UserInfo = (props: Props) => {
  const [isContent, setIsContent] = useState(false);
  const [isAdvance, showAdvance] = useState(false);

  const showContent = () => {
    setIsContent(true);
    showAdvance(false);
  };

  const closeContent = () => {
    setIsContent(false);
  };

  const closeAdvance = () => {
    showAdvance(false);
  };

  const changeAcess = () => {
    setIsContent(false);
    showAdvance(true);
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
        <UserAdvance changeAccess={changeAcess} text="..."></UserAdvance>
      </button>
      {/* {isContent && <UserAdvance changeAccess={changeAcess} />} */}
      {/* {isAdvance && <UserAccessChange />} */}
    </article>
  );
};

export { UserInfo };
