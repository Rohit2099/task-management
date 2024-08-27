export default function SearchField({ handleSearch }) {
    return (
        <div className="border-opacity-20 border-green-500 border-8 ">
            <input
                className="border-2 border-black rounded-md"
                type="text"
                placeholder="Search"
                onChange={handleSearch}
            ></input>
        </div>
    );
}
