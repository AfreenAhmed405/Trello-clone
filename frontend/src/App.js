import './styles/App.css';
import Header from "./components/Header";
import Board from "./components/Board";
import { useState } from "react";

function App() {
    const [tasks, setTasks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }

    function generateId() {
        return 'id-' + Math.random().toString(36).substr(2, 9);
    }

    const addTask = (e) => {
        e.preventDefault();
        const newTask = {id: generateId(), title: e.target.taskTitle.value, description: e.target.taskDesc.value, deadline: formatDate(e.target.taskDate.value), status: "todo"};

        setTasks((prevTodos) => [
            ...prevTodos, newTask
        ]);
        setIsModalOpen(false);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="App">
            <Header />
            <Board tasks={tasks} setTasks={setTasks} openModal={openModal} />

            {/* Modal */}
            {isModalOpen && (
                <div className="modal fade show" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add New Task</h5>
                                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                            </div>
                            <form onSubmit={addTask}>
                                <div className="modal-body">
                                        <input
                                            type="text"
                                            id="taskTitle"
                                            placeholder="Enter task title"
                                            className="form-control"
                                        />
                                        <input
                                            type="text"
                                            id="taskDesc"
                                            placeholder="Enter task description"
                                            className="form-control"
                                        />
                                        <input
                                            type="date"
                                            id="taskDate"
                                            placeholder="Enter task deadline"
                                            className="form-control"
                                        />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                                    <button type="submit" className="btn btn-primary">Save Task</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
