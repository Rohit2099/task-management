import { TasksContext } from "../context/TasksContext";
import DescriptionField from "../Elements/DescriptionField";
import TitleField from "../Elements/TitleField";
import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function AddTask() {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const { tasks, saveTasks } = useContext(TasksContext);
    const navigate = useNavigate();
    const onAdd = () => {
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;

        const newTask = {
            id: uuidv4(),
            title,
            description,
            completed: "Pending",
            createdAt: new Date().toDateString(),
        };

        saveTasks([...tasks, newTask]);
        navigate("/");
    };
    return (
        <div>
            <TitleField reference={titleRef} />
            <DescriptionField reference={descriptionRef} />
            <Link to="/">
                <button type="text"> Cancel </button>
            </Link>

            <button type="text" onClick={onAdd}>
                {" "}
                Add
            </button>
        </div>
    );
}
