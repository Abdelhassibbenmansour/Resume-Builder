import { CovertLetter, LeftArrow, RightArrow } from "../images"

const Description = ({ title, text }) => {
    return (
        <div>
            <div className="text-[#000112] font-bold max-sm:text-base text-xl mb-4">{title}</div>
            <p className="text-[#404653] max-sm:text-sm text-base leading-[30px]">{text}</p>
        </div>
    )
}

const Features = () => {
    return (
        <div className="container">
            <div className="title text-center mb-8">Feature</div>
            <div className="flex justify-between items-center md:space-x-38 max-sm:flex-col">
                <div className="flex flex-col justify-between">
                    <Description
                        title="Templates"
                        text="A variety of pre-designed and customizable resume templates catering to different industries, roles, and design preferences."
                    />
                    <div className="w-full max-w-[608px] h-auto my-6">
                        <img src={CovertLetter} alt="Cover Letter" className="w-full" />
                    </div>
                    <Description
                        title="Customization Options"
                        text="Ability to customize templates by changing colors, layouts, and adding personal branding elements, drag-and-drop functionality to rearrange sections and content blocks."
                    />
                </div>
                <div className="flex flex-col justify-between">
                    <div className="my-10 w-full max-w-[372px] max-sm:max-w-[250px]">
                        <img src={RightArrow} alt="Right Arrow" />
                    </div>
                    <Description
                        title="Free Cover Letter"
                        text="With each of our professionally designed resume templates, you'll receive a FREE cover letter template that's perfectly matched to your chosen resume style. Our cover letter templates are designed to help you:"
                    />
                    <div className="my-4 w-full max-w-[410px] max-sm:hidden">
                        <img src={LeftArrow} alt="Left Arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
