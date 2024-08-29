import { useContext, useRef, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import SearchField from "../elements/SearchField";
import Task from "../elements/Task";
import { useNavigate } from "react-router-dom";
import { debounce } from "../../utils/utils";
import { DEBOUNCE_DELAY_FOR_SEARCH } from "../../utils/constants";

export default function Home() {
    const { tasks, saveTasks } = useContext(TasksContext);
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const navigate = useNavigate();
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
        let searchText = searchRef.current.value;
        if (typeof searchText === "string") {
            searchText = searchText.toLowerCase();
            console.count("trigger filter");
            const newTasks = tasks.filter((task) => {
                return (
                    task.description.toLowerCase().includes(searchText) ||
                    task.title.toLowerCase().includes(searchText)
                );
            });

            setFilteredTasks(newTasks);
        }
    };

    return (
        <div>
            <SearchField
                reference={searchRef}
                handleSearch={debounce(filterTasks, DEBOUNCE_DELAY_FOR_SEARCH)}
            />
            <div className="py-4">
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
            </div>
            <div className="flex items-center justify-end">
                <button
                    type="button"
                    className="text-white bg-blueMain-100 hover:bg-blue-800 font-light rounded-full text-2xl p-4 items-center w-16 fixed bottom-5 right-50 z-10"
                    onClick={() => navigate("/add")}
                >
                    +
                </button>
            </div>
        </div>
    );
}
