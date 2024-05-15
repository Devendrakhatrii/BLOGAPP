const Contact = () => {
    return <>Contact Us Page;
    <div className="container">
        <h1>Login</h1>
        <form>
            <div className="username">
            <input type="text" placeholder="Username" name="" id="" required />
            </div>
            <div className="password">
            <input type="password" placeholder="Password" name="" id="" required/>
            </div>
            <div className="rememberPw">
            <label><input type="checkbox" name="" id="" />Remember me</label>
            <a href="#">Forgot Password</a>
            </div>
            
            

            <button type="submit">Login</button>
        </form>
    </div>
    </>
};
export default Contact;