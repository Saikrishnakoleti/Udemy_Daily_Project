import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import Radium from 'radium';
import classes from './person.css'
import WithClass from '../../../hoc/withClass';
import Aux from '../../../hoc/aux';
import {AuthContext} from '../../../Containers/App';
class Person extends Component {
	constructor(props){
        super(props);
        console.log('[person.js] inside',props)
      }
      componentWillMount(){
        console.log("[person.js] inside componentWillMount()");
      }
      componentDidMount(){
        console.log("[person.js] inside componentDidMount()");
        if(this.props.position===0){
          this.inputElement.focus();
        }
      }
    render(){
        console.log("[person.js inside reder()]")
		return(
			<Aux >
        <AuthContext.Consumer>
        {auth=> auth ? <p>Iam Authenticated!</p> : null}
      </AuthContext.Consumer>
			<p onClick={this.props.click}>Iam {this.props.name} Iam {this.props.age}  Old</p>
			<p>{this.props.children}</p>
      <input type="text" 
        ref={(inp)=>{this.inputElement=inp}}
        onChange={this.props.changed} 
        value={this.props.name}  />
			</Aux>
		)
	}
}
// Person.prototype = {
//   click:PropTypes.func,
//   name:PropTypes.string,  
//   age:PropTypes.number,
//   changed:PropTypes.func
// };
// export default Radium(Person);
export default WithClass(Person, classes.person);
