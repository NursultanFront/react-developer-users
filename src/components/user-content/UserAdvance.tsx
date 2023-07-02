import { Dropdown } from "semantic-ui-react";
import { api } from "../../api";

type Props = {
  changeAccess: () => void;
  showAdmitPopup: () => void;
  userId: number;
};

const optionIcon = (
  <svg
    width="20"
    height="4"
    viewBox="0 0 20 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="2" cy="2" r="2" fill="#C1C1CB" />
    <circle cx="10" cy="2" r="2" fill="#C1C1CB" />
    <circle cx="18" cy="2" r="2" fill="#C1C1CB" />
  </svg>
);

const UserAdvance = ({ changeAccess, showAdmitPopup, userId }: Props) => {
  const deleteUser = async () => {
    try {
      await api.user.deleteUser(userId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dropdown icon={optionIcon} direction="left">
      <Dropdown.Menu className="menu-reset">
        <ul className="user-dropdown">
          <li className="user-dropdown__advance" onClick={changeAccess}>
            Изменить права доступа
          </li>
          <li className="user-dropdown__advance" onClick={showAdmitPopup}>
            Отправить код повторно
          </li>
          <li className="user-dropdown__advance" onClick={deleteUser}>
            Удалить
          </li>
        </ul>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export { UserAdvance };
