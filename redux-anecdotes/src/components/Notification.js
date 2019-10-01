import React from 'react'
import { connect } from 'react-redux'

const _Notification = ({ notification }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  
  return (
    <div>
      {notification && notification.message && 
        <div style={style}>
          {notification.baseMessage} '{notification.message}'
        </div>
      }
    </div>

  )
}

const mapStateToProps = (state) => {
  // sometimes it is useful to console log from mapStateToProps
  console.log(state)
  return {
    notification: state.notification
  }
}

export const Notification = connect(mapStateToProps)(_Notification)