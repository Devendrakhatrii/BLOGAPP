import {useState} from 'react'

const Button = () => {
    const [car, setCar] = useState({
        name: "bmw",
        model: "black",
        modelYear: 2012,
    }); 
    const [cars,setCars] = useState(["tesla-X", "Nexon", "neta v"]);


    const updateColor = () => {
        setCar((prev) => {
            return {...prev, modelYear: 2010}
        })
    }
    const updateCars = () => {
        setCars((cars) =>{
            cars[1] = "TATA NEXON"
            return [...cars];
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



     <hr/>



     {cars.length>0 && 
     cars.map((car) => {
    return <li key = {car}>{car}</li>
  }
    )}
    <button onClick = {updateCars} >Change nexon</button>
    </div>
  )
}

export default Button;