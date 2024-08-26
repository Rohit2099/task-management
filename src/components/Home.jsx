import { useContext } from "react";
import { AuthContext } from "./data/TasksContext";
export default function Home() {
    return <div> {useContext(AuthContext).tasks}</div>;
}
