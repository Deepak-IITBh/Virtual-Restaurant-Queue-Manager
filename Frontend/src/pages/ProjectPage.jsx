import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const projects = {
  'Frontend-1': {
    title: 'Royal Queen — Frontend (Main)',
    shortName: 'Frontend',
    description:
      'Royal Queen frontend built with React and Tailwind CSS. Provides a menu, virtual queueing, and order tracking UI.',
    image:
      'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=1200&auto=format&fit=crop&q=80',
    tech: ['React', 'Tailwind CSS', 'React Router'],
    features: [
      'Menu browsing with categories',
      'Virtual queue: join and track orders',
      'Responsive UI with Tailwind',
    ],
  },
  'Frontend-2': {
    title: 'Royal Queen — Frontend (Secondary)',
    shortName: 'Frontend-2',
    description:
      'Demo project page for a secondary frontend build. Use this placeholder to link other front-facing demos or pages.',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop&q=80',
    tech: ['React', 'CSS'],
    features: ['Demo content', 'Placeholder details'],
  },
  'Frontend-3': {
    title: 'Royal Queen — Frontend (Legacy)',
    shortName: 'Frontend-3',
    description: 'Legacy or third demo page for the Royal Queen frontend.',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop&q=80',
    tech: ['HTML', 'CSS'],
    features: ['Legacy demo'],
  },
};

const ProjectPage = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();

  const project = projects[projectName];

  // Fallback: build basic metadata if slug not known
  const fallback = {
    title: projectName || 'Project',
    shortName: projectName || 'project',
    description: 'No additional information available for this project yet.',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop&q=80',
    repo: null,
    tech: [],
    features: [],
  };

  const meta = project || fallback;

  return (
    <div className="w-full flex justify-center px-4 py-8">
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 w-full">
            <img src={meta.image} alt={meta.title} className="w-full h-64 object-cover" />
          </div>
          <div className="md:w-1/2 w-full p-6">
            <h1 className="text-3xl font-semibold mb-2">{meta.title}</h1>
            <p className="text-gray-600 mb-4">{meta.description}</p>

            {meta.tech && meta.tech.length > 0 && (
              <div className="mb-4">
                <h3 className="font-medium mb-2">Tech stack</h3>
                <div className="flex flex-wrap gap-2">
                  {meta.tech.map((t) => (
                    <span key={t} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {meta.features && meta.features.length > 0 && (
              <div className="mb-6">
                <h3 className="font-medium mb-2">Key features</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {meta.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => navigate(-1)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
