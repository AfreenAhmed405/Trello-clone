import './styles/App.css';
import Header from "./components/Header";
import Board from "./components/Board";

function App() {

    const tasks = [
        {id: 1, title: "Task 1", description: "This is the description of task 1.", deadline: 'July 15', status: "todo"},
        {id: 2, title: "Task 2", description: "This is the description of task 2.", deadline: 'May 3', status: "todo"},
        {id: 3, title: "Task 3", description: "This is the description of task 3.", deadline: 'Apr 21', status: "done"}
    ];

    return (
        <div className="App">
            <Header />
            <Board tasks={tasks} />
        </div>
      );
}

export default App;