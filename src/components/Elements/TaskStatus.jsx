import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { STATUS_TO_COLOR } from "../../utils/constants";
import { useLocation } from "react-router-dom";

export default function PendingStatus({ status }) {
    const location = useLocation();
    const spacing = location.pathname === "/" ? "space-x-1" : "space-x-3";
    return (
        <div className={spacing}>
            <FontAwesomeIcon
                icon={faCircle}
                style={{ color: `${STATUS_TO_COLOR[status]}` }}
            />
            <span>{status}</span>
        </div>
    );
}
