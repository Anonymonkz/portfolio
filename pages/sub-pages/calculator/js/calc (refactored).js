const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calc-keys");
const display = document.querySelector(".calc-disp");
const createResultString = (key, displayedNum, state) => {};

keys.addEventListener("click", (e) => {
  const resultString = createResultString(
    (display.textContent = keyContent),
    (display.textContent = displayedNum + keyContent),
    (display.textContent = displayedNum + "."),
    (display.textContent = "0"),
    (display.textContent = calcValue)
  );
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    Array.from(key.parentNode.children).forEach((k) =>
      k.classList.remove("is-depressed")
    );

    const calculate = (n1, operator, n2) => {
      const firstNum = parseFloat(n1);
      const secondNum = parseFloat(n2);

      if (operator === "add") return firstNum + secondNum;
      if (operator === "subtract") return firstNum - secondNum;
      if (operator === "multiply") return firstNum * secondNum;
      if (operator === "divide") return firstNum / secondNum;
    };

    // if (!action) {
    //     console.log('number key!')
    // }

    // if (
    //     action === 'add' ||
    //     action === 'subtract' ||
    //     action === 'multiply' ||
    //     action === 'divide'
    // ) {
    //     console.log('operator key!')
    // }

    // if (action === 'decimal') {
    //     console.log('decimal key!')
    // }

    // if (action === 'clear') {
    //     console.log('clear key!')
    // }

    // if (action === 'calculate') {
    //     console.log('equal key')
    // }

    const createResultString = () => {
      // Variables required are:
      // 1. keyContent
      // 2. displayedNum
      // 3. previousKeyType
      // 4. action
      // 5. calculator.dataset.firstValue
      // 6. calculator.dataset.operator
      // 7. calculator.dataset.modValue
      if (!action) {
        return displayedNum === "0" ||
          previousKeyType === "operator" ||
          previousKeyType === "calculate"
          ? keyContent
          : displayedNum + keyContent;
      }
    };

    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;

      return (firstValue && operator && previousKeyType !== "operator") ||
        previousKeyType === "calculate"
        ? calculate(firstValue, operator, secondValue)
        : displayedNum;
    }

    if (action === "decimal") {
      // console.log('decimal key!')
      if (!displayedNum.includes(".")) return displayedNum + ".";

      if (previousKeyType === "operator") return "0.";

      return displayedNum;
    }

    if (action === "clear") {
      // console.log('clear key!')
      // const clearButton = calculator.querySelector('[data-action=clear]')
      // clearButton.textContent = 'CE'
      if (key.textContent === "AC") {
        calculator.dataset.firstValue = "";
        calculator.dataset.modValue = "";
        calculator.dataset.operator = "";
        calculator.dataset.previousKeyType = "";
      } else {
        key.textContent = "AC";
      }

      return 0;
    }

    if (action !== "clear") {
      const clearButton = calculator.querySelector("[data-action=clear]");
      clearButton.textContent = "CE";
    }

    if (action === "calculate") {
      let firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      if (firstValue) {
        if (previousKeyType === "calculate") {
          firstValue = displayedNum;
          secondValue = calculator.dataset.modValue;
        }
        display.textContent = calculate(firstValue, operator, secondValue);
      }
      calculator.dataset.modValue = secondValue;
      calculator.dataset.previousKeyType = "calculate";
    }
  }
});
