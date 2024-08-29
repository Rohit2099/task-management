import { useContext, useRef, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import SearchField from "../elements/SearchField";
import { useNavigate } from "react-router-dom";
import { debounce } from "../../utils/utils";
import { DEBOUNCE_DELAY_FOR_SEARCH, TASK_STATUS } from "../../utils/constants";
import Accordian from "../elements/Accordian";

const getTasksGroupedByStatus = (tasks) => {
    let newTasks = new Array(3);

    for (let i = 0; i < TASK_STATUS.length; i++) {
        newTasks[i] = { status: TASK_STATUS[i] };
        newTasks[i].tasks = tasks.filter((task) => {
            return task.status === TASK_STATUS[i];
        });
    }

    return newTasks;
};

export default function Home() {
    const { tasks, saveTasks } = useContext(TasksContext);
    const [filteredTasks, setFilteredTasks] = useState(() => {
        let groupedTasks = getTasksGroupedByStatus(tasks);
        return groupedTasks;
    });
    const navigate = useNavigate();
    const searchRef = useRef(null);
    let closeAccordian = false;

    const deleteTask = (id, status) => {
        const newTasks = tasks.filter((task) => {
            return task.id !== id;
        });
        const idx = TASK_STATUS.indexOf(status);
        filteredTasks[idx].tasks = filteredTasks[idx].tasks.filter((task) => {
            return task.id !== id;
        });

        saveTasks(newTasks);
        setFilteredTasks([...filteredTasks]);
    };
    const filterTasks = () => {
        let searchText = searchRef.current.value;
        if (typeof searchText === "string") {
            searchText = searchText.toLowerCase();
            const newTasks = tasks.filter((task) => {
                return (
                    task.description.toLowerCase().includes(searchText) ||
                    task.title.toLowerCase().includes(searchText)
                );
            });
            const groupedTasks = getTasksGroupedByStatus(newTasks);
            setFilteredTasks(groupedTasks);
        }
    };

    return (
        <div>
            <SearchField
                reference={searchRef}
                handleSearch={debounce(filterTasks, DEBOUNCE_DELAY_FOR_SEARCH)}
            />
            <div className="py-4 flex flex-col space-y-4">
                {filteredTasks.map((groupedTasks, idx) => {
                    let openAccordian = !closeAccordian;
                    closeAccordian =
                        closeAccordian || groupedTasks.tasks.length > 0;
                    return (
                        <Accordian
                            key={idx}
                            status={groupedTasks.status}
                            tasks={groupedTasks.tasks}
                            deleteTask={deleteTask}
                            openAccordian={openAccordian}
                        />
                    );
                })}
            </div>
            <div className="flex items-center justify-end">
                <button
                    type="button"
                    className="text-white bg-blueMain-100 hover:bg-blue-800 font-light rounded-full text-2xl p-4 items-center w-16 fixed bottom-8 right-50 z-10"
                    onClick={() => navigate("/add")}
                >
                    +
                </button>
            </div>
        </div>
    );
}
