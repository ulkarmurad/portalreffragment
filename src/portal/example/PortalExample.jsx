import { useEffect, useState } from "react";
import { Modal } from "../modal/Modal";
import { createPortal } from "react-dom";


export default function PortalExample() {
    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <button onClick={() => setToggle(true)}>
                Show modal with a portal
            </button>
            {toggle && createPortal(
                <Modal close={() => setToggle(false)} />,document.body
            )}
        </div>
    )
}