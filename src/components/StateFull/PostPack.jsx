import { useState } from "react"
export default function PostPack(){
    const [counter, setCounter] = useState(0)
    return (
        <div style={{border: "1px solid green"}}>
            <p>Postpack</p>
            <p>{counter}</p>
            <button onClick={() => setCounter((prev) => prev + 1)}>Increase</button>
        </div>
    )
}