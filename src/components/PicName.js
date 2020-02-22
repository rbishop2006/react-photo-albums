import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/PicName.css"
import { getPicture, getPictures } from "../actions/Instruments"
// import { getInstrument } from "../actions/Instruments"
import { IoMdHome } from "react-icons/io"
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai"

export default function(props) {
  const [picture, setPicture] = useState([])
  const [pictures, setPictures] = useState([])
  const carousel = []

  useEffect(() => {
    getPicture(props.match.params.id).then(picture => {
      setPicture(picture)
    })
    getPictures().then(data => setPictures(data))
  }, [props.match.params])

  for (var i = 0; i < pictures.length; i++) {
    carousel.push(pictures[i].id)
  }
  console.log(carousel)
  return (
    <div className="wrapperPicName">
      <header>
        <Link to="/">
          <IoMdHome className="homeButton" />
        </Link>
        {picture.name}
      </header>
      <div className="viewingPic">
        <AiOutlineDoubleLeft className="leftArrow" />{" "}
        <img src={picture.url} alt="instrument" />
        <AiOutlineDoubleRight className="rightArrow" />
      </div>
    </div>
  )
}
