import React, { useState } from "react";
import { Popup } from "../../../lib/Popup/Popup";

type Props = {
  modalOpen: boolean;
  closeModal: () => void;
};

const AdmitPopup = ({ modalOpen, closeModal }: Props) => {
  return (
    <Popup isOpen={modalOpen}>
      <div className="modal">
        <div className="modal__wrapper">
          <p className="modal__text">
            Приглашение отправлено на почту example@email.com
          </p>
          <div className="modal__info">
            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export { AdmitPopup };
