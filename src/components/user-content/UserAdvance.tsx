import { Dropdown } from "semantic-ui-react";

type Props = {
  text: string;
  changeAccess: () => void;
  showAdmitPopup: () => void;
};

const UserAdvance = ({ changeAccess, text, showAdmitPopup }: Props) => {
  return (
    <Dropdown icon={false} text={text} direction="left">
      <Dropdown.Menu className="menu-reset">
        <ul className="user-dropdown">
          <li className="user-dropdown__advance" onClick={changeAccess}>
            Изменить права доступа
          </li>
          <li className="user-dropdown__advance" onClick={showAdmitPopup}>
            Отправить код повторно
          </li>
          <li className="user-dropdown__advance">Удалить</li>
        </ul>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export { UserAdvance };
