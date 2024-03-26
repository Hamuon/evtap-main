"use client"
import { useState, useEffect, useRef } from "react";

const PriceRangeInput = ({ initialMin, initialMax, min, max, step, priceCap, label }) => {
    const progressRef = useRef(null);
    const [minValue, setMinValue] = useState(initialMin);
    const [maxValue, setMaxValue] = useState(initialMax);
    const handleMin = (e) => {
        if (maxValue - minValue >= priceCap && maxValue <= max) {
            if (parseInt(e.target.value) > parseInt(maxValue)) {
            } else {
                setMinValue(parseInt(e.target.value));
            }
        } else {
            if (parseInt(e.target.value) < minValue) {
                setMinValue(parseInt(e.target.value));
            }
        }
    };

    const handleMax = (e) => {
        if (maxValue - minValue >= priceCap && maxValue <= max) {
            if (parseInt(e.target.value) < parseInt(minValue)) {
            } else {
                setMaxValue(parseInt(e.target.value));
            }
        } else {
            if (parseInt(e.target.value) > maxValue) {
                setMaxValue(parseInt(e.target.value));
            }
        }
    };

    useEffect(() => {
        progressRef.current.style.left = (minValue / max) * step + "%";
        progressRef.current.style.right = step - (maxValue / max) * step + "%";
    }, [minValue, maxValue, max, step]);

    return (
        <div className="w-full grid place-items-center bg-green-300">
            <div className="flex flex-col w-full">
                <div className="my-3">{label}</div>
                <div className="flex justify-between items-center mb-6 w-full">
                    <div className="rounded-md">
                        <span className="ml-2 font-semibold">از</span>
                        <input
                            onChange={(e) => setMinValue(e.target.value)}
                            type="text"
                            value={(minValue.toLocaleString("en", { minimumFractionDigits: 0 }))}
                            className="w-24 rounded-md border border-gray-400 p-1"
                        />
                    </div>
                    <div className=" ">
                        <span className="ml-2 font-semibold">تا</span>
                        <input
                            onChange={(e) => setMaxValue(e.target.value)}
                            type="text"
                            value={(maxValue.toLocaleString("en", { minimumFractionDigits: 0 }))}
                            className="w-24 rounded-md border border-gray-400 p-1"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <div className="slider relative h-1 rounded-md bg-gray-300">
                        <div
                            className="progress absolute h-1 bg-green-300 rounded "
                            ref={progressRef}
                        ></div>
                    </div>

                    <div className="range-input relative  ">
                        <input
                            onChange={handleMin}
                            type="range"
                            min={min}
                            step={step}
                            max={max}
                            value={minValue}
                            className="range-min absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
                        />

                        <input
                            onChange={handleMax}
                            type="range"
                            min={min}
                            step={step}
                            max={max}
                            value={maxValue}
                            className="range-max absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceRangeInput;
