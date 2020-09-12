import ReactDOM from 'react-dom'
import React, {useState} from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Lomake from './form.js'
import App from './admin.js'
import "./css.css"

const Menu = () =>{
    
    const btn1 = (event) =>{
        event.preventDefault()
            ReactDOM.render(<App />,
            document.getElementById('root')
        )
    }
     const btn2 = (event) =>{
        event.preventDefault()
            ReactDOM.render(<Lomake />,
            document.getElementById('root')
        )
    }
    
    
    return(
        <div id="menu">
            <button onClick={btn1}>Orders page</button>
            <button onClick={btn2}>Send order</button>
        </div>
    )
}

export default Menu