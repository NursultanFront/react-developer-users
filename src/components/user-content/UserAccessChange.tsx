import { options } from "../../data/data";
import { Dropdown } from "semantic-ui-react";

type Props = {
  text: string;
};

const UserAccessChange = ({ text }: Props) => {
  return (
    <form className="access">
      {options.map((item) => {
        return (
          <label htmlFor={item.value} key={item.value}>
            <input type="checkbox" name="" id={item.value} />
            <span>{item.label}</span>
          </label>
        );
      })}
    </form>
  );
};

export { UserAccessChange };
