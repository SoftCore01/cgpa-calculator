import React from 'react'
import './Course.css'
import { BsFillTrashFill } from 'react-icons/bs'

function Course({ course, handleUnitChange, handleGradeChange, handleDeleteCourse }) {


    return (
        <tr>
            {/* Course Title */}
            <td className='pr-3'><input className="course-title w-full" placeholder={"E.g GEG 111"} defaultValue={course?.title} /></td>
            {/* Grade, dropdown */}
            <td className='pr-3'>
                <select className='w-16' value={course?.grade} onChange={(e) => handleGradeChange(e.target.value)}>
                    <option value={5}>A</option>
                    <option value={4}>B</option>
                    <option value={3}>C</option>
                    <option value={2}>D</option>
                    <option value={1}>E</option>
                    <option value={0}>F</option>
                </select>
            </td>

            <td><input className='w-16' placeholder='E.g 5' step={1} min={0} defaultValue={course?.unit} type="number" onInput={(e) => handleUnitChange(e.target.value)} /></td>
            <td><button onClick={handleDeleteCourse}><BsFillTrashFill /></button></td>
        </tr>
    )
}

export default Course