import React from 'react'
import Teacher from './Teacher'

export default function Course({ courseName, teachers }) {
    return (
        <div>
            <h4>{ courseName }</h4>
            <h5>Teachers:</h5>
            <ul>
                {teachers.map((teacher, index) => (
                    <li key={index}><Teacher name={teacher} /></li>
                ))}
            </ul>
        </div>
    )
}
