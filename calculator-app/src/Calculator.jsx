import { useState } from "react";
import { evaluate } from "mathjs";
import "./Calculter.css";
// import { i } from "vite/dist/node/types.d-aGj9QkWt";
function Calculator() {
  const [result, setResult] = useState("");
  const [hasDot, setHasDot] = useState(false);
  const oprators = ["+", "-", "*", "/"];
  function checkInput(text) {
    if (text == "÷") return "/";
    if (text == "×") return "*";
    return text;
  }

  function clickHandler(e) {
    const input = checkInput(e.target.innerText);

    if (input == ".") {
      if (hasDot == true) return;
      else setHasDot(true);
    }
    if (oprators.includes(input)) {
      setHasDot(false);
    }
    setResult(result + input);
  }
  function clearBtn() {
    setResult("");
    setHasDot(false);
  }
  function backSpaceBtn() {
    if (result.endsWith(".")) {
      setHasDot(false);
    }
    setResult(result.slice(0, -1));
  }
  function handelEqual() {
    setResult(String(evaluate(result)));
    setHasDot(false);
  }
  return (
    <div className="container">
      <div className="screen">{result}</div>
      <div className="buttons">
        <button className="color size" onClick={clearBtn}>
          Clear
        </button>
        <button className="color" onClick={backSpaceBtn}>
          C
        </button>
        <button onClick={clickHandler} className="color">
          ÷
        </button>
        <button onClick={clickHandler}>7</button>
        <button onClick={clickHandler}>8</button>
        <button onClick={clickHandler}>9</button>
        <button onClick={clickHandler} className="color">
          ×
        </button>
        <button onClick={clickHandler}>4</button>
        <button onClick={clickHandler}>5</button>
        <button onClick={clickHandler}>6</button>
        <button onClick={clickHandler} className="color">
          -
        </button>
        <button onClick={clickHandler}>1</button>
        <button onClick={clickHandler}>2</button>
        <button onClick={clickHandler}>3</button>
        <button onClick={clickHandler} className="color">
          +
        </button>
        <button onClick={clickHandler}>.</button>
        <button onClick={clickHandler}>0</button>
        <button onClick={handelEqual} className="color size">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
