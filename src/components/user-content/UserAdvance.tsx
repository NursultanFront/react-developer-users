import { Dropdown } from "semantic-ui-react";

type Props = {
  text: string;
  changeAccess: () => void;
};

const UserAdvance = ({ changeAccess, text }: Props) => {
  return (
    <Dropdown icon={false} text={text}>
      <Dropdown.Menu className="menu-reset">
        <ul className="user-dropdown">
          <li className="user-dropdown__advance" onClick={changeAccess}>
            Изменить права доступа
          </li>
          <li className="user-dropdown__advance">Отправить код повторно</li>
          <li className="user-dropdown__advance">Удалить</li>
        </ul>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export { UserAdvance };
