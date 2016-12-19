import React, {Component, PropTypes} from "react"
import remark from "remark"
import html from "remark-html"
import GoogleMap from "react-google-map"
import GoogleMapLoader from "react-google-maps-loader"

import Content from "components/Content"

import iconMarkerBlue from "./assets/iconMarkerBlue.svg"
import iconMarkerGray from "./assets/iconMarkerGray.svg"
import iconMarkerGreen from "./assets/iconMarkerGreen.svg"
import iconMarkerOrange from "./assets/iconMarkerOrange.svg"
import iconMarkerYellow from "./assets/iconMarkerYellow.svg"

import styles from "./index.css"

class Map extends Component {
  getIcon(color) {
    switch (color) {
    case "blue":
      return iconMarkerBlue
    case "gray":
      return iconMarkerGray
    case "green":
      return iconMarkerGreen
    case "orange":
      return iconMarkerOrange
    case "yellow":
      return iconMarkerYellow
    default:
      return iconMarkerGray
    }
  }

  onMarkerLoaded(googleMaps, map, marker, description, isOpen) {
    const content = remark().use(html).process(description).contents
    const infoWindow = new googleMaps.InfoWindow({content})

    googleMaps.event.addListener(marker, "click", () => {
      infoWindow.open(map, marker)
    })

    if (isOpen) {
      infoWindow.open(map, marker)
    }
  }

  render() {
    const {coordinates, googleMaps} = this.props
    return (
      <div>
        <div className={styles.legendsWrapper}>
          <Content>
            <div className={styles.legends}>
              <div className={styles.legend}>
                <img src={iconMarkerOrange} />
                <div>{"Bosc Nègre"}</div>
              </div>
              <div className={styles.legend}>
                <img src={iconMarkerGreen} />
                <div>{"Plus beaux villages de France"}</div>
              </div>
              <div className={styles.legend}>
                <img src={iconMarkerYellow} />
                <div>{"Joli marchés"}</div>
              </div>
              <div className={styles.legend}>
                <img src={iconMarkerBlue} />
                <div>{"Châteaux"}</div>
              </div>
              <div className={styles.legend}>
                <img src={iconMarkerGray} />
                <div>{"Lieux touristiques"}</div>
              </div>
            </div>
          </Content>
        </div>
        <div className={styles.map}>
          <GoogleMap
            googleMaps={googleMaps}
            zoom={10}
            center={{
              lat: 44.597091,
              lng: 0.873799,
            }}
            scrollwheel={false}
            coordinates={coordinates.map(coordinate => {
              const {color, description, is_open, latitude, longitude, title} = coordinate
              const isOpen = is_open || false
              return ({
                ...title && {title: title},
                position: {
                  lat: latitude,
                  lng: longitude,
                },
                icon: this.getIcon(color),
                ...description && {
                  onLoaded: (googleMaps, map, marker) =>
                    this.onMarkerLoaded(googleMaps, map, marker, description, isOpen),
                }
              })
            })}
          />
        </div>
      </div>
    )
  }
}

Map.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.oneOf(["blue", "gray", "green", "orange", "yellow"]),
    description: PropTypes.string,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    title: PropTypes.string,
    is_open: PropTypes.bool,
  })),
  googleMaps: PropTypes.object.isRequired,
}

export default GoogleMapLoader(Map, {
  libraries: ["places"],
  key: "AIzaSyDwHC6ADu4QEiTgnoriOAoUOgsUqOs10J0",
})
