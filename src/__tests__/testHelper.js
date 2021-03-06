import { Window } from 'happy-dom';
import { init } from '../init';

const window = new Window();
export const { document } = window;

document.body.innerHTML = `
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
`;

export const {
  calculator,
  controlUI,
  clearOperands,
  deleteCharacter,
  getOperatorInput,
  getNumberInput,
  performCalculation,
} = init(document);
