import React from 'react'
import StudentCard from './StudentCard'

export default function StudentList({ students }) {

    return (
        <div>
            <h2>Students</h2>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        <StudentCard student={student} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
