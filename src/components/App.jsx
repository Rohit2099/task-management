import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import TasksProvider from "./context/TasksContext";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";

function App() {
    return (
        <TasksProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<AddTask />} />
                    <Route path="/edit" element={<EditTask />} />
                </Routes>
            </BrowserRouter>
        </TasksProvider>
    );
}

export default App;
