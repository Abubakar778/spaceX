import React from "react";
import { Link } from "react-router-dom";
const HomeScreen = () => {
  const resources = [
    {
      name: "Rockets",
      url: "/rockets",
      img: "images/rockets.jpg",
    },
    {
      name: "Dragons",
      url: "/dragons",
      img: "images/dragons.jpg",
    },
    {
      name: "Launches",
      url: "/launches",
      img: "images/launches.png",
    },
    {
      name: "Landpads",
      url: "/landpads",
      img: "images/landPad.jpg",
    },
    {
      name: "Launchpads",
      url: "/launchpads",
      img: "images/lauchPad.jpg",
    },
    {
      name: "Ships",
      url: "/ships",
      img: "images/ships.jpg",
    },
  ];
  return (
    <div className="row">
      {resources.map((res, index) => (
        <div className="col-md-4 my-3 " key={index}>
          <Link to={res.url}>
            <div className=" position-relative text-center img-height overflow-hidden">
              <img src={res.img} alt="Source" className=" w-100 h-100  " />
              <div className="position-absolute top-50 start-50 translate-middle fw-bolder fs-2">
                {res.name}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomeScreen;
