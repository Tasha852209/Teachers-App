import styled from '@emotion/styled';

export const StyledModalBookContent = styled.div`
  overflow-y: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 438px;
  gap: 20px;
  font-size: 16px;
  font-weight: 400;
  h2 {
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 0;
  }
  .text {
    flex-direction: column;
    display: flex;
    gap: 20px;
  }
  .question {
    margin-top: 20px;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.33;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 40px;
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
  .radio-input {
    color: var(--primary-orange);
  }

  .radio-label {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0;
    height: 22px;
  }

  #radio-inputs {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 40px;
  }

  input[type='radio'] {
    width: 24px;

    accent-color: #1214171a;
  }
  input[type='radio']:checked {
    accent-color: #f4c550;
  }
`;

export const StyledSelectedTeacher = styled.div`
  .img-text {
    display: flex;
    flex-direction: row;
    gap: 14px;
  }

  .teacher-text {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 81px;
  }

  #teacher-img {
    display: block;
    box-shadow: none;
    width: 44px;
    border-radius: 50%;
  }
  .text-your-teacher {
    font-size: 12px;
    line-height: 1.33;
  }
  .teacher-name {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
  }
`;
