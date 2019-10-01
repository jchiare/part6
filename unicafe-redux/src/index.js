import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const mood = value => {
    store.dispatch({
      type: value.toUpperCase()
    })
  }

  return (
    <div>
      <button onClick={() => mood('good')}>good</button>
      <button onClick={() => mood('ok')}>neutral</button>
      <button onClick={() => mood('bad')}>bad</button>
      <button onClick={() => mood('reset')}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>neutral {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)