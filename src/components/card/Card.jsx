import React, { useEffect, useState } from 'react';
import './Card.css';
export default function Card(props) {


    return (
        <>
                <div className="item col-lg-4 col-md-6 col-sm-12 ">
                    <div className="itemHolder position-relative " id='item'  >
                        <img src={props.image} className='w-100 rounded-3' alt="logo1" />
                    <div className="layer position-absolute d-flex justify-content-center align-items-center" onClick={() => {props.modalT(props.image)}}>
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
        </>
    )
}
