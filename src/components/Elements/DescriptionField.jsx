export default function DescriptionField({ reference, editMode, description }) {
    const defaultText = editMode ? description : "";
    return (
        <div>
            <textarea
                rows="5"
                cols="50"
                placeholder="Enter description"
                ref={reference}
                defaultValue={defaultText}
            ></textarea>
        </div>
    );
}
