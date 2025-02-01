import React from "react";
import BoardHeader from "./BoardHeader";
import Category from "./Category";

function Board({ tasks }) {

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
            <Category todos={getTodos()} doings={getDoings()} dones={getDones()} />
        </>
    )
}

export default Board;