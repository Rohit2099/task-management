export default function SearchField({ reference, handleSearch }) {
    return (
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                    className="w-4 h-4 text-blue-600"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
            </div>
            <input
                type="search"
                ref={reference}
                onChange={handleSearch}
                className="w-full p-3 ps-10 text-md text-gray-900 border border-gray-400 rounded-md bg-gray-50 focus:border-blue-500"
                placeholder="Search To-Do"
                required
            />
        </div>
    );
}
