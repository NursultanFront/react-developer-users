import { Popup } from "../../../lib/Popup/Popup";
import { SelectComp } from "../../../lib/Select";
import { Options } from "../../../data/data";
import { CloseIcons } from "../../../assets/modals/CloseIcons";
import { useCallback, useState } from "react";
import isEmail from "validator/es/lib/isEmail";
import { NewUser } from "../../../api/user/types";
import { api } from "../../../api";
import { useAppDispatch } from "../../../hooks/redux-hook";
import { fetchUsers } from "../../../store/slice/user/userSlice";

type Props = {
  modalOpen: boolean;
  closeModal: () => void;
  getValue: (value: boolean, email: string) => void;
};

const NewUserModal = ({ modalOpen, closeModal, getValue }: Props) => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [user, setUser] = useState<NewUser>({
    email: "",
    permissions: [],
    isActivate: false,
  });

  const dispatch = useAppDispatch();

  const getSelectValue = useCallback(
    (value: Options["label"][] | Options["label"]) => {
      const permissionsArray = Array.isArray(value) ? value : [value];

      setUser((prevUser) => ({
        ...prevUser,
        permissions: [...permissionsArray],
      }));
    },
    []
  );

  const getTextInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setUser((prevUser) => ({
      ...prevUser,
      email: newEmail,
    }));
    setIsEmailValid(isEmail(newEmail));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await api.user.addUser(user);
      getValue(true, user.email);
      dispatch(fetchUsers());
    } catch (error) {}
  };

  return (
    <Popup isOpen={modalOpen}>
      <form className="modal" onSubmit={onSubmit}>
        <div className="modal__wrapper">
          <button type="button" className="modal__close" onClick={closeModal}>
            <CloseIcons />
          </button>
          <h2 className="modal__title">Отправить приглашение</h2>
          <div className="modal__info">
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={getTextInputValue}
            />
            <SelectComp multi={true} getValue={getSelectValue}></SelectComp>
            <button type="submit" disabled={!isEmailValid}>
              Отправить приглашение
            </button>
          </div>
        </div>
      </form>
    </Popup>
  );
};

export { NewUserModal };
