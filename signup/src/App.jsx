import React, { component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

class app extends component {
    constructor(){
        super()
        this.state = {
            name:'',
            userName:'',
            password:''
        }
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

    render(){
        return(
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form>
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