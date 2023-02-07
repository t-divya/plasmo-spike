import NavigationMenu from "~popup/component/navigationMenu";
import { createContext, useContext } from "react";

interface NumberInterface {
    num: number
}

const SampleNumber: NumberInterface = {
    num: 10
}

const NumberContext = createContext<NumberInterface | null>(null)




export default function Home() {
    return (
        <NumberContext.Provider value={SampleNumber}>
            <NavigationMenu />
        </NumberContext.Provider>

    )


}