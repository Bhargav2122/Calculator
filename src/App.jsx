import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const onhandleClick = (value) => {
    
      setInput((prevalue) => prevalue + value);
    
  }
  const onEvaluate = () => {
    try {
      const sanitizedInput = input.replace(/\b0+(?=\d)/g, '');
      setInput(eval(sanitizedInput).toString());
    }
    catch (error) {
      setInput('Syntax Error');
    }
  };
  
  const onClear = () => {
    setInput('');
  }
  const onDelete = () => {
    setInput( (prevalue) => prevalue.slice(0,-1));
  }

  return (
     <div className="calci">
       <div className="calculator-board">
        <div className="text-box">
          <input type="text" value={input} readOnly />
        </div>
        <div className="button-row">
          <button onClick={onClear}>C</button>
          <button onClick={onDelete}>D</button>
          <button onClick={() => {onhandleClick('/')}}>/</button>
          <button onClick={() => {onhandleClick('%')}}>%</button>
          <button onClick={() => {onhandleClick('7')}}>7</button>
          <button onClick={() => {onhandleClick('8')}}>8</button>
          <button onClick={() => {onhandleClick('9')}}>9</button>
          <button onClick={() => {onhandleClick('+')}}>+</button>
          <button onClick={() => {onhandleClick('4')}}>4</button>
          <button onClick={() => {onhandleClick('5')}}>5</button>
          <button onClick={() => {onhandleClick('6')}}>6</button>
          <button onClick={() => {onhandleClick('-')}}>-</button>
          <button onClick={() => {onhandleClick('1')}}>1</button>
          <button onClick={() => {onhandleClick('2')}}>2</button>
          <button onClick={() => {onhandleClick('3')}}>3</button>
          <button onClick={() => {onhandleClick('*')}}>*</button>
          <button onClick={() => {onhandleClick('0')}}>0</button>
          <button onClick={() => {onhandleClick('00')}}>00</button>
          <button onClick={() => {onhandleClick('.')}}>.</button>
          <button className='equals' onClick={onEvaluate}>=</button>
         </div>
      </div>
     </div>
  )
}

export default App
