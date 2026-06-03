import { LandingPage, Resume } from "./sections"
import { Congratulations, Register, Login, ForgotPassword, OTP, CreatePassword } from "./components"
import { Routes, Route } from "react-router-dom"


const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/otp" element={<OTP />} />
                <Route path="/create-password" element={<CreatePassword />} />
                <Route path="/Congratulations" element={<Congratulations />} />
                <Route path="/*" element={<Resume />} />
            </Routes>
        </div>
    )
}

export default App
