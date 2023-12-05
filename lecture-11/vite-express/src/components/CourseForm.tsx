/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, ChangeEvent,FormEvent } from 'react'
import axios from 'axios'


type Props = {
    id: string,
    saveCourse: (course: Course) => void
}
type Course = {
    _id: string,
    courseid: string,
    code: number,
    title: string,
    crhr: number,
    semester: number,


}


export default function CourseForm({ id ,saveCourse }: Props) {

    const [course, setCourse] = useState<Course>({
        _id: '',
        courseid: '',
        code: 0,
        title: '',
        crhr: 0,
        semester: 0,
    })

    const getCourseById = async (id: string) => {
        const course = (await axios.get(`/api/course/${id}`)).data
        setCourse(course)

    }
    useEffect(() => {
        getCourseById(id)
    },[id])

    const handleChange=( e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
            // console.log(e.currentTarget.name, e.currentTarget.value)
            
            setCourse({...course, [e.currentTarget.name]:e.currentTarget.value})
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        saveCourse(course)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                <tr>
                    <td>ID :</td>
                    <td>
                        {course.courseid}
                        <input type="text" name='_id' value={course._id} readOnly/>
                    </td>
                </tr>
                <tr>
                    <td>Code :</td>
                    <td>
                        {course.code}
                        <input type="text" name="name" value={course.code} onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td>Title:</td>
                    <td>
                        <textarea name="title" value={course.title} cols={30} rows={2} onChange={handleChange}></textarea>
                    </td>
                </tr>
                <tr>
                    <td>
                Credit :</td>
                <td>
                        <input type="text" name="crhr" value={course.crhr} onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td>Semester :</td>
                    <td>
                        <input type="text" name="semester" value={course.semester} onChange={handleChange}/>

                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button type="submit">Save</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
            <pre>{JSON.stringify(course, null, 4)}</pre>
        </div>
    )
}
