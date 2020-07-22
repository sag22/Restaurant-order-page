import ReactDOM from 'react-dom'
import React, {useState,useEffect} from "react"
import axios from 'axios'
import ordersService from './components/orders.js'
import "./form.css" 

const Lomake = () =>{
    
const [ newFood, setNewFood ] = useState('') 
const [newName, setNewName] = useState('')
const [newFill, setNewFill] =  useState([])
const [newPhone, setNewPhone] = useState('')
const [ newDrink, setNewDrink ] = useState('')  
const [ newMessage, setNewMessage ] = useState('') 
const [orders, setOrder] = useState([])
const [newOrder, setNewOrder] = useState('')
 
 const name = (event) =>{
    setNewName(event.target.value)
    event.preventDefault()
}
 const phone = (event) =>{
    setNewPhone(event.target.value)
    event.preventDefault()
}

 const food = (event)=>{
     setNewFood(event.target.value)
     event.preventDefault()
 }

 const drink = (event)=>{
     setNewDrink(event.target.value)
     event.preventDefault()
 }
 
 const fill = (event)=>{
     const val = event.target.value
     setNewFill(newFill.concat(val))
     event.preventDefault()
 }
 
 const message = (event) =>{
     setNewMessage(event.target.value)
    
     event.preventDefault()
 }

//create order
const Create = event =>{
    event.preventDefault()
        const Order = {
            name: newName,
            phone_num:newPhone,
            food: newFood,
            drink: newDrink,
            pizza_fil:newFill,
            message: newMessage,
            id: orders.lenght + 1
        }
  
  ordersService
   .create(Order)
    .then(response => {
      setOrder(orders.concat(response.data))
      setNewOrder('')
      setNewName('')
      setNewPhone('')
       setNewMessage('')
      alert("Your order has send to restaurant")
    }).catch(error => {
    alert("something went wrong")
  })
  
  
        
}

//pizza fillings
const filter_pizza = newFood.substring(0,5)
if(filter_pizza === "Pizza"){
    document.getElementById("pizza_fil").style.display = "block"
}
    
    return(
        <div>
            <div id="menu">
                <ul>
                    <li><a href="./lomake.js">Order page</a></li>
                    <li><a href="./admin.js">Admin page</a></li>
                </ul>
        
            </div>
        <h1>Order sending page</h1>
        <div id="form_div">
            <form onSubmit={Create}>
                <input onChange={name} value={newName} placeholder="Name"/>
                <input onChange={phone} value={newPhone} placeholder="Phone number"/>
    
                    <select onChange={food}>
                        <optgroup id="food" label="Food">
                            <option>Select Food</option>
                            <option>Hamburger</option>
                            <option>Chicken Hamburger</option>
                            <option>Pizza with 3 filling</option>
                            <option>Chicken salad</option>
                        </optgroup>
                    </select>
        <div id="pizza_fil">
            <p>Select 3 fillings for your pizza</p>
                    <select onChange={fill}>
                        <optgroup id="filling" label="First pizza filling">
                            <option>Select first pizza filling</option>
                            <option>Pineapple</option>
                            <option>Pepperoni</option>
                            <option>Shrimp</option>
                            <option>Pineapple</option>
                            <option>Minced meat</option>
                            <option>Cheese</option>
                        </optgroup>
                    </select>
        
                     <select onChange={fill}>
                        <optgroup id="filling" label="Second pizza filling">
                            <option>Select second pizza filling</option>
                            <option>Pineapple</option>
                            <option>Pepperoni</option>
                            <option>Shrimp</option>
                            <option>Pineapple</option>
                            <option>Minced meat</option>
                            <option>Cheese</option>
                        </optgroup>
                    </select>
                    
                     <select onChange={fill}>
                        <optgroup id="filling" label="Third pizza filling">
                            <option>Select third pizza filling</option>
                            <option>Pineapple</option>
                            <option>Pepperoni</option>
                            <option>Shrimp</option>
                            <option>Pineapple</option> 
                            <option>Minced meat</option>
                            <option>Cheese</option>
                        </optgroup>
                    </select>
        </div>
                    <select onChange={drink}>
                        <optgroup id="drink" label="drinks">
                            <option>Select Drink</option>
                            <option>Coca-cola</option>
                            <option>Fanta</option>
                            <option>Sprite</option>
                            <option>Mineral water</option>  
                        </optgroup>
                    </select>
                <textarea onChange={message} placeholder="Something to say us?"></textarea>
            <button id="btn"  type="submit">Send order</button>
            </form>
        </div>
        </div>
    )
  
   
}


export default Lomake

