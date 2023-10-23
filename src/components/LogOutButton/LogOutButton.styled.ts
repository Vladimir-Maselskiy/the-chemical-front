import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledButton = styled.button`
  padding: 11px;
  background-color: var(--black-background-color);
  min-width: 160px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #b29f7e;
  color: var(--first-bg-color);
  font-weight: 700;
  transition-property: color, background-color;
  transition-duration: 0.5s;
  &:hover {
    background-color: var(--first-bg-color);
    color: var(--white-color);
  }
`;
