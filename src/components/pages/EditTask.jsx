import { useLocation, Link, useNavigate } from "react-router-dom";
import CompletionField from "../Elements/CompletionField";
import DescriptionField from "../Elements/DescriptionField";
import TitleField from "../Elements/TitleField";
import { useContext, useRef } from "react";
import { TasksContext } from "../context/TasksContext";
import ErrorPage from "./ErrorPage";

export default function EditTask() {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const { tasks, saveTasks } = useContext(TasksContext);
    const taskId = location.state?.taskId;

    if (!taskId) {
        return <ErrorPage />;
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
                <button type="text"> Cancel </button>
            </Link>{" "}
            <button type="text" onClick={editTask}>
                {" "}
                Edit
            </button>
        </div>
    );
}
