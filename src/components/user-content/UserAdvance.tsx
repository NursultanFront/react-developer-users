import { Dropdown } from "semantic-ui-react";
import { api } from "../../api";
import { useAppDispatch } from "../../hooks/redux-hook";
import { fetchUsers } from "../../store/slice/user/userSlice";

type Props = {
  changeAccess: () => void;
  showAdmitPopup: () => void;
  userId: number;
  isActivate: boolean;
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

const UserAdvance = ({
  changeAccess,
  showAdmitPopup,
  userId,
  isActivate,
}: Props) => {
  const dispatch = useAppDispatch();
  const deleteUser = async () => {
    try {
      await api.user.deleteUser(userId);
      dispatch(fetchUsers());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dropdown icon={optionIcon} direction="left">
      <Dropdown.Menu className="menu-reset">
        <div className="user-dropdown">
          <input
            type="button"
            value="Изменить права доступа"
            className="user-dropdown__advance"
            onClick={changeAccess}
          />

          <input
            type="button"
            value="Отправить код повторно"
            className="user-dropdown__advance"
            disabled={isActivate}
            onClick={showAdmitPopup}
          />
          <input
            type="button"
            value="Удалить"
            className="user-dropdown__advance"
            onClick={deleteUser}
          />
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export { UserAdvance };
