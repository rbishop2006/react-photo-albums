import React from "react"
import { Link } from "react-router-dom"
import "../styles/MyAlbums.css"

export default function(props) {
  return (
    <div className="wrapperMyAlbums">
      <header>My Albums</header>
      <div className="gridAlbums">
        <div className="covers">
          <img src="http://placehold.it/200" />
          <p>Album Name</p>
        </div>
        <div className="covers">
          <img src="http://placehold.it/200" />
          <p>Album Name</p>
        </div>
        <div className="covers">
          <img src="http://placehold.it/200" />
          <p>Album Name</p>
        </div>
        <div className="covers">
          <img src="http://placehold.it/200" />
          <p>Album Name</p>
        </div>
        <div className="covers">
          <img src="http://placehold.it/200" />
          <p>Album Name</p>
        </div>
        <div className="covers">
          <img src="http://placehold.it/200" />
          <p>Album Name</p>
        </div>
      </div>
    </div>
  )
}
