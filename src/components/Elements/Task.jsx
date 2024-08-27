import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import { Link } from "react-router-dom";

export default function Task({ task, deleteTask }) {
    return (
        <div className="flex border">
            <div id="icon">
                <button type="text">Icon</button>
            </div>
            <div id="content">
                <p>{task.title}</p>
                <p>{task.description}</p>
                <p>{task.completedname}</p>
                <p>{task.createdAt}</p>
            </div>
            <div>
                <button onClick={(e) => deleteTask(task.id)}>Delete</button>
                <Link to="/edit" state={{ taskId: task.id }}>
                    <button>Edit</button>
                </Link>
            </div>
        </div>
    );
}
