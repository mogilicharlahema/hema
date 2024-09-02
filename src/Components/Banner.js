import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

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
        <Image 
          src='https://www.preleaseproperty.com/assets/images/blogs_static/top-indian-cities-ranked-based-on-real-estate/image2.jpg' 
          alt='First slide' 
          style={imageStyle}
          className="d-block"
        />
        <Carousel.Caption>
          {/* Optional caption can be included here */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={carouselItemStyle}>
        <Image 
          src='https://www.bricksnwall.com/admin/assets/blog/1715750559House-types-in-india.webp' 
          alt='Second slide' 
          style={imageStyle}
          className="d-block"
        />
        <Carousel.Caption>
          {/* Optional caption can be included here */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={carouselItemStyle}>
        <Image 
          src='https://superadmin.homes247.in/images/stories/1699254990-Types%20of%20Houses%20in%20India.jpeg'   
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
