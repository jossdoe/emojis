import styled, { css } from 'styled-components';

export const Instructions = styled.p`
  margin-top: 0;
  margin-bottom: 40px;
`;

export const PlayButton = styled.button`
  ${({ theme }) => css`
    display: block;
    margin: 0 auto 40px;
    background: ${theme.purple};
    background: linear-gradient(
      15deg,
      ${theme.purple} 0%,
      ${theme.purple}99 100%
    );
    border: none;
    padding: 18px;
    width: 200px;
    border-radius: 30px;
    box-shadow: 1px 2px 4px ${theme.purple}44, 1px 2px 12px ${theme.purple}44;
    font-weight: bold;
    font-size: 1.4rem;
    color: ${theme.backgroundWhite};
  `}
`;

export const ScoreButton = styled.button`
  ${({ theme }) => css`
    display: block;
    margin: 0 auto;
    background: ${theme.backgroundWhite};
    border: none;
    padding: 18px;
    width: 200px;
    border-radius: 30px;
    box-shadow: 1px 2px 4px ${theme.purple}44, 1px 2px 12px ${theme.purple}44;
    font-weight: bold;
    font-size: 1.4rem;
    color: ${theme.color};
  `}
`;
