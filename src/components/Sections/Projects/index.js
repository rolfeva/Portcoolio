import React from 'react'
import { SectionContainer, SectionWrapper} from '../SectionStyles'
import { Title, ProjectGrid, ProjectItemBox, ProjectItem, ProjectItemBG, ItemHeader, ItemDescription,
    ProjectsWrapper} from './ProjectsStyles'

const Projects = () => {
    return (
        <SectionContainer id='projects' lightBg={false}>
            <SectionWrapper>
                <ProjectsWrapper>
                    <Title>My Projects</Title>
                    <ProjectGrid>
                        <ProjectItemBox>
                            <ProjectItemBG src='./images/bg.png' alt='project'/>
                            <ProjectItem>
                                <ItemHeader>Header</ItemHeader>
                                <ItemDescription>Description</ItemDescription>
                            </ProjectItem>
                        </ProjectItemBox>
                        <ProjectItemBox>
                            <ProjectItemBG src='./images/bg.png' alt='project'/>
                            <ProjectItem></ProjectItem>
                        </ProjectItemBox>
                        <ProjectItemBox>
                            <ProjectItemBG src='./images/bg.png' alt='project'/>
                            <ProjectItem></ProjectItem>
                        </ProjectItemBox>
                        <ProjectItemBox>
                            <ProjectItemBG src='./images/bg.png' alt='project'/>
                            <ProjectItem></ProjectItem>
                        </ProjectItemBox>
                    </ProjectGrid>
                </ProjectsWrapper>
            </SectionWrapper>
        </SectionContainer>
    )
}

export default Projects
