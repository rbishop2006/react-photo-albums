import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/PicName.css"
import { getPicture, getPictures } from "../actions/Instruments"
// import { getInstrument } from "../actions/Instruments"
import { IoMdHome } from "react-icons/io"
import { FaFolderOpen } from "react-icons/fa"
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai"

export default function(props) {
  const [picture, setPicture] = useState([])
  const [pictures, setPictures] = useState([])

  const carousel = []
  const backFolder = []

  let leftClick = picture.id
  let rightClick = picture.id

  useEffect(() => {
    getPicture(props.match.params.id).then(picture => {
      setPicture(picture)
    })

    getPictures().then(data => setPictures(data))
  }, [props.match.params])

  for (var i = 0; i < pictures.length; i++) {
    carousel.push(pictures[i].id)
  }
  backFolder.push(picture.instrumentId)
  console.log(carousel)

  if (leftClick === 1) {
    leftClick = carousel.length - 1
  } else {
    leftClick -= 1
  }
  if (rightClick === carousel.length) {
    rightClick = 1
  } else {
    rightClick += 1
  }

  return (
    <div className="wrapperPicName">
      <header>
        <Link to="/">
          <IoMdHome className="homeButton" />
        </Link>
        {picture.name}
        <Link to={"/album/" + backFolder}>
          <FaFolderOpen className="folderButton" />
        </Link>
      </header>
      <div className="viewingPic">
        <Link to={"/pic/" + leftClick}>
          <AiOutlineDoubleLeft className="leftArrow" />
        </Link>
        <img src={picture.url} alt="instrument" />
        <Link to={"/pic/" + rightClick}>
          <AiOutlineDoubleRight className="rightArrow" />
        </Link>
      </div>
    </div>
  )
}
