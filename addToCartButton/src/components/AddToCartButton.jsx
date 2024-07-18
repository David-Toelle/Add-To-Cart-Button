import React, { useState } from "react";
import { ShoppingCart, TShirt } from "phosphor-react";
import "./AddToCartButton.css";

const AddToCartButton = () => {
  const [clicked, setClicked] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleClick = () => {
    setClicked(true);

    // Simulate animation with setTimeout (adjust timings as needed)
    setTimeout(() => {
      document.querySelector(".shirt").classList.add("fall");
      document.querySelector(".cart").classList.add("checked");
    }, 1000);

    setTimeout(() => {
      setAnimationComplete(true); // Signal that initial animation is complete
      setTimeout(() => {
        setClicked(false);
        setAnimationComplete(false); // Reset animation state
        document.querySelector(".shirt").classList.remove("fall");
        document.querySelector(".cart").classList.remove("checked");
      }, 500); // Adjust timing to match your transition times
    }, 3000);
  };

  return (
    <div
      className={`add-to-cart ${clicked ? "clicked" : ""} ${
        animationComplete ? "end-animation" : ""
      }`}
      onClick={handleClick}
    >
      <span>Add to Cart</span>
      <div className="shirt">
        <TShirt size={20} weight="fill" />
      </div>
      <div className="cart">
        <ShoppingCart size={20} weight="fill" />
      </div>
    </div>
  );
};

export default AddToCartButton;
