import { Children, useState, useRef, useLayoutEffect } from "react";
import { Content } from "../Content";
import { Container, Control, Dot } from "./styles";
import { colors } from "../../constants/color";

export const Carousel = ({ children, className }) => {
  const containerRef = useRef();
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [currentX, setCurrentX] = useState(null);
  const item = Children.map(children, (child) => child);

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

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    setCurrentX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const distance = currentX - startX;
    const threshold = 100;

    if (distance > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (distance < -threshold && currentIndex < item.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Container ref={containerRef}>
      {screenSize > 0 && screenSize < 768 ? (
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Content
            className={className}
            title={item[currentIndex].props.title}
            number={item[currentIndex].props.number}
            description={item[currentIndex].props.description}
            style={{
              backgroundColor: colors.gray,
            }}
          />
        </div>
      ) : (
        Children.map(children, (child) => child)
      )}
      <Control>
        {item?.map((_, index) => (
          <Dot
            key={index}
            isActive={currentIndex === index}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Control>
    </Container>
  );
};
