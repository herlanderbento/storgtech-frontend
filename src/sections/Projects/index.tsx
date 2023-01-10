import { useNav } from '../../hooks/useNav'
import { ProjectsSection } from './Projects.styles'

function Projects() {
  const projectsRef = useNav('Projects')

  return (
    <ProjectsSection ref={projectsRef} id="projectsSection">
      <h2>Projects</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio
        dolorum exercitationem, harum repellat explicabo quis error excepturi
        porro soluta.
      </p>
    </ProjectsSection>
  )
}

export default Projects
