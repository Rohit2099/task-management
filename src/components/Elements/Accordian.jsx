import Task from "./Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Accordian({
    status,
    tasks,
    deleteTask,
    openAccordian,
}) {
    const [isOpen, setIsOpen] = useState(openAccordian);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div id="accordian-container" className="flex flex-col space-y-4">
            <div
                id="accordian-header"
                className="bg-gray-200 px-4 py-2 rounded-md flex justify-between items-center hover:cursor-pointer"
                onClick={handleToggle}
            >
                <div>{`${status} (${tasks.length})`}</div>
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </div>
            {isOpen && tasks.length > 0 && (
                <div id="accordian-body">
                    {tasks.length > 0 && (
                        <ul>
                            {tasks.map((task) => (
                                <Task
                                    key={task.id}
                                    task={task}
                                    deleteTask={deleteTask}
                                />
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}
