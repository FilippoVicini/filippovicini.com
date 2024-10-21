// components/TakuyaMatsuyamaCard.js

import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="text-black p-8 pb-3 pt-3 max-w-2xl w-full mx-auto rounded-lg flex items-center justify-between ">
        <div>
          <h1 className="text-4xl font-bold mt-4 ">Filippo Vicini</h1>
          <p className="text-lg mb-6">
            CS student, Web developer, Mobile Developer
          </p>

          <p className="text-sm">
            Passionate about building simple but cool stuff. From mobile apps
            <br /> to web platforms I have always built something alongside{" "}
            <br /> my full time studies.
          </p>
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
