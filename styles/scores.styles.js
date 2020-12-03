import styled, { css } from 'styled-components';

export const Title = styled.h2`
  margin: 0 auto 20px;
`;

export const ScoreList = styled.ul`
  margin: 0 auto 40px;
  padding: 0;
  list-style: none;
  font-size: 1rem;
  width: 100%;

  & > * + * {
    margin-top: 10px;
  }
`;

export const ScoreItem = styled.li`
  ${({ theme }) => css`
    background: ${theme.backgroundLight};
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius: 10px;
  `}
`;

export const Place = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color};
    color: ${theme.backgroundDark};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  `}
`;

export const Name = styled.div`
  flex: 1;
  text-align: left;
  font-weight: bold;
`;

export const Points = styled.div``;

export const HomeButton = styled.button`
  ${({ theme }) => css`
    display: block;
    margin: 0 auto;
    background: ${theme.pink};
    background: linear-gradient(15deg, ${theme.pink} 0%, ${theme.pink}99 100%);
    border: none;
    padding: 18px;
    width: 200px;
    border-radius: 30px;
    box-shadow: 1px 2px 4px ${theme.pink}44, 1px 2px 12px ${theme.pink}44;
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
