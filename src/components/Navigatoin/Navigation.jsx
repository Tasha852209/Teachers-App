import ModalComponent from 'components/ModalComponent/ModalComponent';

import LoginForm from 'components/LoginForm/LoginForm';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'providers';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const Navigation = () => {
  const { user, userSignOut } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const handleModalOpen = register => {
    setIsRegister(register);
    setModalVisible(true);
  };

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/teachers">Teachers</NavLink>

          {!user && (
            <>
              <button type="button" onClick={() => handleModalOpen(false)}>
                Log in
              </button>
              <button type="button" onClick={() => handleModalOpen(true)}>
                Registration
              </button>
            </>
          )}
          {user && (
            <>
              <NavLink to="/favorites">Favorites</NavLink>
              <button type="button" onClick={userSignOut}>
                Log out
              </button>
            </>
          )}
        </nav>
      </header>
      {modalVisible && (
        <ModalComponent visible={modalVisible} setVisible={setModalVisible}>
          {isRegister ? (
            <RegisterForm setVisible={setModalVisible} />
          ) : (
            <LoginForm setVisible={setModalVisible} />
          )}
        </ModalComponent>
      )}
    </>
  );
};

export default Navigation;
