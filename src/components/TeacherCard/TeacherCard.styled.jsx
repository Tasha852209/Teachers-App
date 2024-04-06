const { default: styled } = require('@emotion/styled');

export const StyledCard = styled.div`
  display: flex;
  gap: 48px;
  padding: 24px;
  width: 1184px;

  background-color: #ffff;

  border-radius: 24px;

  img {
    width: 96px;
    border-radius: 50%;
    border: 1 solid #fbe9ba;
    box-shadow: 0 0 0px 9px #ffff, 0 0 0px 12px #fbe9ba;
  }
  line-height: 1.5;
  color: var(--text-color-black);
  font-weight: 500;

  h2 {
    margin-bottom: 32px;
  }

  .languages {
    text-decoration: underline;
    margin-bottom: 8px;
  }

  .grey-text-color {
    color: #8a8a89;
  }
  .all-content,
  .other-content {
    width: 968px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .card-main-content {
    position: relative;
    padding-top: 4px;
  }

  .experience {
    font-weight: 400;
  }

  .statistics-favorites {
    position: absolute;
    top: 0;
    right: 0px;
    display: flex;
    align-items: center;
  }
  .statistics {
    display: flex;
    align-items: center;
    font-weight: 500;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
  }
  .reviews {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .levels {
    display: flex;
    flex-direction: row;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
  }
  .level {
    padding: 8px 12px;
    border: 1px solid #12141733;
    border-radius: 35px;
  }

  .lessons-online,
  .rating,
  .reviewers {
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
  .ellipse-container {
    padding: 13px;
    position: relative;
  }
  .ellipse {
    position: absolute;
    z-index: 100;
    top: 18px;
    left: 85px;
    height: 12px;
    width: 12px;
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

export const ReadMoreButton = styled.button`
  width: 80px;
  margin-top: 8px;
  padding: 0;
  border: none;
  text-decoration: underline;
  text-align: left;
  font-size: 16px;
  font-weight: 500;
  background: transparent;
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
