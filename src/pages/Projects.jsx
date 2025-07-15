import projects from "../data/projects";
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-700 dark:to-zinc-600 py-10 pb-0">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-white mb-6">
          My Projects
        </h1>
        <p className="text-zinc-600 dark:text-zinc-200 mb-10 text-md">
          A curated list of professional and personal projects I’ve worked on — from social platforms to corporate websites.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
