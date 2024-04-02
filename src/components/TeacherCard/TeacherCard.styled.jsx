const { default: styled } = require('@emotion/styled');

export const StyledCard = styled.div`
  display: flex;
  gap: 48px;
  padding: 24px;

  .statistics-favorites {
    display: flex;
    align-items: center;
  }
  .statistics {
    display: flex;
    align-items: center;
    font-weight: 500;
  }

  .lessons-online,
  .rating {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .fill-heart {
    fill: var(--primary-orange);
    color: var(--primary-orange);
    stroke: var(--primary-orange);
    height: 26px;
    width: 26px;
  }
  .heart-button {
    padding-left: 0;
    margin-left: 64px;
    background: transparent;
    border: none;
    /* height: 26px;
    width: 26px; */
  }
  .transparent-heart {
    height: 26px;
    width: 26px;
  }
  .ellipse {
    height: 8px;
    width: 8px;
  }
  .book-open {
    height: 16px;
    width: 16px;
  }
  .star {
    height: 16px;
    width: 16px;
  }
  .price {
    color: #38cd3e;
  }
  .item {
    font-size: 16px;

    border-right: 1px solid rgba(18, 20, 23, 0.2);
    :not(:last-child) {
      margin-right: 16px;
    }
    padding-right: 16px;
  }
`;

export const CardBookButton = styled.button`
  height: 60px;
  width: 232px;
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
