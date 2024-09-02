import Carousel from 'react-bootstrap/Carousel';
import villaImage from "./villa.jpg";
import flatImage from "./flat.jpg";
import flat2Image from "./flat 2.jpeg";

function Banner() {
  const carouselItemStyle = {
    maxHeight: '500px', // Set maximum height to ensure images are uniform in height
    overflow: 'hidden', // Ensure that any overflowing content is hidden
  };

  const imageStyle = {
    width: '100%',       // Make sure the image spans the full width of the container
    height: '100%',      // Make sure the image spans the full height of the container
    objectFit: 'cover',  // Cover the entire area without stretching
  };

  return (
    <Carousel>
      <Carousel.Item style={carouselItemStyle}>
        <img 
          src={villaImage}
          alt='First slide' 
          style={imageStyle}
          className="d-block"
        />
        <Carousel.Caption>
          {/* Optional caption can be included here */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={carouselItemStyle}>
        <img 
          src={flatImage} 
          alt='Second slide' 
          style={imageStyle}
          className="d-block"
        />
        <Carousel.Caption>
          {/* Optional caption can be included here */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={carouselItemStyle}>
        <img 
          src={flat2Image}   
          alt='Third slide' 
          style={imageStyle}
          className="d-block"
        />
        <Carousel.Caption>
          {/* Optional caption can be included here */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
