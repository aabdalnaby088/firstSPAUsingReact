import React, { useEffect, useState } from 'react';
import './Protfolio.css';
import logo1 from '../../poert1.png';
import logo2 from '../../port2.png';
import logo3 from '../../port3.png';
import Card from '../card/Card';
import Modal from '../Modal/Modal';

export default function Protfolio() {
  const images = [logo1, logo2, logo3, logo1, logo2, logo3];

  const [displayModal, setdisplayModal] = useState(false);
  const [modalImg, setmodalImg] = useState("");
  const [idx, setIdx] = useState(0);

  const toggleModal = (src) => {
    const index = images.indexOf(src);
    setdisplayModal(true);
    setmodalImg(src);
    setIdx(index);
  };

  return (
    <>
      <section>
        <div className="title text-center">
          <h1 className='pt-2'>PORTFOLIO COMPONENT</h1>
          <div className="title d-flex justify-content-center">
            <div className="icon">
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
        <div className="protfolio container">
          <div className="row gy-4 my-5">
            {images.map((image, i) => {
              return <Card modalT={toggleModal} image={image} key={i} />;
            })}
          </div>
        </div>
        {displayModal && <Modal modalState={setdisplayModal} img={modalImg} imageArr = {images} idx = {idx} />}
      </section>
    </>
  )
}
