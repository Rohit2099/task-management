import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { PATH_TO_TITLE } from "../../utils/constants";

export default function NavBar() {
    const location = useLocation();
    const navigate = useNavigate();
    const title = PATH_TO_TITLE[location.pathname] ?? "Error";
    const isHomePage = location.pathname === "" || location.pathname === "/";
    return (
        <nav className="border-blue-500 bg-blueMain-100">
            <div className="flex items-center space-x-4 pl-1 mx-4 py-3">
                {!isHomePage && (
                    <button
                        className="hover:cursor-pointer hover:border-2 hover:rounded-md w-10 h-10 hover:border-gray-200"
                        onClick={() => navigate(-1)}
                    >
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            size="2xl"
                            alt="Back button"
                            style={{ color: "white" }}
                        />
                    </button>
                )}
                <span className="text-xl font-normal text-white">{title}</span>
            </div>
        </nav>
    );
}
