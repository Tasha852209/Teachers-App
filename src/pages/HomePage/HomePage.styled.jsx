import styled from '@emotion/styled';

export const StyledHomeSection = styled.section`
  width: 1312px;
  padding: 0;
  margin: 0 auto;
  img {
    width: 568px;
    height: 530px;
  }

  .hero-wrap {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
  }

  .hero-content {
    width: 720px;
    padding: 98px 64px;
    background-color: #f8f8f8;
    border-radius: 30px;
  }
  .painted {
    display: inline-block;
    background: #fbe9ba;
    border-radius: 8px;
    background-size: 100% 50%;
    font-style: italic;
    font-weight: 400;
    line-height: 0.7;
  }

  .title {
    font-size: 48px;
    font-weight: 500;
    line-height: 1.17;
    margin-bottom: 32px;
  }

  .hero-text {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.375;
    margin-bottom: 64px;
  }

  .results {
    display: flex;
    gap: 100px;
    padding: 40px 122px;
    justify-content: center;
    border-radius: 30px;
    border-style: dashed;
    border-width: 3px;
    border-color: var(--primary-orange);
    margin-bottom: 32px;
  }

  .results-item {
    display: flex;
    gap: 16px;
  }
  .item-number {
    font-size: 28px;
    font-weight: 500;
    /* width: 105px;
    height: 32px; */
  }

  .item-text {
    font-size: 14px;
    font-weight: 400;
    /* width: 96px; */
  }
`;

export const SubmitHeroButton = styled.button`
  width: 267px;

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
