/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import React,{useEffect, useState} from 'react'
import CourseForm from './CourseForm'

export default function CourseList() {
type Course = {
    _id:string,
    courseid: string,
    code:number,
    title: string,
    crhr: number,
    semester: number,
    

}


    const [courses, setCourses] = useState<Course[]>([])
    const [id, setId] = useState('')

    useEffect(() => {
        axios.get('/api/list')
        .then(courses => setCourses(courses.data))
    }, [])

    const handleClick = (id:string) => {
        console.log(id)
        setId(id)
    }
    const saveCourse = async(c:Course) => {
        console.log(c)
        const course =(await axios.post('/api/save',{...c})).data
        setCourses(courses.map(crs=> crs._id === course._id ? course:crs))

    }


  return (
    <>
        <div className='col'>


            {courses.length !== 0 && 
                (
                    <table>
                        <thead>

                        <tr>
                            <th>Id</th>
                            <th>Code</th>
                            <th>Title</th>
                            <th>Crhr</th>
                            <th>Semester</th>
                        </tr>
                        </thead>
                        <tbody>

                    {courses.map(course => (
                        <tr key={course._id}>
                            <td>{course.courseid}</td>
                            <td>{course.code}</td>

                            <td>
                                <a href="#" onClick={()=>handleClick(course._id)}>
                                {course.title}
                                </a>
                                </td>
                            <td>{course.crhr}</td>
                            <td>{course.semester}</td>
                        </tr>))}
                            </tbody>
                    </table>
                )
            }
        </div>
        <div className='col'>
            {id !== '' ? <CourseForm id={id} saveCourse={saveCourse} />:null}
        </div>
            </>
    )
}
