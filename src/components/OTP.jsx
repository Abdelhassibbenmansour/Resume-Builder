import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../sections/Auth';
import { BsArrowLeft } from 'react-icons/bs';

const OTP = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState(['', '', '', '']);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const handleChange = (index, value) => {
        if (value.length > 1) {
            value = value.charAt(0);
        }

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < 3) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    return (
        <Auth>
            <button
                onClick={() => navigate('/forgot-password')}
                className="absolute top-2 left-8 p-2 cursor-pointer hover:bg-gray-100 active:bg-gray-200 rounded-full transition-colors"
                aria-label="Go back to Forgot Password"
            >
                <BsArrowLeft className="text-2xl text-gray-800" />
            </button>

            <div className="flex flex-col items-center justify-center mt-12 mb-10">
                <h1 className="text-2xl md:text-3xl font-bold text-[#1E1E1E] mb-3">
                    Enter confirmation code
                </h1>
                <p className="text-[#666666] text-sm text-center max-w-[320px]">
                    We emailed you a code. Please input the code here for account verification
                </p>
            </div>

            <form className="w-full flex flex-col items-center" onSubmit={(e) => e.preventDefault()}>
                <div className="flex space-x-3 md:space-x-4 justify-center mb-10 w-full">
                    {code.map((digit, index) => (
                        <input
                            key={index}
                            ref={inputRefs[index]}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className="w-14 h-14 md:w-16 md:h-16 border border-[#E4E7EB] rounded-md text-center text-xl font-semibold text-[#1E1E1E] focus:outline-none focus:border-[#EB5757] transition-colors shadow-sm"
                        />
                    ))}
                </div>

                <button
                    type="button"
                    onClick={() => navigate('/create-password')}
                    className="form-button w-full"
                >
                    Continue
                </button>
            </form>
        </Auth>
    );
};

export default OTP;
