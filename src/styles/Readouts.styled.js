import styled from "styled-components";

export const LargeRdo = styled.p`
  font-size: x-large;
  margin: 0;
  width: ${({ rdoLength }) => `${rdoLength}ch`};
  text-align: right;
`;
