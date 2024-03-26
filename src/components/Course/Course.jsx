import { useEffect } from "react";
import { useState } from "react";
import CourseItem from "../CourseItem/CourseItem";
import PropTypes from 'prop-types'

const Course = ({ handleSelect }) => {
    const [course, setCourse] = useState([]);
    
    useEffect(()=>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourse(data));
    },[])
    
    return (
        <div className="lg:w-3/4 grid lg:grid-cols-3 md:grid-cols-2 md:mx-auto md:w-11/12 gap-4 ">
            {
                course.map((item, idx) => <CourseItem key={idx} course={item} handleSelectCourse={handleSelect}></CourseItem>)
            }
        </div>
    );
};

Course.propTypes={
    handleSelect: PropTypes.func.isRequired,
}
export default Course;