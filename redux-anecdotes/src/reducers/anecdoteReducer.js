import anecdoteService from '../services/anecdotes'

export const voteAction = (id,votes,content) => {
  return async dispatch => {
    await anecdoteService.addVote(id,votes,content)
    dispatch({
      type:'ADD_VOTE',
      id
    })
  }
}

export const anecdoteAction = data => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(data)
    dispatch({
      type:'ADD_ANECDOTE',
      data:newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const anecdoteReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_VOTE':
      const anecdoteToChange = state.find(a => a.id === action.id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes:anecdoteToChange.votes + 1
      }
      return state.map(anecdote => 
        anecdote.id !== action.id ? anecdote : changedAnecdote
      )
    case 'ADD_ANECDOTE':
      const { content, votes, id } = action.data
      return state.concat({
        content,
        votes,
        id
      })
      case 'INIT_ANECDOTES':
        return action.data
    default:
      return state
  }
}