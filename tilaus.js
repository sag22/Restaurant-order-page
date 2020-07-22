import ReactDOM from 'react-dom';
import React from "react";
import Value from "./database.js"
import Lomake from "./lomake.js"
 var counter =0 
 
 /*tilaus */
 
function re(){
   const Value = 0
    ReactDOM.render(<Systeemi />, 
  document.getElementById('root')
   
   
)
}

const Ruoka = "dsa"
const Juoma = Lomake.Juoma


const Systeemi = () =>{
    if(Value === 1){
     const Ruoka = "asad"
     console.log(Ruoka)
    return(
     <div>
        <h1>Tilaus {counter} </h1>
            <ul>
      
                <li>{Ruoka}</li>
                <li>{Juoma}</li>
                <li>hinta : 20€</li>
            </ul>
        
        </div>
    )
        
        
    }else{
        return(
            <p>Ei tilausta</p>
        )
    }
}





const Buttoni = () =>{
    
    re()
    counter +=1

    }

function Tilaus() {
  return (
      <div>
      
    <Systeemi />
      <button onClick={Buttoni}>Refresh</button>
      </div>
)
       
  
}



export default Tilaus
