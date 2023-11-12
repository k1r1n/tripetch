import { Children, useState, useRef, useLayoutEffect } from "react";
import { Content } from "../Content";
import { Container, Control, Dot } from "./styles";
import { colors } from "../../constants/color";

export const Carousel = ({ children, className }) => {
  const containerRef = useRef();
  const [state, setState] = useState(0);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const updateDimension = () => {
      console.log("updateDimension");
      setScreenSize(containerRef?.current?.offsetWidth);
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  const onClick = (index) => setState(index);

  return (
    <Container ref={containerRef}>
      {screenSize > 0 && screenSize < 768
        ? Children.map(
            children,
            (child, index) =>
              index === state && (
                <Content
                  className={className}
                  title={child.props.title}
                  number={child.props.number}
                  description={child.props.description}
                  style={{
                    backgroundColor: colors.gray,
                  }}
                />
              )
          )
        : Children.map(children, (child) => child)}

      <Control>
        {Children?.map(children, (_, index) => (
          <Dot
            key={index}
            isActive={state === index}
            onClick={() => onClick(index)}
          />
        ))}
      </Control>
    </Container>
  );
};
