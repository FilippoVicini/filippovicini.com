// components/ProjectCard.tsx
import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    description: string;
    imgSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgSrc }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-40 w-full">
                {/* Use your project images accordingly */}
                <Image src={imgSrc} alt={title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    );
};


// components/WorksSection.tsx


const projects = [
    {
        title: 'TechOrder',
        description: 'A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support',
        imgSrc: '/images/inkdrop.png', // Replace with your image path
    },
    {
        title: 'Racoon',
        description: 'Music recommendation app for iOS',
        imgSrc: '/images/walknote.png', // Replace with your image path
    },
    {
        title: 'SwissFlightClub',
        description: 'A video work generated with deep learning, imitating famous four painters like Van Gogh',
        imgSrc: '/images/four_painters.png', // Replace with your image path
    },
    {
        title: 'KeepItNoted',
        description: 'An app that suggests ramen(noodle) shops based on a given photo of the ramen you want to eat',
        imgSrc: '/images/menkiki.png', // Replace with your image path
    },
];

const Projects: React.FC = () => {
    return (
        <section className="max-w-2xl mx-auto my-10 p-8">
            <h2 className="text-2xl font-bold mb-6">Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        imgSrc={project.imgSrc}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
