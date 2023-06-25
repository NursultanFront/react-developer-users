import { PropsWithChildren } from "react";
import Modal from "react-modal";
import "./Popup.scss";

type Props = {
  isOpen: boolean;
  onClose?: () => void;
};

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(6px)",
  },
  content: {
    padding: "40px",
    borderRadius: "25px",
    background: "#F9FAFB",
    boxShadow: " -30px 30px 50px 0px rgba(28, 28, 30, 0.10)",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    maxWidth: "526px",
    width: "100%",
  },
};

export const Popup: React.FC<PropsWithChildren<Props>> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Modal isOpen={isOpen} style={customStyles} ariaHideApp={false}>
      <>{children}</>
    </Modal>
  );
};
