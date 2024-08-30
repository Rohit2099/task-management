import { TasksContext } from "../context/TasksContext";
import DescriptionField from "../elements/DescriptionField";
import TitleField from "../elements/TitleField";
import { useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function AddTask() {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const { tasks, saveTasks } = useContext(TasksContext);
    const navigate = useNavigate();
    const onAdd = (e) => {
        e.preventDefault();
        let title = titleRef.current.value;
        let description = descriptionRef.current.value;
        const newTask = {
            id: uuidv4(),
            title,
            description,
            status: "Pending",
            createdAt: new Date().toDateString(),
        };

        saveTasks([...tasks, newTask]);
        navigate("/");
    };

    return (
        <div className="flex flex-col my-16">
            <form onSubmit={onAdd} className="space-y-4">
                <TitleField reference={titleRef} editMode={false} />
                <DescriptionField reference={descriptionRef} editMode={false} />
                <div id="button-container" className="flex justify-between">
                    <Link to="/">
                        <button
                            type="button"
                            className="text-blue-900 bg-white border border-blue-900 hover:bg-gray-200 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 w-32"
                        >
                            Cancel
                        </button>{" "}
                    </Link>

                    <button
                        type="submit"
                        className="text-white bg-blue-900 hover:bg-blue-800 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 w-32"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}
