import React, { useEffect } from 'react';
import { StyledModal, StyledModalBackdrop } from './ModalComponent.styled';
import Icon from 'components/Icon/Icon';

const ModalComponent = ({ setVisible, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setVisible(false);
        document.body.classList.remove('modal-open'); // Видалення класу при закритті модального вікна
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setVisible]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setVisible(false);
      document.body.classList.remove('modal-open'); // Видалення класу при кліку на фон
    }
  };

  useEffect(() => {
    document.body.classList.add('modal-open'); // Додавання класу при відкритті модального вікна
    return () => {
      document.body.classList.remove('modal-open'); // Видалення класу при закритті модального вікна
    };
  }, []);

  return (
    <StyledModalBackdrop className="visible" onClick={handleBackdropClick}>
      <StyledModal>
        <button className="close-icon" onClick={() => setVisible(false)}>
          <Icon className="modal-icon" id="close" />
        </button>
        {children}
      </StyledModal>
    </StyledModalBackdrop>
  );
};

export default ModalComponent;
