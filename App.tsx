import {
    Route, Routes, MemoryRouter
} from "react-router-dom";
import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import Home from "~popup/component/pages/Home";
import TextSettings from "~popup/component/pages/TextSettings";
import Highlighter from "~popup/component/pages/Highlighter";
import { TestContext } from "~popup/context";




// const SampleAppContext: AppContextInterface = {
//     num: 1000,
// }

export default function App() {
    return (
        <TestContext.Provider value={3000}>
            <MemoryRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/text-settings" element={<TextSettings />}></Route>
                    <Route path="/text-settings" element={<TextSettings />}></Route>
                    <Route path="/highlighter" element={<Highlighter />}></Route>
                </Routes>


            </MemoryRouter>
        </TestContext.Provider>)

}