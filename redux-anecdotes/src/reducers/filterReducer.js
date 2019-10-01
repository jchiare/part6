export const filterAction = text => {
  return {
    type: 'FILTER_TEXT',
    text
  }
}

export const filterReducer = (state = null, action) => {
  switch(action.type){
    case 'FILTER_TEXT':
      const { text } = action
      return {
        ...state,
        text
      }
    default:
      return state
  }
}