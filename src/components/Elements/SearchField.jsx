export default function SearchField({ reference, handleSearch }) {
    return (
        <div className="border-opacity-20 border-green-500 border-8 ">
            <input
                ref={reference}
                className="border-2 border-black rounded-md"
                type="text"
                placeholder="Search"
                onChange={handleSearch}
            ></input>
        </div>
    );
}
