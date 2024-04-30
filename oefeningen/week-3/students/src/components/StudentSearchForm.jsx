import React from 'react'

export default function StudentSearchForm({ AllStudents, setStudents }) {
    const handleSearch = (ev) => {
        ev.preventDefault()
        const searchQuery = ev.target.querySelector('input').value
        const filteredStudents = AllStudents.filter(student => student.firstName.toLowerCase().includes(searchQuery.toLowerCase()))
        setStudents(filteredStudents)
    }

    return (
        <div>
            <h2>Search for a student</h2>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Search for a student" />
                <button>Search</button>
            </form>
        </div>
    )
}
