import { useNavigate } from 'react-router-dom';
import Auth from '../sections/Auth';
import { BsArrowLeft } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Register = () => {
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
            <div className="flex border-b border-gray-200 mb-8 mt-12 w-full">
                <button className="flex-1 pb-4 text-center font-bold text-[13px] tracking-wider text-[#1E1E1E] border-b-2 border-[#EB5757]">
                    REGISTER
                </button>
                <button
                    onClick={() => navigate('/login')}
                    className="flex-1 pb-4 text-center font-bold text-[13px] tracking-wider text-[#1E1E1E]/50 border-b-2 border-transparent hover:text-[#1E1E1E] transition-colors"
                >
                    LOG IN
                </button>
            </div>
            <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                <div className="label text-sm mb-2">Email address</div>
                <input type="email" placeholder="johndoe@gmail.com" className="input w-full! mb-4" />

                <div className='w-full'>
                    <div className="label text-sm mb-2">Password</div>
                    <input type="password" placeholder="••••••••" className="input w-full! mb-4" />
                </div>

                <div className="label text-sm mb-2">Confirm password</div>
                <input type="password" placeholder="••••••••" className="input w-full! mb-8" />

                <button type="submit" className="form-button w-full! mb-4 cursor-not-allowed">
                    Create account
                </button>

                <button type="button" className="w-full mt-2 cursor-pointer h-[56px] border border-[#E4E7EB] rounded-md flex items-center justify-center space-x-3 hover:bg-gray-50 active:bg-gray-100 transition-colors text-[#404653] font-medium">
                    <FcGoogle className="text-xl" />
                    <span>Sign up with google</span>
                </button>

                <button type="button" className="w-full mt-4  cursor-pointer h-[56px] border border-[#E4E7EB] rounded-md flex items-center justify-center space-x-3 hover:bg-gray-50 active:bg-gray-100 transition-colors text-[#404653] font-medium">
                    <FaGithub className="text-xl" />
                    <span>Sign up with GitHub</span>
                </button>
            </form>
        </Auth>
    );
};

export default Register;
