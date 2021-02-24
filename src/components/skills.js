import React from "react"
import Skill from "./skill"

export default function Skills() {
    return <div>
        <h2>Skills</h2>
        <table className="table table-dark table-striped">
            <thead>
                <th>Name</th>
                <th>Level</th>
            </thead>
            <tbody>
                <Skill name="Admin" value="4" />
                <Skill name="Author" value="1" />
                <Skill name="Brawling" value="2" />
                <Skill name="Bribery" value="1" />
                <Skill name="Carousing" value="2" />
                <Skill name="Disguise" value="0" />
                <Skill name="Electronics" value="4" />
                <Skill name="Encryption" value="0" />
                <Skill name="Engineering" value="3" />
                <Skill name="Gravatics" value="3" />
                <Skill name="Gun Combat - Slug pistols" value="1" />
                <Skill name="Instruction" value="1" />
                <Skill name="Interrogation" value="1" />
                <Skill name="Liason" value="2" />
                <Skill name="Linguistics" value="0" />
                <Skill name="Mechanics" value="4" />
                <Skill name="Medic" value="2" />
                <Skill name="Pilot" value="1" />
                <Skill name="Recon" value="0" />
                <Skill name="Ship Tactics" value="1" />
                <Skill name="Ship's Boat" value="1" />
                <Skill name="Trader" value="2" />
                <Skill name="Vacc Suit" value="1" />
                <Skill name="Xenology" value="1" />
                <Skill name="Zero-G Combat" value="1" />
            </tbody>
        </table>
    </div>;
}