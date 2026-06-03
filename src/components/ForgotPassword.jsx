import { useNavigate } from 'react-router-dom';
import Auth from '../sections/Auth';
import { BsArrowLeft } from 'react-icons/bs';

const ForgotPassword = () => {
    const navigate = useNavigate();

    return (
        <Auth>
            <button
                onClick={() => navigate('/login')}
                className="absolute top-2 left-8 p-2 cursor-pointer hover:bg-gray-100 active:bg-gray-200 rounded-full transition-colors"
                aria-label="Go back to Login"
            >
                <BsArrowLeft className="text-2xl text-gray-800" />
            </button>

            <div className="flex flex-col items-center justify-center mt-12 mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-[#1E1E1E] mb-3">
                    Forgot Password
                </h1>
                <p className="text-[#666666] text-sm text-center max-w-[280px]">
                    Enter the email address associated with your account
                </p>
            </div>

            <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                <div className="label text-sm mb-2">Email Address</div>
                <input type="email" className="input w-full! mb-8" />

                <button
                    type="button"
                    onClick={() => navigate('/otp')}
                    className="form-button w-full!"
                >
                    Send
                </button>
            </form>
        </Auth>
    );
};

export default ForgotPassword;
