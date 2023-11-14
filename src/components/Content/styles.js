import styled from "styled-components";
import { colors } from "../../constants/color";

export const Container = styled.div`
  z-index: -1;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: -webkit-fill-available;

  @media (min-width: 768px) {
    padding: 0px;
  }

  @media (min-width: 1920px) {
    padding: 0px;
  }
`;

export const ContentStyle = styled.div`
  display: flex;
  flex-direction: column;

  .group-number {
    display: flex;
    margin-top: 7px;
    width: 18px;
    height: 22px;
    flex-direction: column;
    justify-content: center;
  }

  .number {
    color: ${(props) => (props.numberColor ? props.numberColor : colors.black)};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
  }

  .line,
  .line-1,
  .line-2 {
    margin-top: 1px;
    width: 16.761px;
    height: 4px;
    border-radius: 2.5px;
    flex-shrink: 0;
    background-color: ${(props) =>
      props.fontColor ? props.fontColor : colors.violet};
  }

  .title {
    gap: 10px;
    color: ${colors.gray_200};
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
  }

  .description {
    color: ${(props) => (props.fontColor ? props.fontColor : colors.black)};
    font-size: 15px;
    font-style: normal;
    line-height: normal;
  }

  @media (min-width: 768px) {
    .group-number {
      display: flex;
      width: 22px;
      height: 30px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 3px;
      margin-top: 6px;
    }

    .title {
      font-size: 36px;
    }

    .number {
      font-size: 18px;
    }

    .description {
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      padding: 0 32px 0 0;
    }

    .line {
      width: 22px;
      height: 5px;
      flex-shrink: 0;
    }
    .line-1 {
      width: 18.584px;
      height: 5px;
      flex-shrink: 0;
    }
    .line-2 {
      width: 19px;
      height: 5px;
      flex-shrink: 0;
    }
  }

  @media (min-width: 1920px) {
    .group-number {
      display: flex;
      width: 22px;
      height: 30px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 3px;
      margin-top: 6px;
    }
    .title {
      font-size: 36px;
    }
    .number {
      font-size: 18px;
    }
    .description {
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      /* padding: 0 32px 0 0; */
      max-width: 717px;
    }
    .line {
      width: 22px;
      height: 5px;
      flex-shrink: 0;
    }
    .line-1 {
      width: 19px;
      height: 5px;
      flex-shrink: 0;
    }
    .line-2 {
      width: 19px;
      height: 5px;
      flex-shrink: 0;
    }
  }
`;

export const TitleStyle = styled.div`
  display: flex;

  @media (min-width: 768px) {
    padding: 0 0 20px 0;
  }

  @media (min-width: 1920px) {
    padding: 0 0 20px 0;
  }
`;
