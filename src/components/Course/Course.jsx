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
        <div className="w-32">
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