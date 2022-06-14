export const htmlStr = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link href="css/styles.css" rel="stylesheet" />
      <script type="module" src="src/script.js" defer></script>
      <title>Calculator</title>
    </head>
    <body>
      <div class="calculator-grid">
        <div class="output">
          <div class="history">
            <div data-secondary-operand class="secondary-operand"></div>
            <div data-operation class="operator"></div>
          </div>
          <div data-primary-operand class="primary-operand">0</div>
        </div>
        <button data-all-clear class="span-two">AC</button>
        <button data-delete>DEL</button>
        <button data-operation data-operator>÷</button>
        <button data-number>1</button>
        <button data-number>2</button>
        <button data-number>3</button>
        <button data-operation data-operator>*</button>
        <button data-number>4</button>
        <button data-number>5</button>
        <button data-number>6</button>
        <button data-operation data-operator>+</button>
        <button data-number>7</button>
        <button data-number>8</button>
        <button data-number>9</button>
        <button data-operation data-operator>-</button>
        <button data-number>.</button>
        <button data-number>0</button>
        <button data-equals class="span-two">=</button>
      </div>
    </body>
  </html>
`;