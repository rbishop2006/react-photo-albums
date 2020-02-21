import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/MyAlbums.css"
import { getInstruments } from "../actions/Instruments"

export default function(props) {
  const [instruments, setInstruments] = useState([])

  useEffect(() => {
    getInstruments().then(data => setInstruments(data))
  }, [])

  return (
    <div className="wrapperMyAlbums">
      <header>Instruments</header>
      <div className="gridAlbums">
        {instruments.map(instrument => (
          <div key={"instrument" + instrument.id} className="covers">
            <Link to={"/album/" + instrument.id}>
              <img src={instrument.url} alt="Instrument" />
              <p>{instrument.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
