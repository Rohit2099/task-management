import { useContext } from "react";
import { AuthContext } from "./data/Context";
export default function Home() {
    return <div> {useContext(AuthContext).tasks}</div>;
}
