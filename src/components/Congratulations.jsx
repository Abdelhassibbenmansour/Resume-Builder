import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { FiDownload } from 'react-icons/fi';
import ResumeNavbar from './ResumeNavbar';
import ResumePreview from './ResumePreview';
import { useDispatch } from 'react-redux';
import { setPage } from '../redux/links';

const Congratulations = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className="min-h-screen bg-[#E4E7EB] font-['Nunito']">
            <ResumeNavbar />

            {/* Main Content container */}
            <div className="container mt-4 md:mt-8 relative pt-10 md:pt-12">
                {/* Back Button */}
                <button
                    onClick={() => { navigate('/Resume'), dispatch(setPage('PersonalInfo')) }}
                    className="absolute top-0 left-4 md:left-2 p-2 cursor-pointer hover:bg-white active:bg-white rounded-full transition-colors inline-flex"
                    aria-label="Go back to Certification"
                >
                    <BsArrowLeft className="text-2xl text-gray-800" />
                </button>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 justify-between max-sm:mt-10">

                    {/* Left Column */}
                    <div className="flex flex-col flex-1 justify-center">
                        <div className="md:ml-4">
                            <h1 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
                                Congratulations
                                <span className="relative inline-block z-10 before:content-[''] before:absolute before:w-10 before:h-10 md:before:w-15 md:before:h-15 before:bg-[#0073E6]/24 before:rounded-full before:-z-10 before:left-[45%] before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 ml-1">
                                    !
                                </span>
                            </h1>
                            <p className="text-[#666666] text-lg md:text-[20px] mb-10 max-w-[400px] leading-relaxed font-['Poppins']">
                                Your resume is awesome ready for download. Get it in any format of your choice.
                            </p>
                            <button className="button w-full md:w-[280px] flex items-center justify-center space-x-3">
                                <span>Download</span>
                                <FiDownload className="text-xl" />
                            </button>
                        </div>
                    </div>

                    {/* Right Column (Preview) */}
                    <ResumePreview />

                </div>
            </div>
        </div>
    );
};

export default Congratulations;
