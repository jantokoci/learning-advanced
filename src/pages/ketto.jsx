/*
#456789 <- HEX Color
rgb(25,45,67) <- RGB Color
*/

import { useEffect, useState } from "react";
import HomeButton from "../components/homebutton";

function ColorPicker() {
  //We got two types of states cause the two type of colors that we have
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  // Randomizator function
  function randomColorUtility(lenght) {
    return Math.floor(Math.random() * lenght);
  }

  // Creating the ranodom hex color from the hex array
  function handleCreateRandomHexColor() {
    // #748374
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    console.log(hexColor);

    setColor(hexColor);
  }

  // Creating the random rgb color, and setting together
  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  //watching if the type of the color changes, and if it does, create a new random value
  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <div className="containerrandomcolor">
        <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
        <HomeButton />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "60px",
            marginTop: "50px",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h1>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h1>
          <h1>{color}</h1>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
