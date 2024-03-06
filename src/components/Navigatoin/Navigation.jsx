import ModalComponent from 'components/ModalComponent/ModalComponent';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>

          <NavLink to="/teachers">Teachers</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
          <button type="button" onClick={() => setModalVisible(true)}>
            Log in
          </button>
          <button type="button" onClick={() => setModalVisible(true)}>
            Registration
          </button>
        </nav>
      </header>
      {modalVisible && (
        <ModalComponent visible={modalVisible} setVisible={setModalVisible} />
      )}
    </>
  );
};

export default Navigation;
