import React from 'react'
import Course from './Course'

export default function Student({ firstName, lastName, sexCode, dateOfBirth, courses}) {
    return (
        <div>
            <h2>{firstName} {lastName}</h2>
            <p>{ sexCode === 1 ? "Man" : sexCode === 2 ? "Vrouw" : "Onbepaald"}</p>
            <p>{dateOfBirth}</p>
            <hr />
            <h3>Courses:</h3>
            <ul>
                {courses.map((course, index) => (
                    <>
                        <li key={index}><Course teachers={course.teachers} courseName={course.name}/></li>
                        <br/>
                    </>
                ))}
            </ul>
        </div>
    )
}
