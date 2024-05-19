import {useState} from 'react'

const Button = () => {
    const [car, setCar] = useState({
        name: "bmw",
        model: "black",
        modelYear: 2012,
    }); 
    const updateColor = () => {
        setCar((prev) => {
            return {...prev, modelYear: 2010}
        })
    }
  return (

    <div>
     {car.name}
     <button onClick = {() => setCar((prev) => {
        return {...prev, name: "BMW"};
     })}>Change Name</button>
    {car.modelYear}
     <button onClick = {() => updateColor()}>Change</button>
    </div>
  )
}

export default Button;