import styled from 'styled-components';

type TStyledItemProps = {
  img: string;
};

export const StyledTitle = styled.p`
  color: var(--first-bg-color);
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.21;
`;
export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  color: var(--white-color);
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.22;
`;

export const StyledItem = styled.li<TStyledItemProps>`
  display: flex;
  align-items: end;
  aspect-ratio: calc(630 / 400);
  width: calc((100% - 20px) / 2);
  background-image: ${p => `url("./${p.img}")`};
  background-position: 50% 55%;
  padding: 0 14px 20px;
  @media screen and (max-width: 1024px) {
    width: calc((100% - 20px));
  }
`;

export const StyledItemDescription = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  width: 100%;
  height: 54px;
`;
export const StyledItemDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100%;
  gap: 10px;
  flex-grow: 1;
`;
export const StyledItemDescriptionTitle = styled.p`
  font-family: Merriweather;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.7;
`;
