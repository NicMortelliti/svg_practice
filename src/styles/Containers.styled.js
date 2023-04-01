import styled from "styled-components";

const Template = styled.div`
  display: flex;
`;

export const DualLgDialCont = styled(Template)`
  border: 1px solid red;
`;

export const SingleLgDialCont = styled(Template)`
  border: 1px solid blue;
  flex-direction: column;
`;
