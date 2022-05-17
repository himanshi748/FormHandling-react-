
import React from 'react';

import './App.css';



class Change extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name:'',
            department:'',
            rating:'',
            detail:[],
        };
    }
    handleName = (event) =>  {
        this.setState({Name: event.target.value});
    }

    handleDepartment = (event) => {
        this.setState({department: event.target.value});
    }

    handleRate = (event) => {
        this.setState({rating: event.target.value});
    }  

    handleSubmit = (event) => {
       
       // console.log('Name : ' , this.state.Name ,'|' , 'Department : ' , this.state.department , '|' ,'Rating : ' , this.state.rating)

        event.preventDefault();

        const box = {
            Name : this.state.Name,
            department : this.state.department,
            rating : this.state.rating,
        };

        const box1 = this.state.detail;
        box1.push(box);
        this.setState({detail : box1});


    };


    render() {
        return (
            <>

            <div className='cont'>
            <form>
            <h2>EMPLOYEE FEEDBACK FORM</h2><br/><br/>
            <label>Name :  </label>
            <input type='text' placeholder='enter your name' name='name'  value={this.state.Name} onChange={this.handleName}/><br/><br/><br/>

            <label>Department :  </label>
            <input type='text' placeholder='enter your department' name='Department'  value={this.state.department} onChange={this.handleDepartment}/><br/><br/><br/>

            <label>Rating :  </label>
            <input type='number' placeholder='rating' name='rating' value={this.state.rating} onChange={this.handleRate}/><br/><br/><br/>

            <button type='submit' onClick={this.handleSubmit}>Submit</button>
            </form>
            <br/><br/>



 
     <div id='demo'>
          {this.state.detail.map((value, index) => {
            return (
              <div id='demo1'>
                {index + 1}) Name : {value.Name} | Department :{" "}
                {value.department} | Rating : {value.rating}
              </div>
            );
          })}
        </div>

            
            </div>
            </>
        );
    }

}

export default Change;





