import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./components/data/Context";
import Home from "./components/Home";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
