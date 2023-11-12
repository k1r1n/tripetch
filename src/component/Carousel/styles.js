import styled from "styled-components";
import { colors } from "../../constants/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Control = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  position: absolute;
  bottom: 17px;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1920px) {
    display: none;
  }
`;

export const Dot = styled.div`
  display: flex;
  height: 10px;
  width: 10px;
  background-color: ${(props) =>
    props.isActive ? colors.violet_400 : colors.gray_300};
  border-radius: 50%;
`;
