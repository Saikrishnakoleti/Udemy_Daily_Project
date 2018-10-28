import React, {Component} from 'react';
// const WithClass=(WrappedComponent, className)=>{
//    return (props)=>(
//      <div className={className}>
//         <WrappedComponent {...props}/>
//     </div>
//    )
// }

/* This is the Ananymous class component*/
const WithClass=(WrappedComponent, className)=>{
    return class extends Component {
        render(){
            return (
                <div className={className}>
                   <WrappedComponent {...this.props}/>
               </div>
              )
        }
    }
 }
export default WithClass;