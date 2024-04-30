import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/StudentCard.css'

export default function StudentCard({ student }) {

    return (
        <Link className="studentCard" to={`/student/${student.id}`}>
            <img src={student.picture.large} alt={ student.firstName + " " + student.lastName} />
            <h2>{ student.firstName + " " + student.lastName}</h2>
        </Link>
    )
}
