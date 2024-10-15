import React from 'react'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'
import img9 from '../../assets/img9.png'
import { message } from 'antd'
import { useCartContext } from '../../context/CartContext'

export default function Eyeglasses() {
  const { cart, setCart } = useCartContext()

  const addToCart = (product) => {
    setCart([...cart, product])
    message.success("Added Successfully")
  }

  const eyeglassesData = [
    {
      id: 1,
      title: "Nike Sports Eyeglasses 139414-c",
      subtitle: "Nike Sports Eyeglasses 139414-c is a stylish TR-100 frame suitable for wide range of lenses.",
      price: 3.45,
      img: img1,
    },
    {
      id: 2,
      title: "Computer Screen Protection Glasses 30012-c",
      subtitle: "Computer Screen Protection Glasses is a stylish TR-90 frame suitable for wide range of lenses.",
      price: 4.35,
      img: img2,
    },
    {
      id: 3,
      title: "Rimless Eyeglasses 157748-c",
      subtitle: "Rimless Eyeglasses 157748-c are sophisticated-looking, elegant looking rectangle frames with a classy design aesthetic.",
      price: 5.05,
      img: img3,
    },
    {
      id: 4,
      title: "Clip-On Rimless Eyeglasses 155941-c",
      subtitle: "Clip-on Rimless Eyeglasses 155941-c are stylishly designed rectangle frames with a sophisticated rimless design.",
      price: 4.05,
      img: img4,
    },
    {
      id: 5,
      title: "Sports Eyeglasses 130901-c",
      subtitle: "With a TR-100 construction suitable for an active lifestyle and a black, black-blue, black-gray, or black-orange.",
      price: 3.65,
      img: img5,
    },
    {
      id: 6,
      title: "Rectangle Eyeglasses 161301-c",
      subtitle: "Rectangle Eyeglasses 161301-c are stylishly designed, elegant looking rectangle frames with a classy full-rim design.",
      price: 5.45,
      img: img6,
    },
    {
      id: 7,
      title: "Clip-On Rimless Eyeglasses 155951-c",
      subtitle: "Clip-on Rimless Eyeglasses 155451-c rock a sophisticated rimless design with an enticing rounded shape.",
      price: 4.25,
      img: img7,
    },
    {
      id: 8,
      title: "Rectangle Eyeglasses 163813-c",
      subtitle: "Rectangle Eyeglasses 163813-c are stylishly designed, appealing looking rectangle frames with a classy full-rim design.",
      price: 4.05,
      img: img8,
    },
    {
      id: 9,
      title: "Wood Eyeglasses 133906-c",
      subtitle: "Wood Eyeglasses 133906-c is a stylish Combination frame suitable for wide range of lenses.",
      price: 3.95,
      img: img9,
    },
  ];


  return (
    <>
      <div className="backImg">
        <div className="animation">
          <h1>Eyeglasses</h1>
        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          {eyeglassesData.map((item) => (
            <div className="col col-lg-4 mt-5" key={item.id}>
              <div className="card mx-auto" style={{minHeight: '420px', width: '230px'}}>
                <div className="card-img">
                  <img className="img" src={item.img} alt={item.title} />
                </div>
                <div className="padd">
                  <div className="card-title">{item.title}</div>
                  <div className="card-subtitle">{item.subtitle}</div>
                  <hr className="card-divider" />
                  <div className="card-footer">
                    <div className="card-price">
                      <span>$</span> {item.price.toFixed(2)}
                    </div>
                    <button className="card-btn" onClick={() => addToCart(item)}>
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
  )
}
