import {
    Route, Routes, MemoryRouter
} from "react-router-dom"
import Home from "~popup/component/pages/Home";
import TextSettings from "~popup/component/pages/TextSettings";
import Highlighter from "~popup/component/pages/Highlighter";


export default function App() {
    return (
        <MemoryRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/text-settings" element={<TextSettings />}></Route>
                <Route path="/text-settings" element={<TextSettings />}></Route>
                <Route path="/highlighter" element={<Highlighter />}></Route>
            </Routes>


        </MemoryRouter>)

}