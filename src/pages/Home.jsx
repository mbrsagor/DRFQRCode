import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store/actions/authAction';


class Home extends Component {

    componentDidMount() {
        document.title = "Homepage";
    }

    render() {
        return (
            <div className="card text-center">
                <div className="card-header">
                    <h4 className="card-title">Welcome to our homepage</h4>
                    <p>Python, Django, React-Redux web application for job coding test</p>
                </div>
                <div className="card-body">
                    {
                        this.props.auth.isAuthenticated
                        ?
                        <div>
                            <h1>Our application is development running</h1>
                            <h4>We will get back soon!</h4>
                            <hr/>
                            <button onClick={() => this.props.logout(this.props.history)} className="btn btn-danger btn-sm">Logout</button>
                            <Link to='/dashboard' className="btn btn-success btn-sm ml-3">Dashboard</Link>
                        </div>
                        :
                        <Link to='/login' className="btn btn-success btn-sm">Login</Link>
                    }
                </div>
                <div className="card-footer">
                    <p className="text">&copy; 2021 All rights reserved. Developed by Sagor</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout})(Home)
