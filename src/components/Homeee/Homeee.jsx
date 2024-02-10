import React from 'react'
import './Homeee.css'
import favIcon from '../../../src/avataaars.svg'
import '../Title/title.css'

export default function Homeee() {
  return (
    <>
      <section className="Home d-flex justify-content-center align-items-center">
        <div className="contentHolder text-center">
          <img src={favIcon} className='w-75' alt="icon" />
          <div className="title">
            <h1 className='text-white py-4'>START FRAMEWORK</h1>
            <div className="title d-flex justify-content-center">
              <div className="icon ">
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
            <p className='py-5 text-white'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </section>
    </>
  )
}
