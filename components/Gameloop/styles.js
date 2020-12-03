import styled, { css } from 'styled-components';

export const Timer = styled.div`
  ${({ theme }) => css`
    height: 50px;
    width: 50px;
    color: ${theme.backgroundWhite};
    font-size: 1rem;
    border-radius: 50%;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.color};
    margin-bottom: 10px;
  `}
`;

export const Emoji = styled.div`
  font-size: 4rem;
  margin-bottom: 10px;
`;

export const Score = styled.div`
  font-size: 0.7rem;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.blue}55;
    border: none;
    font-size: 1.3rem;
    padding: 14px;
    width: 60px;
    margin-bottom: 40px;
    text-align: center;
    border-radius: 10px;
  `}
`;
