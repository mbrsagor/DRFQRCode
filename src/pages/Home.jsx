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
            <div>
                <h2>I'm home page</h2>
                {
                    this.props.auth.isAuthenticated
                    ?
                    <button onClick={() => this.props.logout(this.props.history)} className="btn btn-danger btn-sm">Logout</button>
                    :
                    <Link to='/login' className="btn btn-success btn-sm">Login</Link>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout})(Home)
