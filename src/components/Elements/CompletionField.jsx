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
        <div id="select-container" className="relative">
            <div
                className="flex justify-between items-center p-2 px-4 border border-gray-300 hover:cursor-pointer"
                onClick={toggleDropdown}
            >
                <TaskStatus status={selectedOption} />
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </div>
            {isOpen && (
                <div className="w-full border border-gray-300 my-2 py-3 z-10 absolute bg-white">
                    {TASK_STATUS.map((option, index) => (
                        <div
                            key={index}
                            className="p-3 hover:bg-gray-200 hover:cursor-pointer mx-3 "
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
