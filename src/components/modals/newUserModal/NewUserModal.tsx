import { useState } from "react";
import { Popup } from "../../../lib/Popup/Popup";
import { SelectComp } from "../../../lib/Select";
import { Options } from "../../../data/data";
import { CloseIcons } from "../../../assets/modals/CloseIcons";

const NewUserModal = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const closeModal = () => {
    setModalOpen(false);
  };

  const onSubmit = () => {
    console.log("lolka");
  };

  const getSelectValue = (value: Options["label"][] | Options["label"]) => {
    console.log(value);
  };

  return (
    <Popup isOpen={modalOpen} onClose={closeModal}>
      <form className="modal" onSubmit={onSubmit}>
        <button type="button" className="modal__close" onClick={closeModal}>
          <CloseIcons />
        </button>
        <h2 className="modal__title">Отправить приглашение</h2>
        <div className="modal__info">
          <input type="email" placeholder="email" />
          <SelectComp multi={true} getValue={getSelectValue}></SelectComp>
          <button type="submit">Отправить приглашение</button>
        </div>
      </form>
    </Popup>
  );
};

export { NewUserModal };
