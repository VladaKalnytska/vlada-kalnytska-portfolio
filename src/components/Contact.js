import React from "react";

import SectionHeader from "./SetionHeader";
import portfolioService from "../services/portfolioService";

const Contact = () => {
    const contactInfo = portfolioService.getContactInfo();

    const contactDetails = Object.entries(contactInfo).map(infoDetails => {
        const [ title, info ] = [ infoDetails[0], infoDetails[1] ]
        return (
            <li key = { info.link } className = "contact-info" >
                <a className = "contact-link" href = { info.link }>
                    <img
                        className = "contact-icon"
                        src = { require(`../assets/images/contact-icons/${info.imgUrl}`)}
                        alt = { title }
                    />
                    <h3 className="contact-title">
                        { title }
                    </h3>
                </a>
            </li>
        )
    })

    return (
        <section id = "contact">
            <SectionHeader
                payload = {{
                    className: "contact",
                    title: "Contact"
                }}
            />

            <img 
                className = "logo"
                src = { require(`../assets/images/logos/logo.png`)}
                alt = "website-logo"
            />

            <h2 className = "section-title">Get In Touch</h2>

            <ul className="contact-info-list clean-list">
                {
                    contactDetails
                }
            </ul>
        </section>
    )
}

export default Contact;