import React from "react";
import "./HomeComponent.css";

const HomeComponent = () => {
  return (
    <div className="parent_home">
      <div className="card">
        <h2>Earning Ratio</h2>
        <div className="sub_cart">
          <div className="C_part1">
            <img
              src="https://image.flaticon.com/icons/png/512/809/809460.png"
              className="image"
            />
          </div>
          <div className="C_part1">
            <h2>1.7M</h2>
          </div>
          <div className="C_part1"> <span className="percent"> -12%</span> less</div>
        </div>
      </div>
      <div className="card">
        <h2>Product selling Ratio</h2>
        <div className="sub_cart">
          <div className="C_part1">
            <img
              src="https://image.flaticon.com/icons/png/512/3043/3043500.png"
              className="image"
            />
          </div>
          <div className="C_part1">
            <h2>1.7M</h2>
          </div>
          <div className="C_part1">
             <span className="percent"> -12%</span> less
              </div>
        </div>
      </div>
      <div className="card">
        <h2>User Ratio</h2>
        <div className="sub_cart">
          <div className="C_part1">
            <img
              src="https://image.flaticon.com/icons/png/512/3703/3703300.png"
              className="image"
            />
          </div>
          <div className="C_part1">
            <h2>1.7M</h2>
          </div>
          <div className="C_part1"> <span className="percent"> -12%</span> less</div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
