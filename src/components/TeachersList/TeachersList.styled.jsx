import styled from '@emotion/styled';

export const StyledCardsContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const LoadMoreButton = styled.button`
  height: 60px;
  width: 183px;
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
