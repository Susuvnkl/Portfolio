import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SlickSlider.module.scss";
import { ReactNode } from "react";

interface SlickSliderProps {
  children: ReactNode;
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, zIndex: "1", display: "absolute", right: "15px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, zIndex: "1", display: "absolute", left: "15px" }}
      onClick={onClick}
    />
  );
}

function SlickSlider(props: SlickSliderProps) {
  const { children } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // customPegging: () => {
    //   return <button>{i + 1}</button>;
    // },
  };
  return (
    <div className={styles.SlickSlider}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default SlickSlider;
