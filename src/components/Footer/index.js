import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    let year = new Date().getFullYear()
    return (
        <footer className='p-1'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="mb-0 text-center">&copy;{year}.Made by <Link to="https://awais-portfolio1.vercel.app" className='text-decoration-none text-dark'><b>Muhammad Awais Mehboob</b></Link></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
