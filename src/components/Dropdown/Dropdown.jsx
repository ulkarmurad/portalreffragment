import { useState } from 'react'
import './index.css'

[{value: "blue"}]
export default function Dropdown({options=['blue', 'green', 'red', 'yellow']}){
    const [current, setCurrent] = useState(null)
    const [toggle, setToggle] = useState(false)
    return (
       <>
        <div className='uiselect' onClick={() => setToggle((prev) => prev = !prev )}>
            <p className='header'>{current ?? "Select color"}</p>
        </div>
         <div className='uioption' style={{display: (toggle? "block": 'none')}}>
         {options.map(el => <p onClick={() => {setCurrent(el),setToggle((prev) => prev = !prev )}}>{el}</p>)}
        </div></>
    )
}