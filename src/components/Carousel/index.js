import React from "react";

import iconLaser from "../img/icon_laser.png"
import iconMachining from "../img/icon_machining.png"
import iconGrinding from "../img/icon_grinding.png"

export default function Carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide mb-5 pt-5 pb-5" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="img-fluid" src={iconLaser} alt="First slide" />
                    <div className="container carousel-caption d-none d-md-block">
                        <a href=""><h5>Laser Processing</h5></a>
                        <p>Description</p>                        
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="img-fluid" src={iconMachining} alt="Second slide" />
                    <div className="container carousel-caption d-none d-md-block">
                        <a href=""><h5>Machining</h5></a>
                        <p>Description</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="img-fluid" src={iconGrinding} alt="Third slide" />
                    <div className="container carousel-caption d-none d-md-block">
                        <a href=""><h5>Grinding</h5></a>
                        <p>Description</p>                        
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}