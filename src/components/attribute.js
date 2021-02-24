import React from "react"

export default function Attribute(props) {
    return <tr>
        <td>{props.name}</td>
        <td>{props.value}</td>
    </tr>
}