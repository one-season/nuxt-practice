export const state = () => ({
  todoList: []
});

export const mutations = {
  add(state, text) {
    state.todoList.push({
      text,
      done: false
    })
  },

  remove(state) {
    state.todoList = state.todoList.filter(item => !item.done)
  },

  toggle(state, todo) {
    todo.done = !todo.done;
  }
}