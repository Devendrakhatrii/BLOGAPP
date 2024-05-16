import React, { useState } from 'react';

const Contact = () => {
    const [data, newData] = useState('');

    const Admin = () => {
        return <p>Welcome Admin</p>;
    };

    const User = () => {
        return <p>Welcome User!!!</p>;
    };

    const updateData = () => {
        const inputName = document.getElementById("userName").value;
        const welcomeMessage = inputName === "Snigdha" ? <Admin /> : <User />;
        newData(welcomeMessage);
    };  

    return (
        <>
            <div className="Contact">
                <h1>{data}</h1>
                <input type="text" required id="userName" />
                <button onClick={updateData}>Click Here</button>
            </div>
        </>
    );
};

export default Contact;
