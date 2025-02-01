import React from "react";
import Card from "./Card";

function Category({ todos, doings, dones }) {

    return (
        <div className="container-fluid mt-2">
            <div className="row justify-content-center">
                <div className="col-4">
                    <div className="card category-card">
                        <div className="card-body">
                            <h5 className="card-title category-title">To Do</h5>
                            {
                                todos && todos.length > 0 ? (
                                    todos.map((todo) => <Card key={todo.id} task={todo} />)
                                ) : (<span>Empty</span>)
                            }
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card category-card">
                        <div className="card-body">
                            <h5 className="card-title category-title">Doing</h5>
                            {
                                doings && doings.length > 0 ? (
                                    doings.map((doing) => <Card key={doing.id} task={doing} />)
                                ) : (<span>Empty</span>)
                            }
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card category-card">
                        <div className="card-body">
                            <h5 className="card-title category-title">Done</h5>
                            {
                                dones && dones.length > 0 ? (
                                    dones.map((done) => <Card key={done.id} task={done}/>)
                                ) : (<span>Empty</span>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Category;