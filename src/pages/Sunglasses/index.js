import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { message } from 'antd';
import imgA from '../../assets/imgA.png';
import imgB from '../../assets/imgB.png';
import imgC from '../../assets/imgC.png';
import imgD from '../../assets/imgD.png';
import imgE from '../../assets/imgE.png';
import imgF from '../../assets/imgF.png';
import imgG from '../../assets/imgG.png';
import imgH from '../../assets/imgH.png';
import imgI from '../../assets/imgI.png';

export default function Sunglasses() {
  const { cart, setCart } = useCartContext();

  const addToCart = (product) => {
    setCart([...cart, product]);
    message.success("Added Successfully");
  }

  const sunglassesData = [
    {
      img: imgA,
      title: 'Round Sunglasses 137498',
      subtitle: 'Sunglasses 137498 is a Metal frame with Plastic Shades. And This Sunglasses is NON-RX.',
      price: 4.05,
    },
    {
      img: imgB,
      title: 'Prescription Sunglasses 169239-c',
      subtitle: 'Prescription Sunglasses 169239-c are stylish and appealing frames with a captivating full-rim design.',
      price: 5.95,
    },
    {
      img: imgC,
      title: 'Cat Eye Sunglasses 161733-c',
      subtitle: 'Cat Eye Sunglasses 161733-c are stylishly designed, alluring looking frames with a stunning full-rim design.',
      price: 5.85,
    },
    {
      img: imgD,
      title: 'Hurley HSL2001',
      subtitle: 'Hurley HSL2001 are stylishly designed, alluring looking rounded frames with a stunning full-rim design.',
      price: 6.05,
    },
    {
      img: imgE,
      title: 'Sun Stop',
      subtitle: 'Sun Stop are high-quality, captivating frames to pair with your sunny outings. These frames come with a beautiful pilot shaped full rim design.',
      price: 5.65,
    },
    {
      img: imgF,
      title: 'Prescription Sunglasses 164978',
      subtitle: 'Prescription Sunglasses 164978 is a stylish Metal frame suitable for wide range of lenses.',
      price: 5.45,
    },
    {
      img: imgG,
      title: 'Carrerino 20 by Carrera',
      subtitle: 'Carrerino 20 by Carrera are stylishly designed, alluring-looking rectangle frames with a classy full-rim design.',
      price: 7.05,
    },
    {
      img: imgH,
      title: 'Giordano Prescription Sunglasses 139440',
      subtitle: '100% Original. Factory Stock. May have minor defects. Original case not included.',
      price: 3.85,
    },
    {
      img: imgI,
      title: 'Kyle by Via Milano',
      subtitle: 'Kyle by Via Milano are beautifully designed, elegant-looking, high quality frames to tackle your sunny day outings with style.',
      price: 4.95,
    },
  ];

  
  return (
    <>
      <div className="backImg">
        <div className="animation">
          <h1>Sunglasses</h1>
        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          {sunglassesData.map((sunglass, index) => (
            <div className="col col-lg-4 mt-5" key={index}>
              <div className="card mx-auto" style={{minHeight: '420px', width: '230px'}}>
                <div className="card-img">
                  <img className="img" src={sunglass.img} alt={sunglass.title} />
                </div>
                <div className="padd">
                  <div className="card-title">{sunglass.title}</div>
                  <div className="card-subtitle">{sunglass.subtitle}</div>
                  <hr className="card-divider" />
                  <div className="card-footer">
                    <div className="card-price">
                      <span>$</span> {sunglass.price.toFixed(2)}
                    </div>
                    <button className="card-btn" onClick={() => addToCart(sunglass)}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" />
                        <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" />
                        <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" />
                        <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
