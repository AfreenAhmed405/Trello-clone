import React from "react";

function Card({ task, tasks, setTasks, openEditModal, onEditClick }) {

    function deleteTask() {
        setTasks((prevTasks) =>
            prevTasks.filter((item) => task.id !== item.id)
        );
    }

    function changeStatus() {
        if (task.status === "todo") {
            setTasks((prevTasks) =>
                prevTasks.map((item) =>
                    item.id === task.id ? {...item, status: "doing"} : item
                )
            );
        } else if (task.status === "doing") {
            setTasks((prevTasks) =>
                prevTasks.map((item) =>
                    item.id === task.id ? {...item, status: "done"} : item
                )
            );
        }
    }

    return (
        <div className="col">
            <div className="card card-item mb-2">
                <div className="card-body card-body-custom">
                    <h5 className="card-title">{task.title}</h5>
                    <p className="card-text">{task.description}</p>
                    <div className="row">
                        <div className="col span-left">
                            <i className="card-icons fa-regular fa-pen-to-square" onClick={() => onEditClick(task)}></i>
                            <i className="card-icons fa-regular fa-clock"></i>{task.deadline}
                        </div>

                        <div className="col span-right">
                            {
                                task.status !== "done" ? (
                                    <span><i className="card-icons fa-solid fa-trash" onClick={deleteTask}></i>
                                    <i className="card-icons fa-solid fa-arrow-right-long" onClick={changeStatus} ></i></span>
                                ) : (
                                    <span><i className="card-icons fa-solid fa-trash" onClick={deleteTask}></i>
                                        <i className="fa-solid fa-check"></i></span>
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;