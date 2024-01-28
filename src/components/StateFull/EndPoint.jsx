import { useState } from "react"


export default function EndPoint(){
    const [size, setSize] = useState({middle: 0, postfix: 0, prefix: 0, counter: 0})
    const [letter, setLetter] = useState('552')

    // ...prev, counter: (prev.counter + 1 > 15 ) ? 15 : prev.counter + 1))
    return (
        <div style={{border: "1px solid red"}}>
            <p>Endpoint</p>
            <p>{size.counter}</p>
            <button onClick={() => setSize((prev) => ({...prev, counter: (prev.counter + 1 > 15 ) ? 15 : prev.counter + 1}))}>Increase</button>
            <button onClick={() => setSize((prev) => ({...prev, counter: (prev.counter - 1 < 0 ) ? 0 : prev.counter - 1}))}>Decrease</button>
        </div>
    )
}