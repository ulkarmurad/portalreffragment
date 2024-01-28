
export default function Company({Company, id, Shares, Currency}){
    // const {Company, id, Shares, Currency} = elem
    return (
        <div style={{border: "1px solid green"}}>
            <p>{Company}</p>
            <p>{id}</p>
            <p style={{color: (Shares > 4000? "green" : "red")}}>{Shares}</p>
            <p>{Currency}</p>
        </div>
        
    )
}