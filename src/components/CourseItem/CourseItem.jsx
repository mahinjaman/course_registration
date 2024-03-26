import PropTypes from 'prop-types';
import { IoLogoUsd } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";


const CourseItem = ({course, handleSelectCourse}) => {
    const {image, course_name, course_details, price, credit} = course;
    return (
        <div className='bg-white p-4 rounded-md flex flex-col gap-3 md:gap-5'>
                <img className='w-full rounded-md h-56' src={image} alt={course_name} />
                <h2 className='font-semibold text-lg h-9 '>{course_name}</h2>
                <p className='text-gray-500 h-24 md:h-28'>{course_details}</p>
            
            <div className='flex justify-between mb-3'>
                <p className='text-md text-black flex items-center'> <IoLogoUsd className='mr-2 text-2xl' /> Price: <span id='price' className='ms-2'>{price}</span> </p>
                <p className='text-md text-black flex items-center'> <IoBookOutline className='mr-2 text-2xl' /> Credit:<span id='creditHour' className='ms-2'>{credit}</span> hr</p>
            </div>
            <button className='btn tracking-widest rounded-md bg-blue-500 font-semibold text-white py-2' onClick={()=> handleSelectCourse(course)}>Select</button>
        </div>
    );
};

CourseItem.propTypes={
    course: PropTypes.object.isRequired,
    handleSelectCourse: PropTypes.func.isRequired,
}
export default CourseItem;