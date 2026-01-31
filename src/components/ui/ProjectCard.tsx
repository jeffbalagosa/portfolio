import type { CSSProperties } from 'react'
import type { Project } from '../../types/project'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

type ProjectCardProps = {
  project: Project
  index?: number
  style?: CSSProperties
}

export const ProjectCard = ({ project, index, style }: ProjectCardProps) => {
  const { ref, style: animationStyle } = useScrollAnimation<HTMLElement>({ index })
  const combinedStyle = { ...animationStyle, ...style }

  return (
    <article ref={ref} className="card hidden" style={combinedStyle} data-testid="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      {project.description.map((paragraph, paragraphIndex) => (
        <p key={`${project.id}-paragraph-${paragraphIndex}`}>{paragraph}</p>
      ))}
      <ul className="flex-container container">
        {project.liveUrl && (
          <li>
            <a className="button" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live Site
            </a>
          </li>
        )}
        <li>
          <a className="button" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            Github Repo
          </a>
        </li>
      </ul>
    </article>
  )
}
