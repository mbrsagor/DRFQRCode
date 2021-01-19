import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Register extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        passwod2: '',
        error: {}
    }

    chagneHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
    }

    render() {
        const {username, email, password, password2, error} = this.state
        return (
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="card">
                        <div className="card-header text-center">
                            <h4 className="card-title">Create New Account</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <label htmlFor="username">Enter your name</label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Enter username"
                                        onChange={this.chagneHandler}
                                        vlaue={username}
                                        name="username"
                                        />
                                 </div>
                                 <div className="form-group">
                                    <label htmlFor="email">Enter valid email</label>
                                    <input type="email"
                                        className="form-control"
                                        placeholder="Enter a valid email"
                                        onChange={this.chagneHandler}
                                        vlaue={email}
                                        name="email"
                                        />
                                 </div>
                                 <div className="form-group">
                                    <label htmlFor="password">Enter Password</label>
                                    <input type="password"
                                        className="form-control"
                                        placeholder="*******************"
                                        onChange={this.chagneHandler}
                                        vlaue={password}
                                        name="password"
                                        />
                                 </div>
                                  <div className="form-group">
                                    <label htmlFor="password2">Enter Confirm Password</label>
                                    <input type="password"
                                        className="form-control"
                                        placeholder="*******************"
                                        onChange={this.chagneHandler}
                                        vlaue={password2}
                                        name="password2"
                                        />
                                 </div>
                                 <button className="btn btn-success btn-sm">Register</button>
                            </form>
                        </div>
                        <div className="card-footer">
                            <p>Already have account? Please <Link to='/login'>login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
