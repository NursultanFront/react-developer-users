import React, { useState } from "react";
import { Popup } from "../../../lib/Popup/Popup";

type Props = {
  modalOpen: boolean;
  closeModal: () => void;
  emailText: string;
};

const AdmitPopup = ({ modalOpen, closeModal, emailText }: Props) => {
  return (
    <Popup isOpen={modalOpen}>
      <div className="modal">
        <div className="modal__wrapper">
          <p className="modal__text">
            Приглашение отправлено на почту {emailText}
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
