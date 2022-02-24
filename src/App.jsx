import react from "react";
import reactDom from "react-dom";

import "./styles.css";
import { useState } from "react";

const App = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  // função para atualizar a expressão a se calculada
  const updateCalc = (value) => {
    if (
      // se o value informado for um operador e o calc estiver vazio
      (ops.includes(value) && calc === "") || // ou
      //se o value informado for um operador e último valor informado, contido em calc também for um operador
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      // sai da função - não permite que o primeiro valor digitado seja um operador e nem que dois operadores sejam digitados em sequência
      return;
    }

    setCalc(calc + value);

    // quando o último informado não for um valor - faça o cálculo do resultado
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  // função para mostrar o resultado final ao clicar no botão '='
  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  // função para apagar o último elemento digitado no display
  const deleteLast = () => {
    // se não houver valor nenhum -> sai da função
    if (calc == "") {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  };

  const erase = () => {
    setCalc("");
    setResult("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result}) </span> : ""}
          {calc || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={() => deleteLast()}>DEL</button>
          <button onClick={() => erase()}>C</button>
        </div>

        <div className="digits">
          <button onClick={() => updateCalc("1")}>1</button>
          <button onClick={() => updateCalc("2")}>2</button>
          <button onClick={() => updateCalc("3")}>3</button>
          <button onClick={() => updateCalc("4")}>4</button>
          <button onClick={() => updateCalc("5")}>5</button>
          <button onClick={() => updateCalc("6")}>6</button>
          <button onClick={() => updateCalc("7")}>7</button>
          <button onClick={() => updateCalc("8")}>8</button>
          <button onClick={() => updateCalc("9")}>9</button>
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={() => calculate()}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
