import React from 'react';
import { connect } from 'react-redux'

import { voteAction } from '../reducers/anecdoteReducer'
import { addMessage, removeMessage } from '../reducers/notificationReducer'

const _AnecdoteList = ({ anecdotes, voteAction, addMessage, removeMessage }) => {

  const handleClick = ({id, content }) => {
    voteAction(id)
    addMessage(content,'You voted ')
    setTimeout(() => {
      removeMessage()
    },5000)
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
  addMessage,
  removeMessage
}

export const AnecdoteList = connect(mapStateToProps,mapDispatchToProps)(_AnecdoteList)