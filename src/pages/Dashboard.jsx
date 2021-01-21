import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { listTypes } from '../store/actions/typeAction';
import NotFound from '../components/NotFound';
import CreateType from '../components/CreateType';


class Dashboard extends Component {

    state = {
        createMoalOpen : false
    }

    oepnCreateMoal = () => {
        this.setState({ createMoalOpen: true });
    }

    closeCreateMoal = () => {
        this.setState({ createMoalOpen: false });
    }
    
    componentDidMount() {
        document.title = "Dashboard";
        this.props.listTypes()
    }

    render() {
        let { auth, types } = this.props
        // console.log(types.results)
        return (
            <div className="type">
                {auth.isAuthenticated ? 
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-7">
                                    <h2>Dashboard</h2>
                                    <p>User ID: {auth.user.user_id}</p>
                                </div>
                                <div className="col-md-5 text-right">
                                    <button
                                        onClick={this.oepnCreateMoal}
                                        className="btn btn-success btn-sm"
                                    >Add New</button>
                                    <CreateType
                                        close={this.closeCreateMoal}
                                        isOpen={this.state.createMoalOpen}
                                    />
                                    <p><Link className="btn btn-default"to='/'>Back</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Color</th>
                                        <th>Status</th>
                                        <th>Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {types.results && types.results.map(type => (
                                        <tr key={type.id}>
                                            <td>{type.title}</td>
                                            <td>{type.color}</td>
                                            <td> {type.is_active ? <span className="bg-success p-1 text-light">active</span> : <span className="bg-warning p-1 text-light">Deactive</span>}</td>
                                            <td>{type.created_at}</td>
                                            <td>
                                                <button
                                                    onClick={() => console.log("Updated")} className="btn btn-info btn-sm">
                                                    Update
                                                </button>
                                                <button
                                                    onClick={() => console.log("Deleted")}
                                                    className="btn btn-danger ml-2 btn-sm">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <NotFound />
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    types: state.types
})

export default connect(mapStateToProps, {listTypes}) (Dashboard)
