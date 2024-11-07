import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
        <div className="about__box">
          <i class='bx bx-briefcase-alt about__icon'></i>

            <h3 className="about__title">Collaboration</h3>
            {/* <span className="about__subtitle">การทำงานร่วมกับผู้อื่น</span> */}
        </div>

        <div className="about__box">
          <i class='bx bx-notepad about__icon'></i>

            <h3 className="about__title">Life-Long Learning</h3>
            {/* <span className="about__subtitle">การเรียนรู้ตลอดชีวิต</span> */}
        </div>

        <div className="about__box">
          <i class='bx bxs-sun about__icon'></i>

            <h3 className="about__title">Complex Problem Solving</h3>
            {/* <span className="about__subtitle">การแก้ไขปัญหาที่มีความซับซ้อน</span> */}
        </div>
      
    </div>
  )
}

export default Info
