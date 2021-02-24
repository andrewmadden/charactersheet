import React from "react"
import Attribute from "./attribute"

export default function Attributes() {
    return <div>
        <h2>Attributes</h2>
        <table className="table table-dark table-striped">
            <tbody>
                <Attribute name="Strength" value="7" />
                <Attribute name="Dexterity" value="6" />
                <Attribute name="Endurance" value="7" />
                <Attribute name="Intelligence" value="9" />
                <Attribute name="Education" value="9" />
                <Attribute name="Social Standing" value="6" />
            </tbody>
        </table>
    </div>;
}