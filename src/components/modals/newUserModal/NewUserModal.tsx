import { Popup } from "../../../lib/Popup/Popup";
import { SelectComp } from "../../../lib/Select";
import { Options } from "../../../data/data";
import { CloseIcons } from "../../../assets/modals/CloseIcons";

type Props = {
  modalOpen: boolean;
  closeModal: () => void;
  getValue: (value: boolean) => void;
};

const NewUserModal = ({ modalOpen, closeModal, getValue }: Props) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
    getValue(true);
  };

  const getSelectValue = (value: Options["label"][] | Options["label"]) => {
    console.log(value);
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
            <input type="email" placeholder="email" />
            <SelectComp multi={true} getValue={getSelectValue}></SelectComp>
            <button type="submit">Отправить приглашение</button>
          </div>
        </div>
      </form>
    </Popup>
  );
};

export { NewUserModal };
