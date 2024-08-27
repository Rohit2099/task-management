import CompletionField from "../Elements/CompletionField";
import DescriptionField from "../Elements/DescriptionField";
import TitleField from "../Elements/TitleField";

export default function AddTask() {
    return (
        <div>
            <TitleField />
            <DescriptionField />
            <CompletionField />
            <button type="text"> Cancel </button>
            <button type="text"> Edit</button>
        </div>
    );
}
