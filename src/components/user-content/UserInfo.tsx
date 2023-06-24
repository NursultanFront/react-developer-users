import { OptionIcon } from "../../assets/home/OptionIcon";
import "./UserInfo.scss";
type Props = {};

const UserInfo = (props: Props) => {
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
      <button className="user-info__option-btn">
        <OptionIcon />
      </button>
    </article>
  );
};

export { UserInfo };
