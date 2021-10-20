import React, {useState} from 'react';
import './App.css'

function App () {
    const [count, setCount] = useState(0);

    const countChangeHundlerPlus = () => {
        setCount((prevCount) => {
            return prevCount +1
        })
    }

    const countChangeHundlerMinus = () => {
        setCount((prevCount) => {
            return  prevCount -1
        })
    }

    return (
        <div className='App'>
            <p className='sum'>{count}</p>
            <div onClick={countChangeHundlerPlus}>+</div>
            <div onClick={countChangeHundlerMinus}>-</div>
        </div>
    )
}
export default App;