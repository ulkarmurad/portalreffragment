



export default function Signup() {
    return (
        <div>
            <form className="" >

                <label htmlFor="Name">Username</label>
                <input type="text" placeholder="username"  id="name" />
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="email"  id="email" />
                <label htmlFor="Pass">Password</label>
                <input type="password" placeholder="passws" id="pass" />
            </form>
        </div>
    )
}