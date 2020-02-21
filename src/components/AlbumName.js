import React from "react"
import { Link } from "react-router-dom"
import "../styles/AlbumName.css"

export default function(props) {
  return (
    <div className="wrapperAlbumName">
      <header>My Albums</header>
      <div className="flexSect">
        <div className="sidebar">
          <p className="albumNums">Album 1</p>
          <p className="albumNums">Album 2</p>
          <p className="albumNums">Album 3</p>
          <p className="albumNums">Album 4</p>
          <p className="albumNums">Album 5</p>
          <p className="albumNums">Album 6</p>
        </div>
        <div className="picDisplay">
          <div className="photos">
            <img src="http://placehold.it/200" />
            <p>Pic Name</p>
          </div>
          <div className="photos">
            <img src="http://placehold.it/200" />
            <p>Pic Name</p>
          </div>
          <div className="photos">
            <img src="http://placehold.it/200" />
            <p>Pic Name</p>
          </div>
          <div className="photos">
            <img src="http://placehold.it/200" />
            <p>Pic Name</p>
          </div>
          <div className="photos">
            <img src="http://placehold.it/200" />
            <p>Pic Name</p>
          </div>
          <div className="photos">
            <img src="http://placehold.it/200" />
            <p>Pic Name</p>
          </div>
        </div>
      </div>
    </div>
  )
}
