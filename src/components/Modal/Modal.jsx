import React, { useEffect, useState } from 'react'
import './Modal.css'
export default function Modal(props) {
    const [currentIndex, setCurrentIndex] = useState(props.idx);

    const closeModal = (e) => 
    {
        if (!(e.target.classList.contains('iamImage') ||
        e.target.classList.contains('fa-arrow-right') ||
        e.target.classList.contains('fa-arrow-left')))
            props.modalState(false);
    }



const moveForward = (e) =>
{
        const nextIndex = (currentIndex + 1) % props.imageArr.length;
        setCurrentIndex(nextIndex);
}



const moveBackward = (e) =>
{
    const nextIndex = (currentIndex - 1 + props.imageArr.length) % props.imageArr.length;
    setCurrentIndex(nextIndex);
}


    useEffect(() => {
    }, [currentIndex]);

    return (
    <>
    <div className="Modal d-flex justify-content-center align-items-center" onClick={closeModal}>
        <div className="holder text-center position-relative">
            <img src={props.imageArr[currentIndex]}  className='iamImage w-75' alt="img" />
                    <i className="fa-solid fa-arrow-right position-absolute" onClick={moveForward}></i>
                    <i className="fa-solid fa-arrow-left position-absolute" onClick={moveBackward}></i>
        </div>
    </div>
    
    </>
    )
}
