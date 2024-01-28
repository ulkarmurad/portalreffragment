import {  useState } from "react";
import { Modal } from "../modal/Modal";


export default function NoportalExample() {
    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <button onClick={() => setToggle(true)}>
                Show modal without a portal
            </button>
            {toggle && (
                <Modal close={() => setToggle(false)} />
            )}
        </div>
    )
}