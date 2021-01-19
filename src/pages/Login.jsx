import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Login extends Component {

    state = {
        username: '',
        password: '',
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
        const {username,password, error} = this.state
        return (
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="card">
                        <div className="card-header text-center">
                            <h4 className="card-title">User Login</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <label htmlFor="username">Enter usenrame name</label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Enter username"
                                        onChange={this.chagneHandler}
                                        vlaue={username}
                                        name="username"
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
                                 <button className="btn btn-success btn-sm">Login</button>
                            </form>
                        </div>
                        <div className="card-footer">
                            <p>Don't have an account? Please <Link to='/registration'>Register</Link> here.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
