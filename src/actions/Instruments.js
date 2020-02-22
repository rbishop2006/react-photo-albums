import axios from "axios"

// function fetchInstruments() {
//   axios.get("/instruments").then(resp => {
//     setInstruments(resp.data)
//   })
// }

export function getInstruments() {
  return new Promise((resolve, reject) => {
    axios
      .get("/instruments")
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject()
      })
  })
}

export function getInstrument(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`/instruments/${id}?_embed=pictures`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject()
      })
  })
}

export function getPicture(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`/pictures/${id}`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject()
      })
  })
}
export function getPictures() {
  return new Promise((resolve, reject) => {
    axios
      .get("/pictures")
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject()
      })
  })
}
