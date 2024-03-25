import PropTypes from 'prop-types';
import { IoLogoUsd } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";


const CourseItem = ({course, handleSelectCourse}) => {
    const {image, course_name, course_details, price, credit} = course;
    return (
        <div>
            <div>
                <img src={image} alt={course_name} />
            </div>
            <div>
                <h2>{course_name}</h2>
                <p>{course_details}</p>
            </div>
            <div>
                <p> <span><IoLogoUsd /></span> Price: {price}</p>
                <p> <span><IoBookOutline /></span> Credit: {credit}</p>
            </div>
            <div>
                <button onClick={()=> handleSelectCourse(course)}>Select</button>
            </div>
        </div>
    );
};

CourseItem.propTypes={
    course: PropTypes.object.isRequired,
    handleSelectCourse: PropTypes.func.isRequired,
}
export default CourseItem;