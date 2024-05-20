import {useState} from 'react'

const Question = () => {
    const countries = [
        {name: "Nepal", cities: ["KTM", "PKR", "BTL"]},
        {name: "India", cities: ["Delhi", "Mumbai", "Bangalore"]},
        {name: "China", cities: ["Beijing", "Hongkong", ]}
    ];
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
  return (
    <div>
    </div>  
  )
}

export default Question;