import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../store/actions/authAction';


export class Login extends Component {

    state = {
        username: '',
        password: '',
        error: {}
    }

    componentDidMount() {
        document.title = "Login page"
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
        this.props.login({
            username: this.state.username,
            password: this.state.password
        }, this.props.history)
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
                                        className={error.username ? 'form-control is-invalid': 'form-control'}
                                        placeholder="Enter username"
                                        onChange={this.chagneHandler}
                                        vlaue={username}
                                        name="username"
                                    />
                                    {error.username && <div className="invalid-feedback">{error.username}</div>}
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


const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {login}) (Login)
