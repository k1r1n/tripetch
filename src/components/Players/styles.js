import styled from "styled-components";
import { colors } from "../../constants/color";

export const PlayersStyle = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0;
  margin: 18px 0 0 0;

  h1 {
    margin: 0 0 2px 0;
    padding: 0 0 10px 18px;
    color: ${colors.gray_100};
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media (min-width: 768px) {
    margin: 44px 0 0 0;

    h1 {
      margin: 0px;
      padding: 0 30px 0 30px;
      font-size: 90px;
    }
  }

  @media (min-width: 1920px) {
    align-items: flex-start;
    margin: 95px 0 0 0;

    h1 {
      margin: 0px;
      padding: 0 30px 0 330px;
      font-size: 90px;
    }
  }
`;
