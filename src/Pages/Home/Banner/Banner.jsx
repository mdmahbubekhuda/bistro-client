import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css";

// slider images
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";
import { useRef } from "react";

const Banner = () => {
  const isLargeDevice = useRef(window.innerWidth >= 960 ? true : false);

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <Carousel
      autoPlay={true}
      interval={2000}
      infiniteLoop={true}
      showStatus={false}
      stopOnHover={false}
      showThumbs={isLargeDevice.current}
      axis={isLargeDevice.current ? "horizontal" : "vertical"}
      showArrows={isLargeDevice.current}
      showIndicators={isLargeDevice.current}
    >
      {images.map((img) => (
        <div key={img}>
          <img src={img} />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
