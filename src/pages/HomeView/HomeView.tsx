import { UserInfo } from "../../components/user-content/UserInfo";
import { useEffect, useState } from "react";
import { NewUserModal } from "../../components/modals/newUserModal/NewUserModal";
import { AdmitPopup } from "../../components/modals/admitPopup/AdmitPopup";
import { api } from "../../api";
import { User } from "../../api/user/types";

import TheHeader from "../../components/header/TheHeader";
import "./HomeView.scss";

const HomeView = () => {
  const [users, setUsers] = useState<User[]>([]);

  const [showInvintation, setShowInvintation] = useState(false);
  const [showAdmit, setShowAdmit] = useState(false);

  const showModalInvint = () => {
    setShowInvintation(true);
  };

  const closeInvintation = () => {
    setShowInvintation(false);
  };

  const closeAdmit = () => {
    setShowAdmit(false);
  };

  const stateAdmitBtn = (value: boolean) => {
    closeInvintation();
    setShowAdmit(value);
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await api.user.getUsers();
        setUsers(res);
      } catch (error) {}
    };

    getUsers();
  }, [showAdmit]);

  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__content">
          <TheHeader showModalInvint={showModalInvint} />
          {users.map((item) => {
            return <UserInfo key={item.id} user={item} />;
          })}
        </div>
      </div>

      {showInvintation && (
        <NewUserModal
          modalOpen={showInvintation}
          closeModal={closeInvintation}
          getValue={stateAdmitBtn}
        />
      )}
      {showAdmit && (
        <AdmitPopup modalOpen={showAdmit} closeModal={closeAdmit} />
      )}
    </div>
  );
};

export default HomeView;
