import React from 'react'
import { Link } from 'react-router-dom'
import eyeImage from '../../assets/eye.png'
import { useCartContext } from '../../context/CartContext'


export default function Header() {
    const {cart} = useCartContext()
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link to="/"><img src={eyeImage} alt="" /></Link>
                    <Link to="/" className="navbar-brand ms-2">Glasses House</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/eyeglasses" className="nav-link active">Eyeglasses</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/sunglasses" className="nav-link active">Sunglasses</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link active">Cart <sup>{cart.length == 0 ? "" : cart.length}</sup></Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link active">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
