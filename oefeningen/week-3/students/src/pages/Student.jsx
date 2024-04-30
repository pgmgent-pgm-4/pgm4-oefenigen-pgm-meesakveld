import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import AllStudents from '../data/students'

export default function Student() {

    const { id } = useParams()
    const [student, setStudent] = useState(null)

    const Navigate = useNavigate()

    useEffect(() => {
        const student = AllStudents.find(student => student.id === id)

        if (!student) {
            console.log('Student not found')
            console.log('StudentId:', id)
            return Navigate('/')
        }

        setStudent(student)
    }, [id])

    return (
        <div>
            {student &&
                <>
                    <h2>{student.firstName} {student.lastName}</h2>
                    <img src={student.picture.large} alt={student.firstName + " " + student.lastName} />
                    <p>Phone: {student.cell}</p>
                    <p>Location: {student.location.city}, {student.location.country}</p>
                    <Link to="/">Back to home</Link>
                </>
            }
        </div>
    )
}
