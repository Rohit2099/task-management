import { useLocation, Link, useNavigate } from "react-router-dom";
import CompletionField from "../elements/CompletionField";
import DescriptionField from "../elements/DescriptionField";
import TitleField from "../elements/TitleField";
import { useContext, useRef } from "react";
import { TasksContext } from "../context/TasksContext";
import Error from "./Error";

export default function EditTask() {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const { tasks, saveTasks } = useContext(TasksContext);
    const taskId = location.state?.taskId;

    if (!taskId) {
        return <Error />;
    }
    const taskToEdit = tasks.find((task) => task.id === taskId);

    const editTask = () => {
        taskToEdit.description = descriptionRef.current.value;
        taskToEdit.title = titleRef.current.value;

        saveTasks([...tasks]);
        navigate("/");
    };

    return (
        <div>
            <TitleField
                reference={titleRef}
                title={taskToEdit.title}
                editMode={true}
            />
            <DescriptionField
                reference={descriptionRef}
                description={taskToEdit.description}
                editMode={true}
            />
            <CompletionField />
            <Link to="/">
                <button
                    type="button"
                    className="text-blue-900 bg-white border border-blue-900 hover:bg-gray-100 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 w-32"
                >
                    Cancel
                </button>
            </Link>
            <button
                type="button"
                onClick={editTask}
                className="text-white bg-blue-900 hover:bg-blue-800 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 w-32"
            >
                Update
            </button>
        </div>
    );
}
