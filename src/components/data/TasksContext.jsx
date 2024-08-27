import { createContext } from "react";
import { useState } from "react";

export const TasksContext = createContext(null);

export default function TasksProvider({ children }) {
    const storedTasks = localStorage.getItem("tasks") ?? "rohit";
    const [tasks, setTasks] = useState(storedTasks);

    return (
        <TasksContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TasksContext.Provider>
    );
}
