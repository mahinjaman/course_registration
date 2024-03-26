import PropTypes from 'prop-types'
const Selected = ({course, remainingCredit, totalCredit, totalPrice}) => {
    return (
        <div className="w-1/4 bg-white rounded-md p-4">
            <div className='border-b-2 py-4'>
                <h1 className='font-semibold text-blue-500 text-2xl'>Credit Hour Remaining <span id="remainingHour">{remainingCredit}</span> hr</h1>
            </div>
            <div className='border-b-2 py-4'>
                <h1 className='font-semibold text-2xl pb-2'>Course Name</h1>
                <ol className='list-decimal px-4 flex flex-col gap-2 text-gray-500'>
                    {
                        course.map((item, idx) => <li key={idx}>{item.course_name}</li>)
                    }
                </ol>
            </div>
            <p className='font-semibold text-md py-3 border-b-2'>Total Credit Hour: <span id='totalHour'>{totalCredit}</span> hr</p>
            <p className='font-semibold text-md py-3 border-b-2'>Total Price: <span id='totalPrice'>{totalPrice}</span> USD</p>
        </div>
    );
};

Selected.propTypes = {
    course: PropTypes.object.isRequired,
    remainingCredit: PropTypes.number.isRequired,
    totalCredit: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
};

export default Selected;