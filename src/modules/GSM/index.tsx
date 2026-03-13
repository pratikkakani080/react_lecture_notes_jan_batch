import { useState } from "react";
import Child1 from "./child1";
import Child2 from "./child2";

export default function GSM() {
    const [C1, setC1] = useState('')
    return (
        <>
            <Child1 setC1={setC1} />
            <Child2 C1={C1} />
        </>
    )
}