import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchData } from '../redux/actions'

export const RefreshCurrenciesBtn = ({ fetchData }) => (
  <button className="btn btn-outline-primary mb-5" onClick={fetchData}>
    Get a fresh data
  </button>
)

RefreshCurrenciesBtn.propTypes = {
  fetchData: PropTypes.func
}

export default connect(
  null,
  { fetchData }
)(RefreshCurrenciesBtn)
