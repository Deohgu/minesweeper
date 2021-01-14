import styled from "styled-components";
import { Box } from "../Box";

export const BoardStyled = styled(Box)`
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 85%; // 85% as that the parents width is 85% of the height. So with this the component will be square
`;
