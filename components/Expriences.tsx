// components/ExperienceCard.tsx
import React from 'react';

interface ExperienceCardProps {
    company: string;
    role: string;
    period: string;
    description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, role, period, description }) => {
    return (
        <div className="flex items-center mb-8">
            <div className="w-1/2">
                <div className="pl-10 text-right">
                    <p className="text-lg font-semibold text-blue-600">{company}</p>
                    <p className="text-md text-gray-800">{role}</p>
                    <p className="text-sm text-gray-500">{period}</p>
                </div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-block mx-4"></div>
            <div className="w-1/2">
                <div className="pr-10">
                    <p className="text-sm text-gray-700">{description}</p>
                </div>
            </div>
        </div>
    );
};



interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
}

const experiences: Experience[] = [
    // Add your experiences here
    {
        company: 'Company A',
        role: 'Software Developer',
        period: 'Jan 2020 - Present',
        description: 'Developing and maintaining web applications using React and Node.js.'
    },
    {
        company: 'Company B',
        role: 'Frontend Engineer',
        period: 'Jan 2018 - Dec 2019',
        description: 'Worked on a team to revamp the main product’s UI/UX using Vue.js.'
    },
    {
        company: 'Company B',
        role: 'Frontend Engineer',
        period: 'Jan 2018 - Dec 2019',
        description: 'Worked on a team to revamp the main product’s UI/UX using Vue.js.'
    },
    // ...more experiences
];

const Experiences: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto my-10 p-8">
            <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
            <div className="relative border-l-2 border-blue-600">
                {experiences.map((exp, index) => (
                    <ExperienceCard
                        key={index}
                        company={exp.company}
                        role={exp.role}
                        period={exp.period}
                        description={exp.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Experiences;
