import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {listTypes } from '../store/actions/typeAction';


class Dashboard extends Component {

    componentDidMount() {
        document.title = "Dashboard";
        this.props.listTypes()
    }

    render() {
        let {auth, types} = this.props
        return (
            <div>
                <h2>I am Dashboard</h2>
                <p>{auth.user.user_id}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    types: state.types
})

export default connect(mapStateToProps, {listTypes}) (Dashboard)
