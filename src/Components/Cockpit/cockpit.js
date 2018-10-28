import React from 'react';
import Classes from './cockpit.css'
import Aux from '../../hoc/aux';
const Cockpit = (props)=>{
    // inline- styling
    const style={
        border:"2px solid #ff0f",
        color: "white",
        backgroundColor:"green",
        cursor:"pointer",
        font:"inherit",
        padding:"8px",
        // ":hover":{ //using radium styles
        //   backgroundColor: "lightgreen",
        //   color: "black"
        // }
      }
    const buttonStyle = {
      border:"2px solid #ff0f",
        color: "black",
        backgroundColor:"blue",
        cursor:"pointer",
        font:"inherit",
        padding:"8px",
        marginLeft: "10px"
    }
      
    let localClasses = []
           if(props.person.length <=2) {
             localClasses.push(Classes.unit)
           }
           if(props.person.length <=1) {
              localClasses.push(Classes.connect)
           }
    return(
        <Aux className={Classes.Cockpit}>
          <h1>{props.appTitle}</h1>
            <p className={localClasses.join(' ')}>This is Really works</p>
            <button style={style}
              onClick={props.toggle}>
              Toggle Persons
            </button>  
            <button style={buttonStyle} onClick={props.logIn}>Log In</button>
        </Aux>
    )
}
export default Cockpit;