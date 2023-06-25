import { Popup } from "../../../lib/Popup/Popup";
import { SelectComp } from "../../../lib/Select";
import { Options } from "../../../data/data";
import { CloseIcons } from "../../../assets/modals/CloseIcons";
import { useCallback, useState } from "react";
import isEmail from "validator/es/lib/isEmail";

type Props = {
  modalOpen: boolean;
  closeModal: () => void;
  getValue: (value: boolean) => void;
};

const NewUserModal = ({ modalOpen, closeModal, getValue }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const getSelectValue = (value: Options["label"][] | Options["label"]) => {
    console.log(value);
  };

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(inputValue);
      getValue(true);
    },
    [getValue, inputValue]
  );

  const getTextInputValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newEmail = event.target.value;
      setInputValue(newEmail);
      setIsEmailValid(isEmail(newEmail));
    },
    []
  );

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
              value={inputValue}
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
