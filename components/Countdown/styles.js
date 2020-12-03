import styled, { css } from 'styled-components';

export const Timer = styled.div`
  ${({ theme }) => css`
    height: 80px;
    width: 80px;
    color: ${theme.backgroundWhite};
    font-size: 2rem;
    border-radius: 50%;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.color};
  `}
`;
