import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    font-size: 2rem;
    color: ${theme.color};
    text-align: center;
    margin: 40px auto;
    font-weight: bold;

    &::before {
      content: '😜';
      display: block;
      font-size: 4rem;
    }

    &:hover::before {
      content: '🥺';
    }

    &:active::before {
      content: '😘';
    }
  `}
`;

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: 400px;
    min-height: 400px;
    background-color: ${theme.backgroundWhite};
    margin: 0 auto;
    padding: 40px;
    border-radius: 30px;
    box-shadow: 1px 2px 3px ${theme.color}11, 1px 2px 9px ${theme.color}11;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;
