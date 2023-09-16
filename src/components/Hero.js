import React, { useState } from "react";
import "./Hero.css";
import logo from "../assets/logo.jpg";

const Hero = () => {
  const [boxColors, setBoxColors] = useState(Array(9).fill(false));
  const [clickOrder, setClickOrder] = useState([]); // Stack to keep track of click order
  const [restoring, setRestoring] = useState(false);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleBoxClick = async (index) => {
    if (restoring) return; // Prevent clicking while restoring

    // Create a copy of the current boxColors array
    const newBoxColors = [...boxColors];

    // Toggle the clicked state for the clicked box
    newBoxColors[index] = !newBoxColors[index];

    // Add or remove the index from the clickOrder stack
    if (newBoxColors[index]) {
      setClickOrder((prevClickOrder) => [...prevClickOrder, index]);
    } else {
      setClickOrder((prevClickOrder) =>
        prevClickOrder.filter((item) => item !== index)
      );
    }

    // If the last box is clicked, reset the color of boxes in the same order with a delay
    if (index === 8) {
      setRestoring(true);
      for (const clickedIndex of clickOrder) {
        newBoxColors[clickedIndex] = false;
        setBoxColors([...newBoxColors]);
        await delay(300); // Wait for 1 second before restoring the next box
      }
      setRestoring(false);
      setClickOrder([]); // Clear the click order stack
    }

    // Update the state with the new array of box colors
    setBoxColors(newBoxColors);
  };

  return (
    <div className="HeroContainer">
      <div className="heroSection">
        <div className="card first"></div>
        <div className="card second">
          <img src={logo} alt="Logo of Ecell Department" />
        </div>
        <div className="card third">
          {boxColors.map((isClicked, index) => (
            <div
              key={index}
              className={`box ${isClicked ? "changeColor" : "originalColor"}`}
              onClick={() => handleBoxClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
