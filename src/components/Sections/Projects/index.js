import React from 'react'
import { SectionContainer, SectionWrapper} from '../SectionStyles'
import { Title, ProjectGrid, ProjectsWrapper} from './ProjectsStyles'
import ProjectCard from '../../ProjectCard'
import { ProjectOne } from './Data'
import { ProjectTwo } from './Data'

const Projects = () => {
    return (
        <SectionContainer id='projects' lightBg={false}>
            <SectionWrapper>
                <ProjectsWrapper>
                    <Title>My Projects</Title>
                    <ProjectGrid>
                        <ProjectCard {...ProjectOne}/>
                        <ProjectCard {...ProjectOne}/>
                        <ProjectCard {...ProjectTwo}/>
                        <ProjectCard {...ProjectTwo}/>
                    </ProjectGrid>
                </ProjectsWrapper>
            </SectionWrapper>
        </SectionContainer>
    )
}

export default Projects
