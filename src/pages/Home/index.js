import React from 'react';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import imgG from '../../assets/imgG.png';
import imgI from '../../assets/imgI.png';
import imgD from '../../assets/imgD.png';
import { useCartContext } from '../../context/CartContext';
import { message } from 'antd';

export default function Home() {
  const { cart, setCart } = useCartContext()

  const addToCart = (product) => {
    setCart([...cart , product])
    message.success("Added Successfully")
  }
  
  const products = [
    {
      title: "Computer Screen Protection Glasses 30012-c",
      subtitle: "Computer Screen Protection Glasses is a stylish TR-90 frame suitable for wide range of lenses.",
      price: 4.35,
      image: img2,
    },
    {
      title: "Carrerino 20 by Carrera",
      subtitle: "Carrerino 20 by Carrera are stylishly designed, alluring-looking rectangle frames with a classy full-rim design to allure your sunny-day outfits.",
      price: 7.05,
      image: imgG,
    },
    {
      title: "Rimless Eyeglasses 157748-c",
      subtitle: "Rimless Eyeglasses 157748-c are sophisticated-looking, elegant looking rectangle frames with a classy design aesthetic.",
      price: 5.05,
      image: img3,
    },
    {
      title: "Kyle by Via Milano",
      subtitle: "Kyle by Via Milano are beautifully designed, elegant-looking, high quality frames to tackle your sunny day outings with style.",
      price: 4.95,
      image: imgI,
    },
    {
      title: "Clip-On Rimless Eyeglasses 155941-c",
      subtitle: "Clip-on Rimless Eyeglasses 155941-c are stylishly designed rectangle frames with a sophisticated rimless design.",
      price: 4.05,
      image: img4,
    },
    {
      title: "Hurley HSL2001",
      subtitle: "Hurley HSL2001 are stylishly designed, alluring looking rounded frames with a stunning full-rim design.",
      price: 6.05,
      image: imgD,
    },
  ];


  return (
    <>
      <div className="backImg">
        <div className="animation">
          <h2 className='text-center'><b>Glasses House</b></h2>
          <h1 className='text-white'>Get Stylish & Trendy Glasses</h1>
        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          {products.map((product, index) => (
            <div className="col col-lg-4 mt-5" key={product.title}>
              <div className="card mx-auto" style={{minHeight: '420px', width: '230px'}}>
                <div className="card-img">
                  <img className="img" src={product.image} alt={product.title} />
                </div>
                <div className="padd">
                  <div className="card-title">{product.title}</div>
                  <div className="card-subtitle">{product.subtitle}</div>
                  <hr className="card-divider" />
                  <div className="card-footer">
                    <div className="card-price">
                      <span>$</span> {product.price.toFixed(2)}
                    </div>
                    <button className="card-btn" onClick={() => addToCart(product)}>
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
