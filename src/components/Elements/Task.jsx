import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

export default function Task({ task }) {
    return (
        <div>
            <div id="icon">
                <button type="text">Icon</button>
            </div>
            <div id="content">
                <p>{task.name}</p>
                <p>{task.description}</p>
                <p>{task.completedname}</p>
                <p>{task.createdAt}</p>
            </div>
        </div>
    );
}
