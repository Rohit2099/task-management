export default function DescriptionField({ reference, editMode, description }) {
    const defaultText = editMode ? description : "";
    return (
        <div>
            <textarea
                rows="5"
                placeholder="Enter the description"
                ref={reference}
                defaultValue={defaultText}
                className="border border-gray-300 text-md rounded-md focus:border-blue-500 w-full p-2.5"
            ></textarea>
        </div>
    );
}
