import { LandingPage, Resume } from "./sections"
import { Routes, Route } from "react-router-dom"


const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/*" element={<Resume />} />
            </Routes>
        </div>
    )
}

export default App
