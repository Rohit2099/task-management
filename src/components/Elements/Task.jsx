import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faListCheck,
    faPen,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import TaskStatus from "./TaskStatus";
import { useState } from "react";

export default function Task({ task, deleteTask }) {
    const navigate = useNavigate();
    const [hovering, setHovering] = useState(false);

    const handleMouseOver = () => setHovering(true);
    const handleMouseOut = () => setHovering(false);

    return (
        <div
            className="flex items-center border border-gray-100 rounded-md shadow hover:bg-gray-100 hover:cursor-pointer"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <FontAwesomeIcon
                icon={faListCheck}
                size="2xl"
                style={{ color: "#034EA2" }}
            />
            <div
                id="content"
                className="flex flex-col justify-between p-5 leading-relaxed space-y-2"
            >
                <div className="flex justify-between">
                    <span className="text-blue-800 font-bold text-xl">
                        {task.title}
                    </span>
                    <TaskStatus status={task.status} />
                </div>
                <div className="text-wrap">
                    <p>{task.description}</p>
                </div>
                <div className="flex justify-between text-gray-400 text-sm">
                    <p>{task.createdAt}</p>
                    {hovering && (
                        <div className="flex space-x-4">
                            <FontAwesomeIcon
                                icon={faTrashCan}
                                style={{ color: "#bc2424" }}
                                onClick={() => deleteTask(task.id)}
                            />
                            <FontAwesomeIcon
                                icon={faPen}
                                style={{ color: "#034EA2" }}
                                onClick={() =>
                                    navigate("/edit", {
                                        state: { taskId: task.id },
                                    })
                                }
                            ></FontAwesomeIcon>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
