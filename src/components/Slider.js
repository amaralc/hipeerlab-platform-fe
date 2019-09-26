import React, { useState } from "react";

import iconLaser from "../img/icon_laser.png";
import iconMachining from "../img/icon_machining.png";
import iconGrinding from "../img/icon_grinding.png";

import { Carousel, Image } from "react-bootstrap";

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel
      activeIndex={index}
      direction={direction}
      onSelect={handleSelect}
      style={carStyle}
    >
      <Carousel.Item>
        <Carousel.Caption>
          <h5>Laser Processing</h5>
          <p>Description</p>
        </Carousel.Caption>
        <Image src={iconLaser} alt="Laser slide" style={imgStyle} />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h5>Machining</h5>
          <p>Description</p>
        </Carousel.Caption>
        <Image src={iconMachining} alt="Machining slide" style={imgStyle} />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h5>Grinding</h5>
          <p>Description</p>
        </Carousel.Caption>
        <Image src={iconGrinding} alt="Grinding slide" style={imgStyle} />
      </Carousel.Item>
    </Carousel>
  );
}
const carStyle = {
  backgroundColor: "var(--lmp-dark-blue)",
  textAlign: "center",
  height: "20rem",
  marginBottom: "2rem"
};

const imgStyle = {
  height: "15rem",
  padding: "1rem",
  marginBottom: "6.3rem"
};

// export default function Slider() {
//   return (
//     <div
//       id="carouselExampleIndicators"
//       className="carousel slide mb-5 pt-5 pb-5"
//       data-ride="carousel"
//     >
//       <ol className="carousel-indicators">
//         <li
//           data-target="#carouselExampleIndicators"
//           data-slide-to="0"
//           className="active"
//         ></li>
//         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//       </ol>
//       <div className="carousel-inner">
//         <div className="carousel-item active">
//           <img className="img-fluid" src={iconLaser} alt="First slide" />
//           <div className="container carousel-caption d-none d-md-block">
//             <a href="">
//               <h5>Laser Processing</h5>
//             </a>
//             <p>Description</p>
//           </div>
//         </div>
//         <div className="carousel-item">
//           <img className="img-fluid" src={iconMachining} alt="Second slide" />
//           <div className="container carousel-caption d-none d-md-block">
//             <a href="">
//               <h5>Machining</h5>
//             </a>
//             <p>Description</p>
//           </div>
//         </div>
//         <div className="carousel-item">
//           <img className="img-fluid" src={iconGrinding} alt="Third slide" />
//           <div className="container carousel-caption d-none d-md-block">
//             <a href="">
//               <h5>Grinding</h5>
//             </a>
//             <p>Description</p>
//           </div>
//         </div>
//       </div>
//       <a
//         className="carousel-control-prev"
//         href="#carouselExampleIndicators"
//         role="button"
//         data-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="sr-only">Previous</span>
//       </a>
//       <a
//         className="carousel-control-next"
//         href="#carouselExampleIndicators"
//         role="button"
//         data-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="sr-only">Next</span>
//       </a>
//     </div>
//   );
// }
