import { useEffect, useState } from "react";
import { options } from "../../data/data";
import { Dropdown } from "semantic-ui-react";
import { api } from "../../api";

type Props = {
  closeAdvance: () => void;
  permissions: string[];
  userId: number;
};

const UserAccessChange = ({ closeAdvance, permissions, userId }: Props) => {
  const [optionList, setOptionList] = useState(
    options.map((item) => {
      if (permissions.includes(item.label)) {
        return {
          ...item,
          checked: true,
        };
      }
      return item;
    })
  );

  const changePermissionList = async (value: string[]) => {
    try {
      await api.user.changePermission({
        id: userId,
        permissions: value,
      });
    } catch (error) {}
  };

  const handleChange = (value: string) => {
    const updatedOptionsCopy = [...optionList];
    const optionIndex = updatedOptionsCopy.findIndex(
      (option) => option.value === value
    );

    if (optionIndex !== -1) {
      const updatedOption = {
        ...updatedOptionsCopy[optionIndex],
        checked: !updatedOptionsCopy[optionIndex].checked,
      };

      updatedOptionsCopy[optionIndex] = updatedOption;
      setOptionList(updatedOptionsCopy);
    }

    const selectedPermissions = updatedOptionsCopy
      .filter((option) => option.checked)
      .map((option) => option.label);

    changePermissionList(selectedPermissions);
  };

  useEffect(() => {
    const handleClick = () => {
      closeAdvance();
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [closeAdvance]);

  return (
    <>
      <Dropdown icon={false} direction="left">
        <Dropdown.Menu open className="menu-reset access-menu">
          <form className="user-dropdown">
            {optionList.map((item) => {
              return (
                <label
                  key={item.value}
                  htmlFor={item.value}
                  className="user-dropdown__access"
                >
                  <input
                    type="checkbox"
                    id={item.value}
                    checked={item.checked}
                    onChange={() => handleChange(item.value)}
                  />
                  <span>{item.label}</span>
                </label>
              );
            })}
          </form>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export { UserAccessChange };
