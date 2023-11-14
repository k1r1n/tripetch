import { Container, ContentStyle, TitleStyle } from "./styles";

export const Content = ({
  title,
  number,
  description,
  className,
  style,
  fontColor,
  numberColor,
  underline,
}) => (
  <Container className={className} style={style}>
    <ContentStyle fontColor={fontColor} numberColor={numberColor}>
      <TitleStyle className="title">
        <div className="group-number">
          <span className="number">{number}</span>
          <span className={underline ? underline : "line"} />
        </div>
        <span className="title">{title}</span>
      </TitleStyle>
      <div className="description">{description}</div>
    </ContentStyle>
  </Container>
);
