// Action
// const addTodo = { type: 'ADD_TODO', text: 'My Todo' }
// const removeTodo = { type: 'REMOVE_TODO', id: 1 }
// const toggleTodo = { type: 'TOGGLE_TODO', id: 1 }
// const showCompletedTodo = {type: 'SET_VISIBILITY_FILTER', filter: 1 }

// Action Creator
const addTodo = text => ({ type: 'ADD_TODO', text })
const removeTodo = id => ({ type: 'REMOVE_TODO', id })
const toggleTodo = id => ({ type: 'TOGGLE_TODO', id })

export {
  addTodo,
  removeTodo,
  toggleTodo
}
