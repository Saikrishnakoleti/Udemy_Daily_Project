import React, {Component} from 'react';
import Person from './Person/person';
class Content extends Component {
    constructor(props){
        super(props);
        console.log('content.js inside',props)
      }
      componentWillMount(){
        console.log("[content.js] inside componentWillMount()");
      }
      componentDidMount(){
        console.log("[content.js] inside componentDidMount()");
      }
    render(){
        console.log("[content.js inside reder()]")
        return this.props.person.map((man , index) => {
                return <Person name={man.name} 
                    age={man.age}
                    position={index}
                    click={()=> this.props.delclick(index)}
                    key={man.id}
                    authenticated={this.props.isAuthenticated}
                    changed ={(event) => this.props.change(event, man.id)}
                />
            }
        )
    }
}
export default Content;