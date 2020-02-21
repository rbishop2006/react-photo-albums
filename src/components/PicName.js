import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/PicName.css"
import { getPicture } from "../actions/Instruments"
import { IoMdHome } from "react-icons/io"

export default function(props) {
  const [picture, setPicture] = useState([])

  useEffect(() => {
    getPicture(props.match.params.id).then(picture => {
      setPicture(picture)
    })
  }, [props.match.params])

  return (
    <div className="wrapperPicName">
      <header>
        <Link to="/">
          <IoMdHome className="homeButton" />
        </Link>
        {picture.name}
      </header>
      <div className="viewingPic">
        <img src={picture.url} />
      </div>
    </div>
  )
}
