import React from "react";

const ProjectPreview = props => {
    const { project } = props;

    return (
        <li className = "project-preview">
            <div className="project-details">
                <h3 className = "project-title section-title">{ project.title }</h3>
                <p className = "project-description">{ project.description }</p>
                <ul className = "tag-list clean-list">{ project.tags.map( tag => {
                    return (
                        <li key = {tag} className = "project-skill-tag">{ tag }</li>
                    )
                })}
                </ul>
                <a className = "code-link" href = {project.codeUrl} >Code</a>
                <a className = "web-link" href = {project.webUrl} >Web</a>
            </div>

            <img 
                className = "project-img"
                src = { require(`../assets/images/project-images/${project.imgUrl}.png`)}
                alt = { `Project ${project.title}` }
            />
        </li>
    )
}

export default ProjectPreview;