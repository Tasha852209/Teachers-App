import styled from '@emotion/styled';

export const StyledModalBackdrop = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const StyledModal = styled.div`
  background-color: white;
  padding: 64px;

  border-radius: 30px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background-color: transparent;
    border: none;

    transition: transform 350ms ease-in-out;

    &:hover {
      transform: rotate(90deg);
    }
    .modal-icon {
      width: 24px;
      height: 24px;
      stroke: #000000;
    }
  }
`;
