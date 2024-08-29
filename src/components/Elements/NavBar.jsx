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
            <div className="max-w-full p-3">
                <span className="flex items-center space-x-4 pl-1">
                    {!isHomePage && (
                        <FontAwesomeIcon
                            className="hover:cursor-pointer"
                            icon={faArrowLeft}
                            size="2xl"
                            alt="Back button"
                            style={{ color: "white" }}
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
