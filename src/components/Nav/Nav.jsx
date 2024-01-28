import { useState, useId, useRef, useEffect } from "react"
import './nav.css'



export default function Nav(){

    const navbarList = [{'id': 1, name: "About"},{'id': 2, name: "Settings"},{'id': 3, name: "ProList"},{'id': 4, name: "Connections"}]
    const pElement = useRef(null)
    const [credential, setCredential] = useState({})
    let id = useId()
    const showref = () => console.log(pElement.current.style.background = 'red')
    const [form, setForm] = useState({})
    const handleForm = (input) => {
        setForm((prev) =>({...prev, [input.target.name]:input.target.value}))
        console.log(form)

    }
    useEffect(() => {
        async function fetchuser(){
            let response = await fetch("https://dummyjson.com/users/1")
            let data = await response.json()
            setForm(data)
        }
        fetchuser()
    },[])

    const handleSave = (e) => {
        e.preventDefault()
        console.log(form)
    }

    const [state, setStae] = useState(null)
    return (
        <div className="navbar">
            <form>
                <label>
                    Username
                  <input value={form.username} name='username' onChange={handleForm}/>
                </label>
                <label>
                    Password
                  <input value={form.password} name='password' onChange={handleForm}/>
                </label>
                <label>
                    Email
                  <input value={form.email} name='email' onChange={handleForm}/>
                </label>
                <button type="submit" onClick={(e) => handleSave(e)}>Save </button>
            </form>
            <button onClick={() => console.log(pElement.current.value)}>Click</button>
            {navbarList.map((el) => {
                return <button className="navelement" key={el.id}>{el.name}</button>
            })}
        </div>
    )
}