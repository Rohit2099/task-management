import { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import SearchField from "../Elements/SearchField";
import Task from "../Elements/Task";

export default function Home() {
    let { tasks, saveTasks } = useContext(TasksContext);

    const filterTasks = (searchText) => {
        /*
        Code to filter tasks based on text
        */
        // setTasks(tasks);
    };

    return (
        <div>
            <SearchField handleSearch={filterTasks} />
            {tasks && (
                <ul>
                    {tasks.map((task) => (
                        <Task key={task.id} task={task} />
                    ))}
                </ul>
            )}
        </div>
    );
}
