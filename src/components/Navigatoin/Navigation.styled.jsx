import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  width: 1184px;
  height: 48px;

  margin: 20px auto 20px auto;
  nav {
    display: flex;
    align-items: center;
    height: 48px;
  }
  .logo-icon-text {
    display: flex;
    align-items: center;
    padding-bottom: 3px;
    margin-right: 390px;
  }

  .logo {
    width: 28px;
    height: 28px;
    margin-right: 8px;
  }
  .logo-text {
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
  }
  .links {
    display: flex;
    gap: 28px;
    font-size: 16px;
    line-height: 1.25;
    align-items: center;
  }
  .log-icon-text {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .log-icon {
    width: 20px;
    height: 20px;
    fill: #f4c550;
  }
  .log-text {
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.25;
  }
  .if-not-login-position {
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 10px;
  }
`;

export const StyledLogButton = styled.button`
  border: none;
  height: 48px;
  border-radius: 7px;
  background-color: transparent;
  margin-left: auto;
  &:hover,
  &:focus,
  &:active {
    background-color: #ffedbf;
  }
`;

export const RegisterButton = styled.button`
  background-color: var(--text-color-black);
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  width: 166px;
  height: 48px;

  color: #ffffff;
  &:hover,
  &:focus,
  &:active {
    background-color: var(--primary-orange);
    color: var(--text-color-black);
    fill: #ffffff;
  }
`;

export const StyledNavlink = styled(NavLink)`
  &.active {
    background-color: #ffedbf;
  }
`;
