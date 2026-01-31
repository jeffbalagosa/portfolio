import { projects } from '../../data/projects'
import { ProjectCard } from '../ui/ProjectCard'

export const Portfolio = () => {
  return (
    <section id="portfolio" data-testid="portfolio-section">
      <h2>Projects</h2>
      <main className="container">
        <div className="flex-container">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </main>
    </section>
  )
}
