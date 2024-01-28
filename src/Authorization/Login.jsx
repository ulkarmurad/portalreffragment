import { useEffect, useState, useRef } from "react";
import "./login.css"

export default function Login() {
    const[show, setShow]=useState(false)
    const [touched, setTouched] = useState({username: ''})
    const [form, setForm] = useState({username: ''})
    const inputRef = useRef(null)
    const checkBox = () => {
        let attr = inputRef.current.getAttribute('type')
        if(attr == 'password'){
            inputRef.current.setAttribute('type','text')
        }else{
            inputRef.current.setAttribute('type','password')
        }
    }
    // ref={inputRef}
    useEffect(() => {
        console.log(touched)
    })

    const handleTouched = (e) => {
        setTouched((prev) => ({...prev, [e.target.name]: true}))
        setForm((prev) => ({...prev, [e.target.name]: e.target.value}))
    }
    return (
        <div>
            <form className="form_field">
                <h1>Login</h1>
                <label htmlFor="username">Username</label>
                <input value={form.username} onChange={handleTouched} type="text" name='username' id='username' placeholder="Username" />
                <label htmlFor="passwor">Password</label>
                <input  ref={inputRef} type={"password"}  name="password" id="password" placeholder="Password" />
                {/* <input type={show ? "text" : "password"}  name="password" id="password" placeholder="Password" /> */}
                    <div style={{display:" flex"}}>
                    {/* <input type="checkbox" onClick={() => setShow((prev) => !prev)}/> */}
                    <input type="checkbox" onClick={() =>checkBox()}/>
                <span>Show Passowrd</span>
                </div>
                <button type="submit" >Login</button>
            </form>
        </div>
    )
}