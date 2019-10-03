export const addMessage = (message) => {
  return {
    type: 'NEW_MESSAGE',
    message
  }
}
 
export const removeMessage = () => {
  return {
    type: 'NEW_MESSAGE',
    message: null,
    baseMessage: null
  }
}

export const setNotification = (message,timer) => {
  return async dispatch => {
    await dispatch(addMessage(message))
    setTimeout(() => {
      dispatch(removeMessage())
    },timer * 1000)
  }
}


export const notificationReducer = (state = null, action) => {
  switch(action.type){
    case 'NEW_MESSAGE':
      const { message  } = action
      return {...state,message}
    default:
      return state
  }
}