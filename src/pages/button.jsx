import {useState} from 'react'

const Button = () => {
    const [person, setPerson] = useState('Snigdha'); 
    const[color,setColor] = useState("red")
  return (

    <div>
        person: {person}
        <input type="text" placeholder='Enter your Name' id ="username" required />
        <button onClick = {()=>setPerson(document.getElementById('username').value)}>Change</button>
        Color : {color}
        <input type="text" placeholder="Enter you color" id="color" />
        <button onClick = {()=>setColor(document.getElementById('color').value)} >Color</button>
        
    </div>
  )
}

export default Button;