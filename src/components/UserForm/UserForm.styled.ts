import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;
export const StyledTitle = styled.p`
  color: var(--black-background-color);
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.21;
`;
export const StyledLabel = styled.label`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.42;
`;
export const StyledInput = styled.input`
  color: var(--black-background-color);
  padding: 14px 20px 12px 20px;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.57;
  border-radius: 5px;
  border: 2px solid var(--Background-Title, #e0e0e0);
  background: var(--Background-Title, #e0e0e0);
`;
export const StyledInputSpan = styled.span`
  color: var(--first-bg-color);
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.57;
  margin-left: auto;
`;
export const StyledSubmitButton = styled.button`
  color: var(--white-color);

  background: var(--first-bg-color);
  border-radius: 5px;
  border: none;
  padding: 11px 0;
  font-family: Merriweather;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.37;
`;
