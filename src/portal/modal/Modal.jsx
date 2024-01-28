import "./modal.css"


export function Modal({close}){
    return(
        <div className="modal">
            <p>Welcome Modal Text</p>
            <button onClick={() => close()}>Close</button>
        </div>
    )
}