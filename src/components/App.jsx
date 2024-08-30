import { BrowserRouter, Routes, Route } from "react-router-dom";
import TasksProvider from "./context/TasksContext";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import Error from "./pages/Error";
import NavBar from "./elements/NavBar";
import { loadAllSolidIcons } from "../utils/utils";

function App() {
    loadAllSolidIcons();

    return (
        <TasksProvider>
            <BrowserRouter>
                <div
                    id="app-container"
                    className="w-3/5 m-auto bg-white min-h-full flex flex-col h-auto"
                >
                    <NavBar />
                    <div id="content-container" className="m-6 h-full">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/add" element={<AddTask />} />
                            <Route path="/edit" element={<EditTask />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </TasksProvider>
    );
}

export default App;
