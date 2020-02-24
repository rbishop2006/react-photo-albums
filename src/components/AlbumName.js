import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/AlbumName.css"
import { getInstrument, getInstruments } from "../actions/Instruments"
import { IoMdHome } from "react-icons/io"

export default function(props) {
  const [instrument, setInstrument] = useState({})
  const [pictures, setPictures] = useState([])
  const [instruments, setInstruments] = useState([])

  useEffect(() => {
    getInstrument(props.match.params.id).then(instrument => {
      setInstrument(instrument)

      setPictures(instrument.pictures)
    })
    getInstruments().then(data => setInstruments(data))
  }, [props.match.params])

  // console.log(pictures)

  return (
    <div className="wrapperAlbumName">
      <header>
        <Link to="/">
          <IoMdHome className="sideBarHome" />
        </Link>
        {instrument.name}
      </header>

      <div className="flexSect">
        <div className="albumGroups">
          {instruments.map(instrument => {
            return (
              <div className="sidebar" key={"instrument" + instrument.id}>
                <Link to={"/album/" + instrument.id}>
                  <p className="albumNums">{instrument.name}</p>
                </Link>
              </div>
            )
          })}{" "}
        </div>

        <div className="picDisplay">
          {pictures.map(picture => {
            return (
              <Link to={"/pic/" + picture.id} key={"picture" + picture.id}>
                <div className="photos">
                  <img src={picture.url} alt="moreInstruments" />
                  <p>{picture.name}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
