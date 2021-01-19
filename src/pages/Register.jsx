import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../store/actions/authAction';


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

    static getDerivedStateFromProps(nextProps, prevState) {
        if(JSON.stringify(nextProps.auth.error) !== JSON.stringify(prevState.error)){
            return {
                error: nextProps.auth.error
            }
        }
        return null
    }

    submitHandler = event => {
        event.preventDefault()
        let { username, email, password, password2 } = this.state
        this.props.register({username, email, password, password2}, this.props.history)
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
                                        className={error.username ? 'form-control is-invalid': 'form-control'}
                                        placeholder="Enter username"
                                        onChange={this.chagneHandler}
                                        vlaue={username}
                                        name="username"
                                    />
                                    {error.username && <div className="invalid-feedback">{error.username}</div>}
                                 </div>
                                 <div className="form-group">
                                    <label htmlFor="email">Enter valid email</label>
                                    <input type="email"
                                        className={error.email ? 'form-control is-invalid': 'form-control'}
                                        placeholder="Enter a valid email"
                                        onChange={this.chagneHandler}
                                        vlaue={email}
                                        name="email"
                                        />
                                        {error.email && <div className="invalid-feedback">{error.email}</div>}
                                 </div>
                                 <div className="form-group">
                                    <label htmlFor="password">Enter Password</label>
                                    <input type="password"
                                        className={error.password ? 'form-control is-invalid': 'form-control'}
                                        placeholder="*******************"
                                        onChange={this.chagneHandler}
                                        vlaue={password}
                                        name="password"
                                    />
                                    {error.password && <div className="invalid-feedback">{error.password}</div>}
                                 </div>
                                  <div className="form-group">
                                    <label htmlFor="password2">Enter Confirm Password</label>
                                    <input type="password"
                                         className={error.password2 ? 'form-control is-invalid': 'form-control'}
                                        placeholder="*******************"
                                        onChange={this.chagneHandler}
                                        vlaue={password2}
                                        name="password2"
                                    />
                                    {error.password2 && <div className="invalid-feedback">{error.password2}</div>}
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

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { register })(Register)
