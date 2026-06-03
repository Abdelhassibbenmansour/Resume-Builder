import { useNavigate } from 'react-router-dom';
import Auth from '../sections/Auth';
import { BsArrowLeft } from 'react-icons/bs';

const Login = () => {
    const navigate = useNavigate();

    return (
        <Auth>
            <button
                onClick={() => navigate('/')}
                className="absolute top-2 left-8 p-2 cursor-pointer hover:bg-gray-100 active:bg-gray-200 rounded-full transition-colors"
                aria-label="Go back"
            >
                <BsArrowLeft className="text-2xl text-gray-800" />
            </button>

            <div className="flex border-b border-gray-200 mb-8 mt-12 w-full relative">
                <button 
                    onClick={() => navigate('/register')}
                    className="flex-1 pb-4 text-center font-bold text-[13px] tracking-wider text-[#1E1E1E]/50 hover:text-[#1E1E1E] transition-colors"
                >
                    REGISTER
                </button>
                <button className="flex-1 pb-4 text-center font-bold text-[13px] tracking-wider text-[#1E1E1E]">
                    LOG IN
                </button>
                <div className="absolute bottom-[-1px] left-1/2 w-1/2 h-[2px] bg-[#EB5757] animate-[slideFromLeft_0.3s_ease-out]" />
            </div>

            <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                <div className="label text-sm mb-2">Email address</div>
                <input type="email" placeholder="johndoe@gmail.com" className="input w-full! mb-4" />

                <div className="label text-sm mb-2">Password</div>
                <input type="password" placeholder="••••••••" className="input w-full! mb-2" />

                <div className="flex justify-end mb-8">
                    <button
                        type="button"
                        onClick={() => navigate('/forgot-password')}
                        className="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                    >
                        Forgot password?
                    </button>
                </div>

                <button type="submit" className="form-button w-full!">
                    Log In
                </button>
            </form>
        </Auth>
    );
};

export default Login;
