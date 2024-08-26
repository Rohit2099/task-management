import { BrowserRouter, Routes, Route } from "react-router-dom";
import TasksProvider from "./components/data/TasksContext";
import Home from "./components/Home";

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
