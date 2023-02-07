import { useContext } from "react";
import { TestContext } from "~popup/context";

export default function Highlighter() {
    const value = useContext(TestContext)

    return (
        <div>
            highlighter the new answer is {value}

        </div>
    )


}