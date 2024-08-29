import { TASK_STATUS } from "../../utils/constants";
import TaskStatus from "../elements/TaskStatus";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function CompletionField({ setStatus, status }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(status);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        setStatus(option);
    };

    const handleClickOutside = (event) => {
        const container = document.getElementById("select-container");
        if (container && !container.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div id="select-container">
            <div
                className="flex justify-between items-center p-2 border-2 border-gray-300 hover:cursor-pointer"
                onClick={toggleDropdown}
            >
                <TaskStatus status={selectedOption} />
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </div>
            {isOpen && (
                <div className="w-full border border-gray-200 my-2">
                    {TASK_STATUS.map((option, index) => (
                        <div
                            key={index}
                            className="p-2 hover:bg-gray-200 hover:cursor-pointer mx-3"
                            onClick={() => handleOptionClick(option)}
                        >
                            <TaskStatus status={option} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
