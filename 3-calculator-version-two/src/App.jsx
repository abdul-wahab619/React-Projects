import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [calval, setVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setVal("");
    } else if (buttonText === "=") {
      const result = eval(calval);
      setVal(result);
    } else {
      const newValue = calval + buttonText;
      setVal(newValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calval} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
