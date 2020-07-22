import ReactDOM from 'react-dom'
import React, {useState} from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Lomake from './components/form.js'
import App from './components/admin.js'


ReactDOM.render(<Lomake />,
  document.getElementById('root')
)
