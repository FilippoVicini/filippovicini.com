// components/ProfileSection.tsx

const Work: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto my-10 p-8">
            {/* Work Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold border-b-2 border-black mb-4">Work</h2>
                <p className="text-gray-700 mb-4">
                    Filippo is a CS student and a full-stack developer based in London with a passion for building digital services/stuff he wants...
                    {/* truncated for brevity */}
                </p>
                <button className="bg-[#e7e2df] text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <span>My portfolio</span>
                    {/* You may replace the SVG with an actual icon component from a library like `react-icons` if needed */}
                    <svg className="fill-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </button>
            </div>

            {/* Bio Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold border-b-2 border-black mb-4">Bio</h2>
                <p className="text-gray-700 mb-2">2005 - Born in Italy</p>
                <p className="text-gray-700 mb-2">2022 to 2023- Mobile Developer (Freelance)</p>
                <p className="text-gray-700 mb-2">2023 to present- Bachelor Computer Science London</p>
                <p className="text-gray-700 mb-2">2023 to present- Moblile and Web Dev Intern (Qwanas Ltd)</p>

            </div>

            {/* Interests Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">I ❤️</h2>
                <p className="text-gray-700">Kiting, Surfing, Cycling, Hiking, Formula1, Photography, Programming, Machine Learning</p>
            </div>
        </div>
    );
};

export default Work;
