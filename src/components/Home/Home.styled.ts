import styled from 'styled-components';

export const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1024px;
  background: url('/image 60.png'), lightgray 50% / cover no-repeat;
`;
export const HeroStyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1085px;
  height: 1024px;
`;
export const StyledTitle = styled.p`
  color: var(--white-color);
  text-align: center;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;
`;
export const StyledDescription = styled.span`
  color: var(--white-color);
  margin-top: 10px;
  text-align: center;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.48px;
`;
export const StyledButton = styled.button`
  padding: 10px;
  margin-top: 30px;
  background-color: transparent;
  min-width: 160px;
  text-align: center;
  border-radius: 8px;
  border: 1px solid #b29f7e;
  color: var(--white-color);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.7;
  transition-property: background-color;
  transition-duration: 0.5s;
  &:hover {
    background-color: var(--first-bg-color);
    color: var(--white-color);
  }
`;
