import React from 'react'

interface WorkProcessCardProps {
    number: string;
    title: string;
    isExtraClass?: boolean;
}

const WorkProcessCard: React.FC<WorkProcessCardProps> = ({ number, title, isExtraClass }) => {
  return (
    <div className={`flex items-center pa-3 ${isExtraClass ? 'lg:border-r-2 lg:border-gray-300' : ''}`}>
        <div className="text-[40px] md:text-[60ps] lg:text-[80px] mr-5 leading-none text-amber-600">
            {number}
        </div>
        <div>
            <h1 className='text-[#252525] font-semibold text-xl'>{title}</h1>
            <p className='lg:w-[90%] mt-3 leading-8 font-medium text-gray-700'>ished fact that a reader will be distrol acted bioiiy desig the.ished fact that a reader will be distrol.</p>
        </div>
    </div>
  )
}

export default WorkProcessCard