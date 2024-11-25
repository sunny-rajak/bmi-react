import React, { useMemo, useState } from "react";
import "./App.css";

const App = () => {
    const [weight, setWeight] = useState(50);
    const [height, setHeight] = useState(150);

    const handelWeightChange = (e) => {
        setWeight(e.target.value);
    };

    const handelHeightChange = (e) => {
        setHeight(e.target.value);
    };

    const bmiValue = useMemo(() => {
        const calcHeight = height / 100;

        return (weight / Math.pow(calcHeight, 2)).toFixed(2);
    }, [weight, height]);

    const bmiMessage = useMemo(() => {
        const bmi = parseFloat(bmiValue);
        switch (true) {
            case bmi < 18.5:
                return "You are underweight.";
            case bmi >= 18.5 && bmi < 24.9:
                return "You have a normal weight.";
            case bmi >= 24.9 && bmi < 29.9:
                return "You are overweight.";
            default:
                return "You are obese.";
        }
    }, [bmiValue]);

    return (
        <main>
            <h1>BMI Calculator</h1>
            <div className="input-section">
                <p className="slider-output">Weight: {weight} kg</p>
                <input
                    className="input-slider"
                    type="range"
                    step="1"
                    min="20"
                    max="200"
                    value={weight}
                    onChange={handelWeightChange}
                />
                <p className="slider-output">Height: {height}cm</p>
                <input
                    className="input-slider"
                    type="range"
                    step="1"
                    min="100"
                    max="250"
                    value={height}
                    onChange={handelHeightChange}
                />
            </div>
            <div className="output-section">
                <p>Your BMI is</p>
                <p className="output-bmi">{bmiValue}</p>
                <p className="bmi-message">{bmiMessage}</p>
            </div>
        </main>
    );
};

export default App;
