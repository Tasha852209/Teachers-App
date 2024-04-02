import styled from '@emotion/styled';

export const StyledModalContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 438px;
  gap: 40px;
  font-size: 16px;
  font-weight: 400;
  h2 {
    font-size: 40px;
    font-weight: 500;
  }
  .text {
    flex-direction: column;
    display: flex;
    gap: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .eye-input {
    position: relative;
  }

  input {
    width: 100%;
    height: 54px;
    padding: 16px;
    line-height: 1.375;
    border: 1px solid #1214171a;
    border-radius: 12px;
    font-size: 16px;
    &::placeholder {
      font-size: 16px;
      color: var(--text-color-black);
    }
  }
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 438px;
  }
`;
export const StyledAuthFormSpan = styled.span`
  .eye-icon,
  .eye-outline-icon {
    top: 50%;
    right: 5px;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 10;
    width: 20px;
    height: 20px;
  }
`;
export const SubmitButton = styled.button`
  height: 60px;
  line-height: 1.375;
  font-size: 18px;
  font-weight: bold;
  color: var(--text-color-black);
  border: none;
  border-radius: 12px;
  background-color: var(--primary-orange);
  &:hover,
  &:active {
    background-color: var(--secondary-orange);
  }
`;
