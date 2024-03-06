import React, { useEffect } from 'react';
import { StyledModal, StyledModalBackdrop } from './ModalComponent.styled';
import Icon from 'components/Icon/Icon';

const ModalComponent = ({ setVisible, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setVisible(false);
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
    }
  };
  return (
    <StyledModalBackdrop className="visible" onClick={handleBackdropClick}>
      <StyledModal>
        <button onClick={() => setVisible(false)}>
          <Icon className="modal-icon" id="close" />
        </button>
        {children}
      </StyledModal>
    </StyledModalBackdrop>
  );
};

export default ModalComponent;
