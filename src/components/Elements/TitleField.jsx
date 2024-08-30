import { useEffect } from "react";

export default function TitleField({ reference, editMode, title }) {
    const defaultText = editMode ? title : "";

    useEffect(() => {
        reference.current.oninvalid = function (e) {
            e.target.setCustomValidity("No title -> No task!");
        };
        reference.current.oninput = function (e) {
            e.target.setCustomValidity("");
        };
    }, [reference]);

    return (
        <div>
            <input
                type="text"
                placeholder="Enter the title"
                ref={reference}
                defaultValue={defaultText}
                className="border border-gray-300 text-md rounded-md focus:border-blue-500 w-full p-2.5"
                required
                autoFocus
            />
        </div>
    );
}
