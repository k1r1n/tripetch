import styled from "styled-components";
import { colors } from "../../constants/color";

export const AthletsStyle = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 0;
  margin: -7px 0 0 0;

  h1 {
    margin: 4px 0 2px 0;
    padding: 0 0 10px 18px;
    color: ${colors.gray_100};
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media (min-width: 768px) {
    margin: 43px 0 0 0;

    h1 {
      font-size: 90px;
      margin-left: 275px;
    }
  }

  @media (min-width: 1920px) {
    margin: 90px 0 0 0;
    align-items: flex-start;

    h1 {
      font-size: 90px;
      margin-left: 975px;
    }
  }
`;
