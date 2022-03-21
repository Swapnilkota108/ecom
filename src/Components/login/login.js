


function LogIn() {

    return <form className="form" action="user-details">
        <label for="fname">UserName</label>
        <input type="text" name="firstName" className="form-input" placeholder="Username.." />

        <label for="password">Password</label>
        <input type="text" name="lastName" className="form-input" placeholder="Password.." />


        <button className="form-input btn-form" type="submit" value="Submit">Submit</button>
    </form>

}


export { LogIn };