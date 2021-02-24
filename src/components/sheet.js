import React from "react"
import Attributes from "./attributes"
import Skills from "./skills"

export default function Sheet({ children }) {
    return (
        <div class="character-sheet">
            <div class="profile">
                <div>
                    <span>Name</span>
                    <span>Tycho Solari</span>
                </div>
                <div>
                    <span>Home World</span>
                    <span>Regina (Spinward Marches)</span>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <Attributes />
                </div>
                <div className="col-3">
                    <Skills />
                </div>
            </div>
        </div>
    )
}