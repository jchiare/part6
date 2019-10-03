import React from 'react';
import { connect } from 'react-redux'

import { anecdoteAction } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const _AnecdoteForm = ({ anecdoteAction, setNotification }) => {

  const addAnecdote = async event => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    anecdoteAction(content)
    setNotification(`You created '${content}'`,5)
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
  setNotification
}

export const AnecdoteForm = connect(null,mapDispatchToProps)(_AnecdoteForm)