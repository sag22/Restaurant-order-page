import ReactDOM from 'react-dom'
import React, {useState,useEffect} from "react"
import axios from 'axios'
import ordersService from './orders.js'
import Menu from './menu.js'
import "./form.css" 

import burger_pic from './img/hamgurger.jpeg'
import chk_burg_pic from './img/chicken.jpg'
import pizza_pic from './img/pizza.jpeg'
import chk_salad_pic from './img/chickensalad.jpeg'

const Lomake = () =>{
    
    const [ newFood, setNewFood ] = useState('') 
    const [newName, setNewName] = useState('')
    const [newFill, setNewFill] =  useState([])
    const [newPhone, setNewPhone] = useState('')
    const [ newDrink, setNewDrink ] = useState('') 
    const [ newAddress, setNewAddress ] = useState('') 
    const [ newCity, setNewCity ] = useState('')  
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
 const address = (event)=>{
     setNewAddress(event.target.value)
     event.preventDefault()
 }
 const city = (event)=>{
     setNewCity(event.target.value)
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
            address:newAddress,
            city:newCity,
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
      setNewAddress('')
      setNewCity('')
      alert("Your order has send to restaurant")
    }).catch(error => {
    alert("something went wrong")
  })      
}

//pizza fillings and prices styles
const filter_pizza = newFood.substring(0,5)
if(filter_pizza === "Pizza"){
    document.getElementById("pizza_fil").style.display = "block"
    document.getElementById("pizza").style.boxShadow = "0px 0px 5px green"
}

 if(newFood === "Hamburger"){
     document.getElementById("burger").style.boxShadow = "0px 0px 5px green"
 }
  if(newFood === "Chicken Hamburger"){
     document.getElementById("chk_burger").style.boxShadow = "0px 0px 5px green"
 }
    if(newFood === "Chicken salad"){
     document.getElementById("chk_salad").style.boxShadow = "0px 0px 5px green"
 }
     

    
    
    
return(
    <div id="container">
        <h1>Order sending page</h1>
   
<section id="order_section"> 
 <Menu />
    <div id="form_div">
            <div id="prices">
                <ul>
                    <li>
                        <p>15€</p>
                        <img id="burger" src={burger_pic} />
                        
                    </li>
                    <li>
                         <p>20€</p>
                        <img id="chk_burger" src={chk_burg_pic} />
                    </li>
                     <li>
                        <p>14€</p>
                        <img id="pizza" src={pizza_pic} />
                    </li>
                     <li>
                        <p>20€</p>
                        <img id="chk_salad" src={chk_salad_pic} />
                    </li>
                </ul>
        
               
            </div>
           
        <form onSubmit={Create}>
                <p id="send_p">Send order</p>
            <div id="important_inp">
                <input onChange={name} value={newName} placeholder="Name"/>
                <input type="number" onChange={phone} value={newPhone} placeholder="Phone number"/>
                <input onChange={address} value={newAddress} placeholder="Your address"/>
                <input onChange={city} value={newCity} placeholder="Your city"/>
            </div>
            <div id="order_inp">
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
                            <option>Pineapple,</option>
                            <option>Pepperoni,</option>
                            <option>Shrimp,</option>
                            <option>Pineapple,</option>
                            <option>Minced meat,</option>
                            <option>Cheese,</option>
                        </optgroup>
                    </select>
        
                     <select onChange={fill}>
                        <optgroup id="filling" label="Second pizza filling">
                            <option>Select second pizza filling</option>
                            <option>Pineapple,</option>
                            <option>Pepperoni,</option>
                            <option>Shrimp,</option>
                            <option>Pineapple,</option>
                            <option>Minced meat,</option>
                            <option>Cheese,</option>
                        </optgroup>
                    </select>
                    
                     <select onChange={fill}>
                        <optgroup id="filling" label="Third pizza filling">
                            <option>Select third pizza filling</option>
                            <option>Pineapple,</option>
                            <option>Pepperoni,</option>
                            <option>Shrimp,</option>
                            <option>Pineapple,</option> 
                            <option>Minced meat,</option>
                            <option>Cheese,</option>
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
        
            <button id="send_btn"  type="submit">Send order</button>
        </div>
        </form>
        </div>
    </section>    
        </div>
    )
  
   
}


export default Lomake

