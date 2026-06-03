import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../sections/Auth';
import { BsArrowLeft } from 'react-icons/bs';

const CreatePassword = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        if (!password || !confirmPassword) {
            setError("Both fields are required.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        setError('');
        navigate('/PersonalInfo');
    };

    return (
        <Auth>
            <button
                onClick={() => navigate('/otp')}
                className="absolute top-2 left-8 p-2 cursor-pointer hover:bg-gray-100 active:bg-gray-200 rounded-full transition-colors"
                aria-label="Go back to OTP"
            >
                <BsArrowLeft className="text-2xl text-gray-800" />
            </button>

            <div className="flex flex-col items-center justify-center mt-12 mb-10">
                <h1 className="text-2xl md:text-3xl font-bold text-[#1E1E1E] mb-2">
                    Create Password
                </h1>
                <p className="text-[#666666] text-sm text-center">
                    Please create a new password
                </p>
            </div>

            <form className="w-full" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <div className="label text-sm mb-2">Create New Password</div>
                <input
                    type="password"
                    placeholder="••••••••"
                    className="input w-full! mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <div className="label text-sm mb-2">Confirm New Password</div>
                <input
                    type="password"
                    placeholder="••••••••"
                    className={`input w-full! ${error ? 'mb-2 border-red-500 focus:border-red-500' : 'mb-8'}`}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <button
                    type="submit"
                    className="form-button w-full!"
                >
                    Submit
                </button>
            </form>
        </Auth>
    );
};

export default CreatePassword;
