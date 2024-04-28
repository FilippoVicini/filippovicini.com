// components/TakuyaMatsuyamaCard.js

import Image from "next/image";

const ProfileCard = () => {
    return (
        <div className="flex flex-col justify-center items-center ">
            <Image src="/profile.jpg" width={400} // Set the image size
                   height={400}
            alt="hello"/>
            <div className="p-4 mt-5 max-w-xl w-full flex items-center bg-[#e7e2df] rounded-2xl "> {/* mb-8 adds space below this div */}
                <p className="text-sm w-full text-center">Hello, I'm a developer based in London!</p>
            </div>

            <div className="text-black p-8 pb-3 pt-3 max-w-2xl w-full mx-auto rounded-lg flex items-center justify-between ">
                <div>
                    <h1 className="text-4xl font-bold mt-2">Filippo Vicini</h1>
                    <p className="text-lg">CS student, Web developer, Mobile Developer</p>

                    <p className="text-sm">Passionate about building simple but cool stuff. From mobile apps<br/> to web platforms I have always built something alongside <br/> my full time studies.</p>
                </div>
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white">
                    <Image
                        src="/profile.jpg" // Make sure this path is correct
                        alt="Takuya Matsuyama"
                        width={96} // Set the image size
                        height={96}
                        className="object-cover" // This will cover the area without stretching
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
