import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import MyAlbums from "./MyAlbums.js"
import AlbumName from "./AlbumName.js"
import PicName from "./PicName.js"

export default props => (
  <Router>
    <div>
      <Route exact path="/" component={MyAlbums} />
      <Route path="/album/:id" component={AlbumName} />
      <Route path="/pic/:id" component={PicName} />
    </div>
  </Router>
)
