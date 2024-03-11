import ModalComponent from 'components/ModalComponent/ModalComponent';
import AuthForm from 'components/AuthForm/AuthForm';
import LoginForm from 'components/LoginForm/LoginForm';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
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
          <NavLink to="/favorites">Favorites</NavLink>
          <button type="button" onClick={() => handleModalOpen(false)}>
            Log in
          </button>
          <button type="button" onClick={() => handleModalOpen(true)}>
            Registration
          </button>
        </nav>
      </header>
      {modalVisible && (
        <ModalComponent visible={modalVisible} setVisible={setModalVisible}>
          {isRegister ? <AuthForm /> : <LoginForm />}
        </ModalComponent>
      )}
    </>
  );
};

export default Navigation;
