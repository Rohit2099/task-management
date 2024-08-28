import { useLocation, useNavigate } from "react-router-dom";

const pathToTitleMap = {
    "/add": "Add Task",
    "": "TO-DO APP",
    "/": "TO-DO APP",
    "/edit": "Edit Task",
};

export default function NavBar() {
    const location = useLocation();
    const navigate = useNavigate();
    const title = pathToTitleMap[location.pathname] ?? "Error";
    const isHomePage = location.pathname === "" || location.pathname === "/";
    return (
        <div>
            {!isHomePage && (
                <button type="text" onClick={() => navigate(-1)}>
                    Back button
                </button>
            )}
            <span>{title}</span>
        </div>
    );
}
