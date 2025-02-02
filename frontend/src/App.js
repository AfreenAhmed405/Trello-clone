import './styles/App.css';
import Header from "./components/Header";
import Board from "./components/Board";
import {useEffect, useState} from "react";
import {addTask, editTask, getTasks} from "./api";

function App() {
    const [tasks, setTasks] = useState([]);
    const [isNewModalOpen, setIsNewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(() => {
        getTasks()
            .then((response) => {
                setTasks(response.data);
            })
    }, []);

    const handleEditClick = (task) => {
        setSelectedTask(task);
        setIsEditModalOpen(true);
    };

    const editTaskFn = (e) => {
        e.preventDefault();
        const updatedTask = {
            ...selectedTask,
            title: e.target.taskTitle.value,
            description: e.target.taskDesc.value,
            deadline: formatDate(e.target.taskDate.value),
            date: e.target.taskDate.value,
            status: e.target.taskStatus.value,
        };

        editTask(selectedTask.id, updatedTask)
            .catch((err) => {
                console.log("Could not edit task.", err);
            })
        setTasks(tasks.map((task) => (task.id === selectedTask.id ? updatedTask : task)));
        setIsEditModalOpen(false);
    };

    function formatDate(dateString) {
        const [year, month, day] = dateString.split("-").map(Number); // Extract components
        const date = new Date(year, month - 1, day); // Month is 0-based
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    }

    const addTaskFn = (e) => {
        e.preventDefault();
        const newTask = {title: e.target.taskTitle.value, description: e.target.taskDesc.value, deadline: formatDate(e.target.taskDate.value), date: e.target.taskDate.value, status: e.target.taskStatus.value};

        addTask(newTask)
            .then((response) => {
                setTasks((prevTodos) => [
                    ...prevTodos, response.data
                ]);
            }).catch((err) => {
                console.log("Could not create task.", err);
        })

        setIsNewModalOpen(false);
    };

    const openNewModal = () => setIsNewModalOpen(true);
    const closeNewModal = () => setIsNewModalOpen(false);
    const openEditModal = () => setIsEditModalOpen(true);
    const closeEditModal = () => setIsEditModalOpen(false);

    return (
        <div className="App">
            <Header />
            <Board tasks={tasks} setTasks={setTasks} openNewModal={openNewModal} openEditModal={openEditModal} onEditClick={handleEditClick} />

            {/* Modal New Task */}
            {isNewModalOpen && (
                <div className="modal fade show" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add New Task</h5>
                                <button type="button" className="btn-close" onClick={closeNewModal} aria-label="Close"></button>
                            </div>
                            <form onSubmit={addTaskFn}>
                                <div className="modal-body">
                                    <label htmlFor="taskTitle" className="modal-form-label">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        id="taskTitle"
                                        className="form-control"
                                    />
                                    <label htmlFor="taskDesc" className="modal-form-label">
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        id="taskDesc"
                                        className="form-control"
                                    />
                                    <label htmlFor="taskDate" className="modal-form-label">
                                        Deadline
                                    </label>
                                    <input
                                        type="date"
                                        id="taskDate"
                                        className="form-control"
                                    />
                                    <label htmlFor="taskStatus" className="modal-form-label">
                                        Status
                                    </label>
                                    <select id="taskStatus" className="modal-form-select" defaultValue="todo">
                                        <option value="" disabled></option>
                                        <option value="todo">To Do</option>
                                        <option value="doing">Doing</option>
                                        <option value="done">Done</option>
                                    </select>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={closeNewModal}>Close</button>
                                    <button type="submit" className="btn btn-primary">Save Task</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Edit Task */}
            {isEditModalOpen && (
                <div className="modal fade show" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Task</h5>
                                <button type="button" className="btn-close" onClick={closeEditModal} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={editTaskFn}>
                                    <div className="modal-body">
                                        <label htmlFor="taskTitle" className="modal-form-label">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            id="taskTitle"
                                            className="form-control"
                                            defaultValue={selectedTask.title}
                                        />
                                        <label htmlFor="taskDesc" className="modal-form-label">
                                            Description
                                        </label>
                                        <input
                                            type="text"
                                            id="taskDesc"
                                            className="form-control"
                                            defaultValue={selectedTask.description}
                                        />
                                        <label htmlFor="taskDate" className="modal-form-label">
                                            Deadline
                                        </label>
                                        <input
                                            type="date"
                                            id="taskDate"
                                            className="form-control"
                                            defaultValue={selectedTask.date}
                                        />
                                        <label htmlFor="taskStatus" className="modal-form-label">
                                            Status
                                        </label>
                                        <select id="taskStatus" className="modal-form-select" defaultValue={selectedTask.status} >
                                            <option value="todo">To Do</option>
                                            <option value="doing">Doing</option>
                                            <option value="done">Done</option>
                                        </select>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={closeEditModal}>Close</button>
                                        <button type="submit" className="btn btn-primary">Save Task</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
