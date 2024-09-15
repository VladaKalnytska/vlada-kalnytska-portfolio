import React from "react";

import SectionHeader from "./SetionHeader";

const About = props => {
    const { about } = props;

    return (
        <section id = "about">

            <SectionHeader
                payload = {{
                    className: "about",
                    title: "About"
                }}
            />

            <div className = "about-container-div">

                <div className = "about-details">
                    <h2 className = "about-title section-title">
                        { about.title }
                    </h2>

                    <p className = "about-description">
                        { about.description }
                    </p>

                    <a
                        className="download-link"
                        href={ require('../assets/files/Lebenslauf_Kalnytska.pdf')}                        
                    >
                        Download Resume
                    </a>
                </div>

                <img 
                    className = "about-me-img"
                    src = { require(`../assets/images/me/${about.imgUrl}.jpg`)}
                    alt = "my_image"
                />

            </div>
        </section>
    )
}

export default About;