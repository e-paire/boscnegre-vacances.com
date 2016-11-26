import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import {FormattedMessage, injectIntl, intlShape} from "react-intl"
import {Sticky} from "react-sticky"
import {Icon} from "react-fa"
import ReactDayPicker from "react-day-picker"
import addDays from "date-fns/add_days"
import format from "date-fns/format"
import isSameDay from "date-fns/is_same_day"
import isWithinRange from "date-fns/is_within_range"
import setDay from "date-fns/set_day"
import setMonth from "date-fns/set_month"

import Content from "components/Content"

import "react-day-picker/lib/style.css"
import "./ReactDayPicker.css"
import styles from "./index.css"

const SECUREHOLIDAY_URL = "https://boscnegrevacancesfr.premium.secureholiday.net"
const SECUREHOLIDAY_ID = 14230

class BookingForm extends Component {
  constructor() {
    super()

    this.state = {
      isSelecting: false,
      isSelectingLastDay: false,
      from: null,
      to: null,
      temp: null,
    }

    this.localeUtils = {
      formatDay: this.formatDay.bind(this),
      formatMonthTitle: this.formatMonthTitle.bind(this),
      formatWeekdayShort: this.formatWeekdayShort.bind(this),
      formatWeekdayLong: this.formatWeekdayLong.bind(this),
      getFirstDayOfWeek: this.getFirstDayOfWeek.bind(this),
      getMonths: this.getMonths.bind(this),
    }

    this.handleDayClick = this.handleDayClick.bind(this)
    this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleMouseLeave() {
    this.setState({
      temp: null,
    })
  }

  handleDayClick(e, day) {
    const {from, isSelectingLastDay} = this.state

    if (day < new Date()) {
      return
    }

    // Enable day selection on mouse enter
    if (!isSelectingLastDay) {
      this.setState({
        isSelectingLastDay: true,
        from: day,
        to: null,
        temp: null,
      })
    }

    if (isSelectingLastDay) {
      // Reset the from-day if the clicked day is before the current from-day
      if (from && day < from) {
        this.setState({
          isSelectingLastDay: true,
          from: day,
          to: null,
          temp: null,
        })
      }
      // Reset everything if the clicked day is the same as the current from-day
      else if (isSameDay(day, from)) {
        this.setState({
          isSelectingLastDay: false,
          from: null,
          to: null,
          temp: null,
        })
      } else {
        // Unset the day selection on mouse enter
        this.setState({
          isSelectingLastDay: false,
          to: day,
          temp: null,
        })
      }
    }
  }

  handleDayMouseEnter(e, day) {
    const {isSelectingLastDay, from} = this.state
    if (!isSelectingLastDay || (from && day < from) || isSameDay(day, from)) {
      return
    }
    this.setState({
      temp: day,
    })
  }

  handleOpen() {
    this.setState({
      isSelecting: true,
      isSelectingLastDay: false,
    })
  }

  handleClose() {
    this.setState({
      isSelecting: false,
      isSelectingLastDay: false,
    })
  }

  formatDate(date, options) {
    return this.props.intl.formatDate(date, options)
  }

  formatDay(date) {
    return this.formatDate(date, {day: "numeric", month: "long", year: "numeric"})
  }

  formatMonthTitle(date) {
    return this.formatDate(date, {month: "long", year: "numeric"})
  }

  formatWeekdayShort(day) {
    const date = setDay(null, day)
    return this.formatDate(date, {weekday: "short"})
  }

  formatWeekdayLong(day) {
    const date = setDay(null, day)
    return this.formatDate(date, {weekday: "long"})
  }

  getFirstDayOfWeek() {
    return 1
  }

  getMonths() {
    const months = []
    for (let i = 0; i < 12; i++) {
      const date = setMonth(null, i)
      months[i] = this.formatDate(date, {month: "long"})
    }

    return months
  }

  getDefaultFrom() {
    const {from} = this.state
    const now = new Date()
    return from ? from : now
  }

  getDefaultTo() {
    const {to} = this.state
    const now = new Date()
    return to ? to : addDays(now, 7)
  }

  getSecureHolidayUrl() {
    const {intl} = this.props
    const arrivalDate = format(this.getDefaultFrom(), "DD%2FMM%2FYYYY")
    const departureDate = format(this.getDefaultTo(), "DD%2FMM%2FYYYY")
    return `${SECUREHOLIDAY_URL}/${intl.locale}/${SECUREHOLIDAY_ID}/result?arrivalDate=${arrivalDate}&departureDate=${departureDate}`
  }

  render() {
    const {from, isSelecting, temp, to} = this.state
    const {browser} = this.props
    const now = new Date()
    return (
      <div className={styles.wrapper}>
        {isSelecting && <div className={styles.overlay} onClick={this.handleClose} />}
        <Sticky className={styles.sticky} isActive={browser.greaterThan.m}>
          <Content>
            <div className={styles.form}>
              <div className={styles.message} onClick={isSelecting ? this.handleClose : this.handleOpen}>
                <div className={styles.type}>
                  <FormattedMessage id="booking_form.my_stay" />
                </div>
                <div className={styles.from}>
                  <div className={styles.fromIcon}>
                    <Icon name="calendar-minus-o" />
                  </div>
                  <div className={styles.fromDate}>
                    {this.formatDate(this.getDefaultFrom())}
                  </div>
                </div>
                <div className={styles.to}>
                  <div className={styles.toIcon}>
                    <Icon name="calendar-plus-o" />
                  </div>
                  <div className={styles.toDate}>
                    {this.formatDate(this.getDefaultTo())}
                  </div>
                </div>
              </div>
              <div className={styles.submit}>
                <a className={styles.button} href={this.getSecureHolidayUrl()} target="_blank" rel="nofollow">
                  <FormattedMessage id="booking_form.book" />
                </a>
              </div>
            </div>
          </Content>
          {isSelecting &&
            <div className={styles.dropdown}>
              <ReactDayPicker
                className="bn-range"
                numberOfMonths={2}
                fromMonth={now}
                selectedDays={day => from && (temp && isWithinRange(day, from, temp)) || (to && isWithinRange(day, from, to))}
                disabledDays={day => day < now}
                modifiers={{
                  from: day => isSameDay(day, from),
                  to: day => (temp && isSameDay(day, temp)) || (to && isSameDay(day, to)),
                }}
                onDayClick={this.handleDayClick}
                onDayMouseEnter={this.handleDayMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                localeUtils={this.localeUtils}
              />
            </div>
          }
        </Sticky>
      </div>
    )
  }
}

BookingForm.propTypes = {
  browser: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
  onChange: PropTypes.func,
}

export default connect(
  ({browser}) => ({browser}),
)(injectIntl(BookingForm))
