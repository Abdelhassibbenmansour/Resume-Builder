import { Auth as AuthImage } from '../images';

const Auth = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-white font-['Nunito']">
            <div className="hidden md:block md:w-1/2 h-screen relative sticky top-0">
                <img src={AuthImage} alt="Authentication" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 flex justify-center min-h-screen">
                <div className="w-full max-w-[580px] px-8 py-10 relative flex flex-col">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Auth;
