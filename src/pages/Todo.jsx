import React from 'react'

export default function Todo() {
    return (
        <div className="card text-center">
            <div className="card-header">
            <h2 className="card-title">Add new todo</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    <li className="item">
                        <span>Date:</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
