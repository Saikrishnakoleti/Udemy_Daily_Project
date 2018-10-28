  import React, { Component } from 'react';
  // import Radium, {StyleRoot} from 'radium';
  import Content from "../Components/Content/content";
  import Cockpit from '../Components/Cockpit/cockpit';
  import classes from  './App.css';
  import WithClass from '../hoc/withClass';
  import Aux from '../hoc/aux';
export const AuthContext= React.createContext(false);
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      person : [
        {id:"1", name:"Sai", age:24},
        {id:"2", name:"Krishna", age:24},
        {id:"3", name:"Koleti", age:24}
      ],
      showPersons:false,
      toggleClicked:0,
      authenticated: false
    }
    console.log('App.js inside',props)
  }
  componentWillMount(){
    console.log("[App.js] inside componentWillMount()");
  }
  componentDidMount(){
    console.log("[App.js] inside componentDidMount()");
  }
  componentWillUpdate(nextProps, nextState){
    console.log("[Update App.js] inside ComponentWillUpdate",
      nextProps,
      nextState
    );
  }
  static getDerivedStateFromProps(nextProps, prevState){
    console.log("[Update App.js] inside getDerivedStateFromProps",
      nextProps,
      prevState
      );  
      return prevState; 
  }
  getSnapshotBeforeUpdate(){
    console.log("[Update App.js] inside getDerivedStateFromProps")
  }
    /*switchUserHandler=(newName)=>{
      // this.state.person[1].name="SaiKrishna" Dont do this
      this.setState({
        person : [
          {name: newName, age:24},
          {name:"Satwik", age:1},
          {name:"sam", age:28}
        ]
      })
    }*/
    changeName=(event, id)=>{
      const personIndex = this.state.person.findIndex(p=>{
        return (p.id===id)
      });
      const human = {
        ...this.state.person[personIndex]
      };
      human.name= event.target.value;
      const persons =[...this.state.person];
      persons[personIndex] = human;
       this.setState({
      person:persons
    })
  }
  toggleHandler=()=>{
    const totalPersons = this.state.showPersons;
      this.setState((prevState,props)=>{
        return {
          showPersons: !totalPersons, toggleClicked:prevState.toggleClicked+1
        }
      })
    }
  loginHandler = () =>{
    this.setState({authenticated:true})
  }
    
  
  deletePerson=(delIndex)=>{
    const del =this.state.person;
    del.splice(delIndex, 1)
    this.setState({person:del})
  }
    render() {
      console.log("[App.js] inside render()");
      let persons = null;
      
        if(this.state.showPersons){
           persons = (
            <div>
              <Content person={this.state.person}
              delclick={this.deletePerson}
              change={this.changeName} 
              isAuthenticated={this.state.authenticated}/>
            </div>
           );
        }
        
      return (

          <Aux classes={classes.App}>
            <Cockpit toggle={this.toggleHandler}
            appTitle={this.props.title}
            person={this.state.person}
            logIn= {this.loginHandler}/>
           <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider>
          </Aux>
      );
    }
}
export default WithClass(App, classes.App);
