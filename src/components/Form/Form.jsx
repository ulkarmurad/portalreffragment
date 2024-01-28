import { useEffect, useState } from "react";
import { z } from "zod";
import "./form.css"

function fillForm(){
    return {
        username: "",
        password: "",
        email: "",
        date: ""
    }
}

export default function Form() {
    const [form, setForm] = useState(fillForm())
    const [errors, setErrors] = useState(fillForm())

    const handleChange = (event) => {
        let obj = {
            [event.target.name]: event.target.value
        }
        let form_copy = {...form}
        let payload = {...form_copy, ...obj}        
        setForm(payload)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const userSchema = z.object({
            username: z.string().min(5).max(20),
            password: z.string().min(5).max(20),
            email: z.string().email(),
            date: z.date()
        })
        let results = userSchema.safeParse(form)
        let copy = {}
        let arr = results.error.issues.forEach(el =>{
            copy = {...copy, [el.path[0]]: el.message}
        })
        console.log(copy)
        setErrors(copy)
        // console.log(results.error.issues)
    }

    // useEffect(() => {
    //     console.log(form)
    // })

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Signup Form</legend>
                <label htmlFor="username">
                    Username
                </label>
                <input value={form.username} onChange={handleChange} name="username" type="text" placeholder="enter username" />
                <p className="error">{errors.username}</p>
                <label htmlFor="email">
                    Email
                </label>
                <input value={form.email} onChange={handleChange} name="email" type="email" placeholder="enter email" />
                <p className="error">{errors.email}</p>
                <label htmlFor="password">
                    Password
                </label>
                <input value={form.password} onChange={handleChange} name="password" type="password" placeholder="enter password" />
                <p className="error">{errors.password}</p>
                <label htmlFor="date">
                    Birthdate
                </label>
                <input value={form.date} onChange={handleChange} name="date" type="date" placeholder="enter birthdate" />
                <p className="error">{errors.date}</p>
            </fieldset>
            <button type="submit">Signup</button>
        </form>
    )
}