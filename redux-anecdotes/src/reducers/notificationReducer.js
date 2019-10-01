export const addMessage = (message, baseMessage) => {
  return {
    type: 'NEW_MESSAGE',
    baseMessage,
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


export const notificationReducer = (state = null, action) => {
  switch(action.type){
    case 'NEW_MESSAGE':
      const { message, baseMessage } = action
      return {...state,message,baseMessage}
    default:
      return state
  }
}