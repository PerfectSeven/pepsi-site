import React from "react";
import { FaArrowLeft, FaLongArrowAltLeft } from "react-icons/fa";
import Slider from "./components/Slider";

function Page() {
  
  return (
    <>
      <div className="pager">
        <div className="page1">
          <div className="arrow">
            <FaLongArrowAltLeft />
          </div>
          <h1> Pepsi Classic</h1>
        </div>
        <p className="ingredients">
          Carbonated water, High Fructose, Corn Syrup, Caramel Color, Sugar{" "}
          <br />
          Phosphoric Acid, Caffeine, Citric Acid, Natural Flavor
        </p>
        <h2>Nutrition Facts</h2>
        <div className="card-container">
          <div className="cards">
            <div className="card1">
              Amount Per Serving
              <p className="value"> 150cl</p>
              <p className="inner-card1">75%</p>
            </div>
            <div className="card2">
              Total Fat
              <p className="value"> 0g</p>
              <p className="inner-card2">0%</p>
            </div>
            <div className="card3">
              Sodium
              <p className="value"> 30mg</p>
              <p className="inner-card3">1%</p>
            </div>
            <div className="card4">
              Total Carbohydrate
              <p className="value"> 41g</p>
              <p className="inner-card4">14%</p>
            </div>
            <div className="card5">
              Protein
              <p className="value"> 0g</p>
              <p className="inner-card5">0%</p>
            </div>
          </div>
        </div>
        <button className="buy-now">BUY NOW</button>
        <div className="cans">
            <Slider />
          </div>
        
      </div>
    </>
  );
}
export default Page;
