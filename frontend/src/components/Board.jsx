import React from "react";
import BoardHeader from "./BoardHeader";
import Category from "./Category";

function Board({ tasks, setTasks, openNewModal, openEditModal, onEditClick }) {


    function getTodos() {
        return tasks.filter((task) => task.status === "todo");
    }

    function getDoings() {
        return tasks.filter((task) => task.status === "doing");
    }

    function getDones() {
        return tasks.filter((task) => task.status === "done");
    }
    return (
        <>
            {/*<BoardHeader />*/}
            <Category openNewModal={openNewModal} openEditModal={openEditModal} onEditClick={onEditClick} tasks={tasks} todos={getTodos()} doings={getDoings()} dones={getDones()} setTasks={setTasks} />
        </>
    )
}

export default Board;