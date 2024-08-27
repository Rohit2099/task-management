export default function DescriptionField({ reference }) {
    return (
        <div>
            <textarea rows="5" cols="50" ref={reference}></textarea>
        </div>
    );
}
