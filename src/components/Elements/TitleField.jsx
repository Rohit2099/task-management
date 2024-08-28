export default function TitleField({ reference, editMode, title }) {
    const defaultText = editMode ? title : "";
    return (
        <div>
            <input
                type="text"
                placeholder="Enter the title"
                ref={reference}
                defaultValue={defaultText}
                className="border-2 border-gray-300 text-md rounded-md focus:border-blue-500 w-full p-2.5"
            />
        </div>
    );
}
