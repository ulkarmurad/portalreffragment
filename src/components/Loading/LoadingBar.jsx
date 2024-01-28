import './index.css'



export default function Loading({borderColor="black",width="50px", height="50px"}){

    const handleToggle = (event) => {
        console.log(event)
        event.target.classList.toggle('active')
    }

    return(
        <div className="loader" style={{width, height}} onClick={handleToggle}>
        </div>
    )
}