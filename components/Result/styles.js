import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 2rem;
    margin-bottom: 30px;
    position: relative;

    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 10px;
      right: 10px;
      bottom: -6px;
      height: 6px;
      border-radius: 3px;
      background-color: ${theme.blue};
    }
  `}
`;

export const Score = styled.div`
  margin-bottom: 20px;

  strong {
    display: block;
    font-size: 1.4rem;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 0.8rem;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.backgroundDark};
    border: none;
    border-radius: 10px;
    padding: 14px;
    margin-bottom: 40px;
    font-size: 1.2rem;
    text-align: center;

    &::placeholder {
      opacity: 0.6;
    }
  `}
`;

export const Spinner = styled.div`
  animation: ${rotate} 2s linear infinite;
`;

export const SubmitButton = styled.button`
  ${({ theme }) => css`
    display: block;
    margin: 0 auto 40px;
    background: ${theme.blue};
    background: linear-gradient(15deg, ${theme.blue} 0%, ${theme.blue}99 100%);
    border: none;
    padding: 18px;
    width: 200px;
    border-radius: 30px;
    box-shadow: 1px 2px 4px ${theme.blue}44, 1px 2px 12px ${theme.blue}44;
    font-weight: bold;
    font-size: 1.4rem;
    color: ${theme.backgroundWhite};
    cursor: pointer;
    opacity: 0.9;
    transition: opacity 0.1s;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 1;
    }
  `}
`;

export const ReplayButton = styled.button`
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
    cursor: pointer;
    opacity: 0.9;
    transition: opacity 0.1s;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 1;
    }
  `}
`;
