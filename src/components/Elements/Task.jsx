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
            className="flex items-start border-b-2 border-gray-100 rounded-md hover:bg-gray-100 hover:cursor-pointer px-6 space-x-5"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <div className="py-5">
                <FontAwesomeIcon
                    icon={faListCheck}
                    size="2xl"
                    style={{ color: "#034EA2" }}
                />
            </div>
            <div
                id="content"
                className="flex flex-col justify-between py-5 leading-relaxed space-y-2 w-full"
            >
                <div className="flex justify-between">
                    <span className="text-blue-800 font-semibold text-xl">
                        {task.title}
                    </span>
                    <TaskStatus status={task.status} />
                </div>
                <div className="text-wrap font-normal">
                    <p>{task.description}</p>
                </div>
                <div className="flex justify-between text-gray-400 font-normal text-sm">
                    <p>{task.createdAt}</p>
                    {hovering && (
                        <div className="flex space-x-4">
                            <FontAwesomeIcon
                                icon={faTrashCan}
                                size="xl"
                                style={{ color: "#bc2424" }}
                                onClick={() => deleteTask(task.id)}
                            />
                            <FontAwesomeIcon
                                icon={faPen}
                                size="xl"
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
