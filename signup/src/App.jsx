import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state = {
            name:'',
            userName:'',
            password:''
        }
        this.changename = this.changename.bind(this)
        this.changeUserName = this.changeUserName.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    //react function to change the value of name, username and password field
    changename(event){
        this.setState({
            name:event.target.value
        })
    }
    changeUserName(event){
        this.setState({
            userName:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            name: this.state.name,
            userName: this.state.userName,
            password: this.state.password
        }
        axios.post('http://localhost:3000/page/register', registered)
        .then(response => console.log(response.data))
        
        this.setState({
            name:'',
            userName:'',
            password:''
        })

    }

    render(){
        return(
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type = 'text'
                            placeholder='Name'
                            onChange={this.changename}
                            value={this.state.name}
                            className='form-control form-group'
                            />
                            <input type = 'text'
                            placeholder='User Name'
                            onChange={this.changeUserName}
                            value={this.state.userName}
                            className='form-control form-group'
                            />
                            <input type = 'password'
                            placeholder='Password'
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control form-group'
                            />

                            <input type='submit' className='btn btn-danger btn-block' value='submit'>
                            </input>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}

export default App;