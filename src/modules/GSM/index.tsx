import { useContext } from "react";
import Child1 from "./child1";
import Child2 from "./child2";
import NewContext from "../../config/newContext";

export default function GSM() {
    const data = useContext(NewContext)
    console.log(data);
    
    return (
        <>
            <Child1  />
            <Child2 />
        </>
    )
}