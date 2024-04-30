import React, { useEffect, useState } from 'react'
import StudentList from '../components/StudentList'
import AllStudents from '../data/students'
import StudentSearchForm from '../components/StudentSearchForm'

export default function Home() {
    const [students, setStudents] = useState([])

    useEffect(() => {
        setStudents(AllStudents)
    }, [])

    return (
        <>
            <StudentSearchForm AllStudents={AllStudents} setStudents={setStudents} />
            <StudentList students={students} />
        </>
    )
}

