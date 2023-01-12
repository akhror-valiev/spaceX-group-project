import React from "react";
import { useDispatch } from "react-redux";
import './Missions.css'

const MissionList = ({ id, name, description }) => {
    return (
        <tr >
           <td>{name}</td>
           <td>{description}</td>
           <td>***</td>
        </tr>
    )
}

export default MissionList;