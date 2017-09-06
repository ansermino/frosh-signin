import React, {Component} from 'react';
import Student from './Student'
import Error from './Error'

const successStyle = {
    color: "#42f456"
}

class Results extends Component{
    constructor(props){
        super(props)
        this.handleReset = this.handleReset.bind(this)
    }
    handleReset(){
        this.props.stateCallback('search', null);
    }
    render() {
        if(this.props.status === 404){
            return (
                <Error status={this.props.status} message="Uh oh! We couldn&#39;t find a match. Please try again or speak to a registration volunteer." />
            )
        }
        else if(this.props.status === 401){
          return (
            <Error status={this.props.status} message="Sorry, according to our records you've already signed in :/" />
          )
        }
        else{
            return (
                <div>
                    <h1 style={successStyle}> Success!</h1>
                    <Student name={this.props.student["name"]} shirtSize={this.props.student["shirtSize"]} teamName={this.props.student["teamName"]}/>
                    <h2> Keep this page open for reference!</h2>
                    <h2> Grab your shirt and name tag and head to your teams station!</h2>
                </div>
            )
        }
    }
}

export default Results;
