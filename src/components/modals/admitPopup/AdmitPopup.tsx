import React, { useState } from "react";
import { Popup } from "../../../lib/Popup/Popup";

type Props = {};

const AdmitPopup = (props: Props) => {
  const [modalOpen, setModalOpen] = useState(true);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Popup isOpen={modalOpen}>
      <div className="modal">
        <p className="modal__text">
          Приглашение отправлено на почту example@email.com
        </p>
        <div className="modal__info">
          <button onClick={closeModal}>Закрыть</button>
        </div>
      </div>
    </Popup>
  );
};

export { AdmitPopup };
