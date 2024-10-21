// components/ProfileSection.tsx

const Work: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-8">
      {/* Work Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-black mb-4">
          Projects
        </h2>
        <a href="https://www.ditta.io">
          <p className="text-gray-700 mb-2 font-semibold underline">
            {" "}
            Ditta Tecnologies
          </p>
        </a>
        <p className="text-gray-500 mb-4  pl-5">
          {" "}
          Collaborating in a small startup in the development of their MVP,
          using React, Go, devbox shell and nix. Solving the issue of
          complicated ERPs in Italy
        </p>
        <p className="text-gray-700 mb-2 font-semibold">
          {" "}
          Formula Student Firmware | Data acquisition Lead
        </p>
        <p className="text-gray-500 mb-4  pl-5">
          {" "}
          Working with the University to successfully win the formula student
          race. Connecting all components using low level languages and
          expanding knowledge on electrical enegineering{" "}
        </p>
        <a href="https://www.keepitnoted.app">
          <p className="text-gray-700 mb-2 font-semibold underline">
            {" "}
            KeepItNoted
          </p>{" "}
        </a>
        <p className="text-gray-500 mb-4  pl-5">
          {" "}
          Collaborated with a team to develop a mobile and web inventory app
          using React, Swift, nodejs, Firebase
        </p>
        <a href="https://apps.apple.com/it/app/racoon/id6469004016?l=en-GB">
          <p className="text-gray-700 mb-2 font-semibold underline">Racoon</p>{" "}
        </a>
        <p className="text-gray-500 mb-4  pl-5">
          {" "}
          Developed a mobile app using Swift, focusing on user-friendly design
          and functionality 400+ Downloads on app store
        </p>
        <a href="https://youtu.be/NLGCQH4t8x8">
          <p className="text-gray-700 mb-2 font-semibold underline">
            TechOrder
          </p>
        </a>
        <p className="text-gray-500 mb-4  pl-5">
          {" "}
          Fully integrated management system for restaurants,bars and hotels.
          Successfully integrated in a couple of buisnesses in Italy
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-black mb-4">
          Work Expirience
        </h2>
        <p className="text-gray-700 mb-2 font-semibold">
          Vice President | Technology Officer,{" "}
          <span className=" font-normal italic">
            City Computer Science Society
          </span>
        </p>
        <p className="text-gray-500 mb-4  pl-5">
          {" "}
          • Leading and organising sessions for freshers on software engineering
          principles. <br /> • Collaborate with industry professionals to plan
          and deliver workshops, tech talks, and mentoring sessions for society
          member
        </p>
        <p className="text-gray-700 mb-2 font-semibold">
          Web Developer Intern,{" "}
          <span className=" font-normal italic">Qwanas Ltd</span>
        </p>
        <p className="text-gray-500 mb-4  pl-5">
          {" "}
          • Leveraged web development skills to integrate the web version for an
          existing mobile app,{" "}
        </p>
        <p className="text-gray-700 mb-2 font-semibold">
          Freelance mobile developer,{" "}
          <span className=" font-normal italic">Qwanas Ltd</span>
        </p>
        <p className="text-gray-500 mb-4  pl-5">
          {" "}
          • Collaborated with a team to develop a cross-platform mobile
          application to connect empty leg flights with customers <br />•
          Leveraged Dart and Flutter, Integrating Firebase for real-time data
          synchronization
        </p>
      </div>

      {/* Bio Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-black mb-4">
          Education
        </h2>
        <p className="text-gray-700 mb-2 font-semibold">
          • City University London BSc Computer Science
        </p>
        <p className="text-gray-700 mb-2 font-semibold">
          • H-Farm college orientation school{" "}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-black mb-4">
          Interests{" "}
        </h2>
        <p className="text-gray-700 mb-2">
          My interersts vary from low level programming in languges such as{" "}
          <span className="font-semibold">C</span> and{" "}
          <span className="font-semibold">Golang</span> integrating robotics
          components and optimizing efficiency in electrical systems and
          operating system developement. I also love building react apps and
          well designed systems. I focus on writing clean, reliable and efficent
          code. For me following software engineering best practices is at the
          top of my priorties
        </p>
      </div>

      {/* Interests Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">I ❤️</h2>
        <p className="text-gray-700">
          Kiting, Surfing, Cycling, Hiking,Motorsports , Photography and outdoor
          adventures{" "}
        </p>
      </div>
    </div>
  );
};

export default Work;
