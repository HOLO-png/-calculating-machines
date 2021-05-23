window.onload = function () {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const numStrings = $$('input');
  var inputValues = [];
  var displaVal;

  for (let i = 0; i < numStrings.length; i++) {
    if (numStrings[i].value !== 'C' && numStrings[i].value !== '=') {
      importValue(numStrings[i]);
    }
  }
  function importValue(num) {
    num.onclick = (e) => {
      inputValues.push(e.target.value);
      assignValue(inputValues);
    };
  }
  function printResults(result) {
    numStrings[0].value = result;
  }
  function calculate(displaVal) {
    for (let i = 0; i < displaVal.length; i++) {
      if (
        displaVal[i] === '+' ||
        displaVal[i] === '-' ||
        displaVal[i] === 'x' ||
        displaVal[i] === '/'
      ) {
        beforeVal = displaVal.slice(0, i);
        afterVal = displaVal.slice(i + 1);
        for (let j = 0; j > i; j--) {
          if (
            displaVal[displaVal.length] === '+' ||
            displaVal[displaVal.length] === '-' ||
            displaVal[displaVal.length] === 'x' ||
            displaVal[displaVal.length] === '/'
          ) {
            nextVal = displaVal.slice(displaVal.length + 1);
            console.log(nextVal);
          }
        }
      }
    }
  }
  function assignValue(inputValues) {
    numStrings[0].value = inputValues.join('');
    displaVal = inputValues.join('');
    calculate(displaVal);
  }
  numStrings[15].onclick = function () {
    result = '';
    const x = Number(beforeVal);
    const y = Number(afterVal);
    for (var i = 0; i < inputValues.length; i++) {
      switch (inputValues[i]) {
        case '+':
          result = x + y;
          break;
        case '-':
          result = x - y;
          break;
        case 'x':
          result = x * y;
          break;
        case '/':
          result = x / y;
          break;
      }
      printResults(result);
    }
  };
};
