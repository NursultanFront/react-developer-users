import { Dropdown } from "semantic-ui-react";

type Props = {
  text: string;
  changeAccess: () => void;
};

const UserAdvance = ({ changeAccess, text }: Props) => {
  return (
    <Dropdown icon={false} text={text}>
      <Dropdown.Menu className="advance">
        <Dropdown.Item
          className="advance__item"
          text="Изменить права доступа"
          onClick={changeAccess}
        />
        <Dropdown.Item
          className="advance__item"
          text="Отправить код повторно"
        />
        <Dropdown.Item className="advance__item" text="Удалить" />
      </Dropdown.Menu>
    </Dropdown>
  );
};

export { UserAdvance };
