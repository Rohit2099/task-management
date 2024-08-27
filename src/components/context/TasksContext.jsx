import { createContext } from "react";
import { useState } from "react";

export const TasksContext = createContext(null);

export default function TasksProvider({ children }) {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
        return storedTasks;
    });

    const saveTasks = (newTasks) => {
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    };

    return (
        <TasksContext.Provider value={{ tasks, saveTasks }}>
            {children}
        </TasksContext.Provider>
    );
}
