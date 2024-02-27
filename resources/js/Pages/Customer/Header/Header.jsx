import Carousel from 'react-bootstrap/Carousel';
import gallery05 from '/resources/assets/gallery05_r.png';
import gallery06 from '/resources/assets/gallery06_r.png';
import gallery07 from '/resources/assets/gallery07_r.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeaderLayout() {
  return ( 
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={gallery05} alt="First slide"/>
        <Carousel.Caption className='layoutTransparent'>
          <h3 style={{fontSize:"5vw"}}>All-day Breakfast</h3>
          <p>Price + Menu btn Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img className="d-block w-100" src={gallery06} alt="Second slide"/>
        <Carousel.Caption className='layoutTransparent'>
          <h3 style={{fontSize:"5vw"}}>Soup of the Day</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      
      <Carousel.Item>
        <img className="d-block w-100" src={gallery07} alt="Third slide"/>
        <Carousel.Caption className='layoutTransparent'>
          <h3 style={{fontSize:"5vw"}}>Today's Special</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default HeaderLayout;