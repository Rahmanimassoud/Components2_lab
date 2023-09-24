import React, { useState } from "react";
import './style.css'

const Component2 = () => {

    const [currentColor, setCurrentColor] = useState("")



    const handleColorChange = (e) => {
        setCurrentColor(e.target.value)
    }



    return (

        <div>
            <input type="radio" name="color" value={"red"} checked={currentColor === "red"} onChange={handleColorChange}/> Red
            <input type="radio" name="color" value={"green"} checked={currentColor === "green"} onChange={handleColorChange}/> Green
            <input type="radio" name="color" value={"yellow"} checked={currentColor === "yellow"} onChange={handleColorChange}/> Yellow
            <input type="radio" name="color" value={"black"} checked={currentColor === "black"} onChange={handleColorChange}/> Black
            <input type="radio" name="color" value={"teal"} checked={currentColor === "teal"} onChange={handleColorChange}/> Teal

            <div className={`color-box ${currentColor}-color`} > you selected:{currentColor}
            </div>
        </div>
    )
};

export default Component2;
