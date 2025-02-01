import React from "react";

function Card({ task }) {
    return (
        <div className="col">
            <div className="card card-item mb-2">
                <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <p className="card-text">{task.description}</p>
                    <span>
                        <i className="card-icons fa-regular fa-pen-to-square"></i>
                        <i className="card-icons fa-regular fa-clock"></i>{task.deadline}
                    </span>
                    <span className="next text-end"><i className="fa-solid fa-arrow-right-long"></i></span>
                </div>
            </div>
        </div>
    )
}

export default Card;