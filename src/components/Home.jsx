import { useContext } from "react";
import { TasksContext } from "./data/TasksContext";
export default function Home() {
    return <div> {useContext(TasksContext).tasks}</div>;
}
