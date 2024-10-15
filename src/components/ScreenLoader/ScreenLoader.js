import React from 'react'

export default function ScreenLoader() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{minHeight: "100vh", background: "black"}}>
            <div className="spinner">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
            </div>
        </>
    )
}
