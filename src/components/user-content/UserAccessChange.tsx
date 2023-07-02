import { useEffect, useState } from "react";
import { Options, options } from "../../data/data";
import { Dropdown } from "semantic-ui-react";
import { api } from "../../api";
import { useAppDispatch } from "../../hooks/redux-hook";
import { fetchUsers } from "../../store/slice/user/userSlice";

type Props = {
  closeAdvance: () => void;
  permissions: string[];
  userId: number;
};

const UserAccessChange = ({ closeAdvance, permissions, userId }: Props) => {
  const dispatch = useAppDispatch();

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
      dispatch(fetchUsers());
    } catch (error) {}
  };

  const allCheck = (check: boolean, arr: Options[]) => {
    if (check) {
      changePermissionList([]);
      return;
    }

    const allSelected = arr.map((item) => item.label);
    changePermissionList(allSelected);
  };

  const handleChange = (value: Options) => {
    const updatedOptions = [...optionList];
    const optionIndex = updatedOptions.findIndex(
      (option) => option.value === value.value
    );

    if (optionIndex !== -1) {
      const updatedOption = {
        ...updatedOptions[optionIndex],
        checked: !updatedOptions[optionIndex].checked,
      };

      updatedOptions[optionIndex] = updatedOption;
      setOptionList(updatedOptions);
    }

    if (value.value === "all") {
      allCheck(value.checked, updatedOptions);
      return;
    }
    const selectedPermissions = updatedOptions
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
                    onChange={() => handleChange(item)}
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
