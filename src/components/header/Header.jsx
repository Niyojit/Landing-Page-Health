import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className="Header">
        <div className="HeaderContent">
            <div className="HeaderContentLogo">
                <img src="/assests/Logo1.png" alt="" className="ImageLogo"/>
                <div className="linedi"></div>
            </div>
            <div className="date">
                <span>Date: 18 June 2024</span>
            </div>
        </div>
    </div>
  )
}
