import { ReactNode, useState } from "react";
import Modal from "react-modal";

type Props = {
  children: ReactNode;
  open: boolean;
};

const Popup = ({ children, open }: Props) => {
  const [modalIsOpen, setIsOpen] = useState(open);

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      {children}
    </Modal>
  );
};

export { Popup };
