import React from 'react'
import './Contactt.css'
import '../Title/title2.css'

export default function Contactt() {
  return (
    <>
    <section className="contact">
        <div className="title  text-center">
          <h1 className=' py-2'>CONATCT SECTION</h1>
          <div className="title d-flex justify-content-center">
            <div className="icon">
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
        <div className="formHolder mt-5 py-1">
          <div className="container d-flex justify-content-center">
            <form action="" className='w-75'>
              <input type="text" placeholder='userName' className='form-control my-5 py-3' />
              <input type="text" placeholder='userAge' className='form-control my-5 py-3' />
              <input type="text" placeholder='userEmail' className='form-control my-5 py-3' />
              <input type="text" placeholder='userPassword' className='form-control my-5 py-3' />
              <button type="submit" className='btn btn-success my-2 px-3 '>Send Message</button>
            </form>
          </div>
        </div>
    </section>
    </>
  )
}
