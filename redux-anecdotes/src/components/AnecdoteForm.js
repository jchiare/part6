import React from 'react';
import { connect } from 'react-redux'

import { anecdoteAction } from '../reducers/anecdoteReducer'
import { addMessage, removeMessage } from '../reducers/notificationReducer'

const _AnecdoteForm = ({ anecdoteAction, removeMessage, addMessage }) => {

  
  const addAnecdote = event => {
    event.preventDefault()
    const content = event.target.content.value
    anecdoteAction(content)
    addMessage(content,'You created ')
    setTimeout(() => {
      removeMessage()
    },5000)
  }

  return (
  <div>
    <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="content" /></div>
        <button >create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  anecdoteAction,
  addMessage,
  removeMessage
}

export const AnecdoteForm = connect(null,mapDispatchToProps)(_AnecdoteForm)