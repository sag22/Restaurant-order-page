import ReactDOM from 'react-dom'
import React, {useState} from "react"
import ordersService from './orders.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from './menu.js'
import "./admin.css" 

/*admin*/

const App = () =>{
const [newOrder, setNewOrder] =  useState([])

  
   
    //getting orders from json server
const get = (event) =>{
    event.preventDefault()
ordersService
    .getAll()
    .then(response=>{
   setNewOrder(response.data)
})
    
}
    //checking if there is more  offers
setTimeout(function(){
    ordersService
    .getAll()
    .then(response=>{
   setNewOrder(response.data)
})
},10000)   
   
    //deleting order
const del_btn =(id)=>{
 if(window.confirm("Do you want delete this order?")){
     ordersService
    .delete(id)
    .then(response=>{
       
   })
 }   
    ordersService
    .getAll()
    .then(response=>{
        setNewOrder(response.data)
    })

    
}

    //read button 
const ready_btn =(event,id) =>{
    event.preventDefault()
    ordersService
    .update(id)
    .then(response=>{
        setNewOrder(response.data)
    })
}
//old orders buttons
const old_btn = (event) =>{
     event.preventDefault()
    document.getElementById('old_orders').style.display = "block";
    document.getElementById('layer').style.display = "block";
}
const hide_old_orders= () =>{
     document.getElementById('old_orders').style.display = "none";
    document.getElementById('layer').style.display = "none";
}

const link = "www.google.fi/maps/place/"

  return (
      
      <div id="main_div">
      <h1>Admin page</h1>
        <p>Here you see all orders</p>
        <Menu />
      
        <div id="orders">
            <ul id="buttons">
                <button id="get_btn" onClick={get}>Get orders</button>
                <button id="old_btn" onClick={old_btn}>Old orders</button>
            </ul>
            <ul>  
        {newOrder.map(newOrder=>
            
            <li key={newOrder.id}><h1>Order {newOrder.id}</h1>
                <p><b>Name:</b> {newOrder.name}</p>
                <p><b>Phone:</b> {newOrder.phone_num}</p>
      
                <p><b>Address:</b><a target="_blank" href={'//'+link+newOrder.address+'+'+newOrder.city}> {newOrder.address + ', ' +newOrder.city}</a></p>
      
                <p><b>Food:</b> {newOrder.food}</p>
                <p><b>Drink:</b> {newOrder.drink}</p>
                <p><b>Pizza_fil:</b> {newOrder.pizza_fil}</p>
                <p><b>Message:</b> {newOrder.message}</p>
              <button id="ready_btn" onClick={ready_btn}>Ready</button>
      
              <button onClick={() => del_btn(newOrder.id)} id="delete_btn">Delete</button>
      
            </li>           
        )}
            </ul>
      
        </div>
        <div onClick={hide_old_orders} id="layer"></div>
        <div id="old_orders">
          <h1>Old orders</h1>
                 <button id="get_btn" onClick={get}>Get orders</button>
            <ul>  
        {newOrder.map(newOrder=>
            
            <li key={newOrder.id}><h1>Order {newOrder.id}</h1>
                <p><b>Name:</b> {newOrder.name}</p>
                <p><b>Phone:</b> {newOrder.phone_num}</p>
      
                <p><b>Address:</b><a target="_blank" href={'//'+link+newOrder.address+'+'+newOrder.city}> {newOrder.address + ', ' +newOrder.city}</a></p>
      
                <p><b>Food:</b> {newOrder.food}</p>
                <p><b>Drink:</b> {newOrder.drink}</p>
                <p><b>Pizza_fil:</b> {newOrder.pizza_fil}</p>
                <p><b>Message:</b> {newOrder.message}</p>

      
              <button onClick={() => del_btn(newOrder.id)} id="delete_btn">Delete</button>
      
            </li>           
        )}
            </ul>
        
        </div>

      </div>
     
    

)
       
  
}


export default App

