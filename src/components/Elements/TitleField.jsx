export default function TitleField({ reference }) {
    return (
        <div>
            <input
                id="title"
                type="text"
                placeholder="Enter the title"
                ref={reference}
            />
        </div>
    );
}
