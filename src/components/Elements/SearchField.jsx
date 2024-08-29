import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchField({ reference, handleSearch }) {
    return (
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ color: "#034EA2" }}
                />
            </div>
            <input
                type="search"
                ref={reference}
                onChange={handleSearch}
                className="w-full p-3 ps-10 text-gray-900 border border-gray-400 rounded-md bg-gray-50 focus:border-blue-500"
                placeholder="Search To-Do"
                required
            />
        </div>
    );
}
