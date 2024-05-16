import React, { useState } from 'react';

const Contact = () => {
    const [message, setMessage] = useState('');

    const Admin = () => {
        return <p>Welcome Admin!!!</p>;
    };

    const User = () => {
        return <p>Welcome User!!!</p>;
    };
    
    const UpdateData = () => {
        const welcomeMessage = (document.getElementById("userName").value) === "Snigdha" ? <Admin /> : <User />;
        setMessage(welcomeMessage);
    };   

    return (
        <>
            <div className="Contact">
                <h1>{message}</h1>
                <label>Please Enter Your Username</label>
                <input type="text"  id="userName" required/>
                <button onClick={UpdateData}>Click Here</button>
            </div>
        </>
    );
};

export default Contact;
