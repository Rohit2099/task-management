export default function TitleField({ reference, editMode, title }) {
    const defaultText = editMode ? title : "";
    return (
        <div>
            <input
                id="title"
                type="text"
                placeholder="Enter the title"
                ref={reference}
                defaultValue={defaultText}
            />
        </div>
    );
}
