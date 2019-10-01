import React from 'react'
import { connect } from 'react-redux'

import { filterAction } from '../reducers/filterReducer'

const _Filter = ({ filterAction }) => {
  const handleChange = (event) => {
    const { value } = event.target
    filterAction(value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  filterAction
}

export const Filter = connect(null,mapDispatchToProps)(_Filter)