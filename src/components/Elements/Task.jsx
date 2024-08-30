import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import TaskStatus from "./TaskStatus";
import { useEffect, useState, useRef } from "react";

export default function Task({ task, deleteTask }) {
    const navigate = useNavigate();
    const [hovering, setHovering] = useState(false);
    const pRef = useRef(null);

    const handleMouseOver = () => setHovering(true);
    const handleMouseOut = () => setHovering(false);
    const iconForTask = /[a-zA-Z]/g.test(task.title[0])
        ? task.title[0].toLowerCase()
        : "list-check";

    useEffect(() => {
        pRef.current.innerHTML = task.description;
    }, [task.description]);

    return (
        <div
            className="flex items-start border-b-2 border-gray-100 rounded-md hover:bg-gray-100 hover:cursor-pointer px-6 space-x-5"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <div className="py-5">
                <FontAwesomeIcon
                    icon={["fas", iconForTask]}
                    size="2xl"
                    style={{ color: "#034EA2" }}
                />
            </div>
            <div
                id="content"
                className="flex flex-col justify-between pt-4 pb-2 leading-relaxed space-y-2 w-full"
            >
                <div className="flex justify-between">
                    <span className="text-blue-800 font-semibold text-xl">
                        {task.title}
                    </span>
                    <TaskStatus status={task.status} />
                </div>
                <div className="text-wrap font-normal">
                    <p ref={pRef}></p>
                </div>
                <div className="flex justify-between text-gray-400 font-normal text-sm items-center min-h-10">
                    <div>
                        <p>{task.createdAt}</p>
                    </div>
                    {hovering && (
                        <div className="flex space-x-2 items-center">
                            <button
                                onClick={() =>
                                    navigate("/edit", {
                                        state: { taskId: task.id },
                                    })
                                }
                                className="hover:bg-gray-200 hover:border-2 w-10 h-10 hover:rounded-md"
                            >
                                <FontAwesomeIcon
                                    icon={faPen}
                                    size="xl"
                                    style={{ color: "#034EA2" }}
                                ></FontAwesomeIcon>
                            </button>
                            <button
                                className="hover:bg-gray-200 hover:border-2 w-10 h-10 box-border hover:rounded-md"
                                onClick={() => deleteTask(task.id, task.status)}
                            >
                                <FontAwesomeIcon
                                    icon={faTrashCan}
                                    size="xl"
                                    style={{ color: "#bc2424" }}
                                />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
