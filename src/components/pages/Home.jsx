import { useContext, useRef, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import SearchField from "../elements/SearchField";
import Task from "../elements/Task";
import { Link } from "react-router-dom";
import { debounce } from "../../utils/utils";
import { DEBOUNCE_DELAY_FOR_SEARCH } from "../../utils/constants";

export default function Home() {
    const { tasks, saveTasks } = useContext(TasksContext);
    const [filteredTasks, setFilteredTasks] = useState(tasks);

    const searchRef = useRef(null);

    const deleteTask = (id) => {
        const newTasks = tasks.filter((task) => {
            return task.id !== id;
        });
        const newFilteredTasks = filteredTasks.filter((task) => {
            return task.id !== id;
        });

        saveTasks(newTasks);
        setFilteredTasks(newFilteredTasks);
    };
    const filterTasks = () => {
        const searchText = searchRef.current.value;
        console.count("trigger filter");
        const newTasks = tasks.filter((task) => {
            return (
                task.description.includes(searchText) ||
                task.title.includes(searchText)
            );
        });

        setFilteredTasks(newTasks);
    };

    return (
        <div>
            <SearchField
                reference={searchRef}
                handleSearch={debounce(filterTasks, DEBOUNCE_DELAY_FOR_SEARCH)}
            />
            {filteredTasks && (
                <ul>
                    {filteredTasks.map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                            deleteTask={deleteTask}
                        />
                    ))}
                </ul>
            )}
            <Link to="/add">
                <button type="text">Add</button>
            </Link>
        </div>
    );
}
