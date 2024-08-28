import { useLocation, useNavigate } from "react-router-dom";

const pathToTitleMap = {
    "/add": "Add Task",
    "/": "TO-DO APP",
    "/edit": "Edit Task",
};

export default function NavBar() {
    const location = useLocation();
    const navigate = useNavigate();
    const title = pathToTitleMap[location.pathname] ?? "Error";
    const isHomePage = location.pathname === "" || location.pathname === "/";
    return (
        <nav className="border-blue-500 bg-blue-800">
            <div className="max-w-full p-3">
                <span className="flex items-center space-x-4 pl-1">
                    {!isHomePage && (
                        <img
                            src="../../../public/left-chevron.png"
                            className="h-6 hover:cursor-pointer"
                            alt="Back button"
                            onClick={() => navigate(-1)}
                        />
                    )}
                    <span className="text-2xl font-semibold text-white">
                        {title}
                    </span>
                </span>
            </div>
        </nav>
    );
}
