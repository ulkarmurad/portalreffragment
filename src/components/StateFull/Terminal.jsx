import EndPoint from "./EndPoint";
import PostPack from "./PostPack";
import Lambert from "../../assets/lambert.jpg";
import { useState, useEffect } from "react";


export default function Terminal() {
    const [state, setState] = useState({ eded: 1, users: [], userID: null, cards: [] })


    useEffect(() => {
        if(!state.cards.length){
            downloadData()
        }
        fetchCard()
        return
    },[state.userID])

    function handleClick() {
        setState((prev) => ({ ...prev, eded: prev.eded + 1 }))
        console.log(state.eded)
    }

    function removeElement(id) {
        setState((prev) => ({ ...prev, userID: id }))
    }

    async function downloadData() {
        const data = await fetch("https://fakestoreapi.com/users")
        const response = await data.json()
        setState((prev) => ({ ...prev, users: response }))

    }
    async function fetchCard() {
        if (state.userID) {
            const data = await fetch("https://fakestoreapi.com/carts")
            const response = await data.json()
            const filtered = response.filter((el) => el.userId == state.userID).map(el => el.products).flat()
            setState((prev) => ({ ...prev, cards: filtered }))
        }

    }
    return (
        <>
            {state.users.map((el) => {
                return (
                    <div style={{ border: "1px solid green" }} key={el.id} onClick={() => removeElement(el.id)}>
                        <p>{el.id}</p>
                        <p>{el.email}</p>
                        {el.id == state.userID ? <p> Card length {state.cards.length}</p> : null}
                    </div>
                )
            })}
        </>
    )
}