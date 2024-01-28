
import Company from "./Company";
import Data from "./statistics.json";

function fillData(){
    return [
        {
            "Company": "Azexport",
            "id": 1,
            "Shares": 1200,
            "Currency": "$"
        },
        {
            "Company": "Mars",
            "id": 2,
            "Shares": 5666,
            "Currency": "$"
        },
        {
            "Company": "Travel INc",
            "id": 3,
            "Shares": 8966,
            "Currency": "$"
        }, {
            "Company": "PLim",
            "id": 4,
            "Shares": 3666,
            "Currency": "$"
        },
        {
            "Company": "Baker Tilly",
            "id": 5,
            "Shares": 46555,
            "Currency": "$"
        }
    ]
}

export default function List(){
    
    return (
    <div>
        {Data.map(el => <Company key={el.id} {...el}/>)}
    </div>
    )
}