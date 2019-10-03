import React from 'react';
import { connect } from 'react-redux'

import { voteAction } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const _AnecdoteList = ({ anecdotes, voteAction, setNotification }) => {

  const handleClick = ({id, content, votes }) => {
    voteAction(id,votes + 1,content)
    setNotification(`You voted ${content}`,5)
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleClick(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

const anecdotesToShow = ({ anecdotes, filter}) => {
  anecdotes = anecdotes.sort((a,b) => (a.votes < b.votes) ? 1 : -1)
  return (filter 
    ? anecdotes.filter(anec => anec.content.includes(filter.text)) 
    : anecdotes
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: anecdotesToShow(state),
    filter: state.filter
  }
}

const mapDispatchToProps = {
  voteAction,
  setNotification
}

export const AnecdoteList = connect(mapStateToProps,mapDispatchToProps)(_AnecdoteList)