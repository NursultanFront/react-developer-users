import { UserInfo } from "../../components/user-content/UserInfo";
import { useEffect, useState } from "react";
import { NewUserModal } from "../../components/modals/newUserModal/NewUserModal";
import { AdmitPopup } from "../../components/modals/admitPopup/AdmitPopup";

import TheHeader from "../../components/header/TheHeader";
import "./HomeView.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hook";
import { fetchUsers } from "../../store/slice/user/userSlice";

const HomeView = () => {
  const { error, loading, users } = useAppSelector((store) => store.users);

  const dispatch = useAppDispatch();

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
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__content">
          <TheHeader showModalInvint={showModalInvint} />
          {users.map((item) => {
            return <UserInfo key={item.id} user={item} />;
          })}

          {loading && <p>Loading.....</p>}
          {error && <p>{error}</p>}
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
