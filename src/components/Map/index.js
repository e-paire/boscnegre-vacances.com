import PropTypes from "prop-types"
import React, {Component} from "react"
import GoogleMap from "react-google-map"
import ReactGoogleMapLoader from "react-google-maps-loader"
import {FormattedMessage} from "react-intl"

import {Content} from "../Content"
import iconMarkerBlue from "./assets/iconMarkerBlue.svg"
import iconMarkerGray from "./assets/iconMarkerGray.svg"
import iconMarkerGreen from "./assets/iconMarkerGreen.svg"
import iconMarkerOrange from "./assets/iconMarkerOrange.svg"
import iconMarkerYellow from "./assets/iconMarkerYellow.svg"
import styles from "./index.module.css"

class MapLoaded extends Component {
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
    const infoWindow = new googleMaps.InfoWindow({content: description})

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
                <div>
                  <FormattedMessage id="markers.orange" />
                </div>
              </div>
              <div className={styles.legend}>
                <img src={iconMarkerGreen} />
                <div>
                  <FormattedMessage id="markers.green" />
                </div>
              </div>
              <div className={styles.legend}>
                <img src={iconMarkerYellow} />
                <div>
                  <FormattedMessage id="markers.yellow" />
                </div>
              </div>
              <div className={styles.legend}>
                <img src={iconMarkerBlue} />
                <div>
                  <FormattedMessage id="markers.blue" />
                </div>
              </div>
              <div className={styles.legend}>
                <img src={iconMarkerGray} />
                <div>
                  <FormattedMessage id="markers.gray" />
                </div>
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
            coordinates={coordinates.map((coordinate) => {
              const {
                color,
                description,
                is_open,
                latitude,
                longitude,
                title,
              } = coordinate
              const isOpen = is_open || false
              return {
                ...(title && {title: title}),
                position: {
                  lat: latitude,
                  lng: longitude,
                },
                icon: this.getIcon(color),
                ...(description && {
                  onLoaded: (googleMaps, map, marker) =>
                    this.onMarkerLoaded(
                      googleMaps,
                      map,
                      marker,
                      description,
                      isOpen
                    ),
                }),
              }
            })}
          />
        </div>
      </div>
    )
  }
}

MapLoaded.propTypes = {
  coordinates: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.oneOf(["blue", "gray", "green", "orange", "yellow"]),
      description: PropTypes.string,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      title: PropTypes.string,
      is_open: PropTypes.bool,
    })
  ),
  googleMaps: PropTypes.object.isRequired,
}

export const Map = (props) => (
  <ReactGoogleMapLoader
    params={{
      key: "AIzaSyDwHC6ADu4QEiTgnoriOAoUOgsUqOs10J0",
      libraries: "places",
    }}
    render={(googleMaps) =>
      googleMaps && <MapLoaded googleMaps={googleMaps} {...props} />
    }
  />
)
