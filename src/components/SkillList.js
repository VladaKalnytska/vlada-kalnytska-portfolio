import React from "react";

import SkillPreview from "./SkillPreview"
import SectionHeader from "./SetionHeader"

const SkillList = props => {
    const { skills } = props;

    const skillsList = skills.map(skill => {
        return (
            <SkillPreview key = { skill._id } skill = { skill }/>
        )
    });

    return (
        <section id = 'skills'>
            <SectionHeader 
                payload = {{
                    className: "skills",
                    title: "Skills"
                }}
            />

            <ul className="skills-list clean-list">
            {
                skillsList
            }
            </ul>
        </section>
    );
};

export default SkillList;