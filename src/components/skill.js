import React from "react"

export default function Skill(props) {
    return <tr>
        <td>{props.name}</td>
        <td>{props.value}</td>
    </tr>
}