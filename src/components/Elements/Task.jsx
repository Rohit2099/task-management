import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

export default function Task({ task, deleteTask }) {
    return (
        <div className="flex items-center border border-gray-100 rounded-md shadow hover:bg-gray-100">
            <FontAwesomeIcon
                icon={faListCheck}
                size="2xl"
                style={{ color: "#034EA2" }}
            />
            <div
                id="content"
                className="flex flex-col justify-between p-5 leading-relaxed"
            >
                <div className="flex justify-between">
                    <span className="text-blue-800 font-bold text-xl">
                        {task.title}
                    </span>
                    <span>{task.completed}</span>
                </div>
                <div className="text-wrap">
                    <p>{task.description}</p>
                </div>
                <div className="flex justify-between text-gray-400">
                    <p>{task.createdAt}</p>
                    <div className="flex">
                        <img
                            src="../../../public/delete.png"
                            className="w-3 h-4 hover:cursor-pointer"
                            onClick={(e) => deleteTask(task.id)}
                        />
                        <Link to="/edit" state={{ taskId: task.id }}>
                            <img
                                src="../../../public/pen.png"
                                className="w-3 h-4 hover:cursor-pointer"
                            />{" "}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
