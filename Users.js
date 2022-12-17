import React , { Component} from "react";
import * as userActions from "./actions/userActions";
// Import the connect element from the react-redux
import { connect } from "react-redux";
class Users extends Component{
    //constructor
    constructor(){
        super();
        //create a state variable for the course title 
        this.state ={
            user:{
                title:''
            }
        }

        //bind the events  -- to map the events 
        this.UserChange = this.UserChange.bind(this);
        this.UserSave = this.UserSave.bind(this);
    }

    //textbox onchange event handler 
    UserChange(event){
        //store the course state in a variable 
        const userstate = this.state.user;
        userstate.title = event.target.value;
        //modify the state data 
        this.setState({
            user:userstate
        });
    }

    //button onclick event handler 
    UserSave(event){
        //to fetch the course title 
        this.props.createUser(this.state.user);
    }

    render(){
        return(
            <div>
                <h1> This is REDUX COMPONENT</h1>
                {/* Display the list of courses  */}
                {this.props.user.map((value,index)=>{
                        return <div key={index}> {value.title} </div> 
                    }
                )}
                <h4>ADD USERS </h4>
                {/* Add events(methods) to the onChange() and onClick() event handlers  */}
                Enter Users Name :<input type="text" onChange={this.UserChange} />
                <input type="submit" value="ADD USERS" onClick={this.UserSave} />

            </div>
        )
    }
}

//create the two functions mapStateToPRops and mapDispatchToProps for the connect finction 

//input is state element and returns the updated state 
function mapStateToProps(state){
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch){
    return{
        createUser: user=>dispatch(userActions.createUser(user))
    };
}

export default connect(mapStateToProps,mapDispatchToProps) (Users);