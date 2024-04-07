import ModalComponent from 'components/ModalComponent/ModalComponent';

import LoginForm from 'components/LoginForm/LoginForm';
import { useState } from 'react';
import { useAuth } from 'providers';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import {
  RegisterButton,
  StyledHeader,
  StyledLogButton,
  StyledNavlink,
} from './Navigation.styled';
import Icon from 'components/Icon/Icon';

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
      <StyledHeader>
        <nav>
          <span className="logo-icon-text">
            <Icon id="logo" className="logo" />
            <span className="logo-text">Learn Lingo</span>
          </span>
          <div className="links">
            <StyledNavlink to="/">Home</StyledNavlink>
            <StyledNavlink to="/teachers">Teachers</StyledNavlink>
            {user && <StyledNavlink to="/favorites">Favorites</StyledNavlink>}
          </div>
          {user && (
            <StyledLogButton type="button" onClick={userSignOut}>
              <span className="log-icon-text">
                <Icon id="logout" className="log-icon" />
                <span className="log-text">Log out</span>
              </span>
            </StyledLogButton>
          )}

          {!user && (
            <div className="if-not-login-position">
              <StyledLogButton
                type="button"
                onClick={() => handleModalOpen(false)}
              >
                <span className="log-icon-text">
                  <Icon id="login" className="log-icon" />
                  <span className="log-text">Log in</span>
                </span>
              </StyledLogButton>
              <RegisterButton
                type="button"
                onClick={() => handleModalOpen(true)}
              >
                Registration
              </RegisterButton>
            </div>
          )}
        </nav>
      </StyledHeader>
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
