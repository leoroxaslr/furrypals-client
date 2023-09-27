import React from "react";
import item1 from "../../assets/images/item1.jpeg";
import item2 from "../../assets/images/item2.jpeg";
import item3 from "../../assets/images/item3.jpeg";
import item4 from "../../assets/images/item4.jpeg";
import item5 from "../../assets/images/item 5.jpeg";

const Home = () => {
  return (
    <>
      <div className="h-96 carousel carousel-vertical rounded-box">
        <div className="carousel-item h-full">
          <img src={item1} />
        </div>
        <div className="carousel-item h-full">
          <img src={item2} />
        </div>
        <div className="carousel-item h-full">
          <img src={item3} />
        </div>
        <div className="carousel-item h-full">
          <img src={item4} />
        </div>
        <div className="carousel-item h-full">
          <img src={item5} />
        </div>
        <div className="carousel-item h-full">
          <img src={item1} />
        </div>
      </div>
    </>
  );
};

export default Home;
