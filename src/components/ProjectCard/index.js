import React, {useState} from 'react'
import {CardWrapper, Showcase, ShowcaseTitle, ShowcaseDescription, HighlightWrapper, 
    Highlight, TextWrapper, Title, Image, Description, Link} from './ProjectCardStyles'

const ProjectCard = ({title, shortDesc, desc, img, alt, hasLink, link}) => {
    const [clicked, setClicked] = useState(false);

    const handleClicked = () => {
        setClicked(!clicked);
    };

    var sectionStyle = {
        backgroundImage: `url(${img})`
      };

    return (
        <>
            <CardWrapper onClick={handleClicked} style={ sectionStyle }>
                <Showcase clicked={clicked}>
                    <ShowcaseTitle>{title}</ShowcaseTitle>
                    <ShowcaseDescription>{shortDesc}</ShowcaseDescription>
                </Showcase>
                <HighlightWrapper clicked={clicked}>
                    <Highlight>
                        <Image src={img} alt={alt}/>
                        <TextWrapper>
                            <Title>{title}</Title>
                            <Link href={'https://' + link} target='_blank' aria-label='Projectlink' hasLink={hasLink}>{link}</Link>
                            <Description>{desc}</Description>
                        </TextWrapper>
                    </Highlight>
                </HighlightWrapper>
            </CardWrapper>
        </>
    )
}

export default ProjectCard
