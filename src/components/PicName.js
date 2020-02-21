import React from "react"
import { Link } from "react-router-dom"
import "../styles/PicName.css"

export default function(props) {
  return (
    <div className="wrapperPicName">
      <header>Pic Name</header>
      <div className="viewingPic">
        <img src="http://placehold.it/400" />
      </div>
    </div>
  )
}
