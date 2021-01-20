import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <div className="card text-center">
            <div className="card-header">
                <h4 className="card-title">Dashboard</h4>
            </div>
            <div className="card-body">
                <h1>Sorry, this is authAction</h1>
            </div>
            <div className="card-footer">
                <Link className="btn btn-primary" to='/login'>Login</Link>
                <Link className="btn btn-primary ml-2" to='/registration'>Registration</Link>
            </div>
        </div>
    );
}

export default NotFound;
