import { LandingPage, Resume } from "./sections"
import { Congratulations } from "./components"
import { Routes, Route } from "react-router-dom"


const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Congratulations" element={<Congratulations />} />
                <Route path="/*" element={<Resume />} />
            </Routes>
        </div>
    )
}

export default App
