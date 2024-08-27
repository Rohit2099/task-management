export default function TitleField({ reference, editMode, title }) {
    return (
        <div>
            <input
                id="title"
                type="text"
                placeholder="Enter the title"
                ref={reference}
                defaultValue={editMode && title}
            />
        </div>
    );
}
