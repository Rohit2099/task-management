import { BrowserRouter, Routes, Route } from "react-router-dom";
import TasksProvider from "./data/TasksContext";
import Home from "./Home";

function App() {
    return (
        <TasksProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </TasksProvider>
    );
}

export default App;
