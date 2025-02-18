import { useState, useEffect } from "react";
import "../styles/Form.css";

function Form() {
  const [number, setNumber] = useState(100);
  const [algorithm, setAlgorithm] = useState("bubbleSort");
  const [data, setData] = useState([]);

  function handleCountChange(e) {
    setNumber(e.target.value);
  }

  function handleAlgorithmChange(e) {
    setAlgorithm(e.target.value);
  }

  function generateSample(number) {
    const newData = [];
    let dataCounter = 0;
    let randomElement;
    while (dataCounter < number) {
      randomElement = Math.floor(Math.random() * number + 1);
      if (!newData.includes(randomElement)) {
        newData[dataCounter] = randomElement;
        dataCounter++;
      }
    }
  }

  useEffect(() => {
    generateSample(100);
  }, []);

  return (
    <>
      <div>
        <select
          name="sortingAlgorithm"
          id="sortingAlgorithm"
          className="formElement"
          onChange={handleAlgorithmChange}
        >
          <option value="bubbleSort">Bubble Sort</option>
          <option value="selectionSort">Selection Sort</option>
          <option value="insertionSort">Insertion Sort</option>
          <option value="cocktailShakerSort">Cocktail Shaker Sort</option>
        </select>
        <input
          id="count"
          placeholder="Array Size"
          className="formElement"
          autoComplete="off"
          value={number}
          onChange={handleCountChange}
        />
        <button
          className="formElement"
          onClick={() => generateSample(number)}
          id="generateButton"
        >
          Generate Sample ↻
        </button>
      </div>
    </>
  );
}

export default Form;
