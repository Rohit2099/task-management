import { createContext } from "react";
import { useState } from "react";

const AuthContext = createContext(null);
export { AuthContext };

export default function AuthProvider({ children }) {
    const storedTasks = localStorage.getItem("tasks") ?? null;
    const [tasks, setTasks] = useState(storedTasks);

    return (
        <AuthContext.Provider value={{ tasks, setTasks }}>
            {children}
        </AuthContext.Provider>
    );
}
