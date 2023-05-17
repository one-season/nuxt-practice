<template>
  <div>
    <h2>IndexPage</h2>
    
    <nuxt-link to="/login">登录</nuxt-link>
    <nuxt-link to="/profile">个人中心</nuxt-link>
    <nuxt-link to="/news">新闻中心</nuxt-link>

    <hr>
    <button @click="handleLoading">show loading</button>

    <hr>
    <button @click="increment">
      store / index.js / conter：{{ count }}
    </button>

    <hr>
    <ul>
      store/todos.js：
      <li v-for="todo in todos">
        <input 
          type="checkbox" 
          :checked="todo.done"
          @change="toggle(todo)"  
        >

        <span :class="{ done: todo.done }">
          {{ todo.text }}
        </span>
      </li>

      <li>
        <input 
          placeholder="What needs to be done？"
          @keyup.enter="addTodo"
        >
      </li>

      <button
        v-if="todos.length > 1" 
        @click="remove"
      >
        Delete Selected
      </button>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapMutations } from "vuex";

  export default {
    name: 'IndexPage',
    computed: {
      ...mapState({
        count: 'counter',
        todos: state => state.todos.todoList
      })
    },
    methods: {
      ...mapMutations({
        toggle: 'todos/toggle', 
        remove: 'todos/remove',
        increment: 'increment'
      }),

      handleLoading() {
        console.log(this.$nuxt);
        this.$nuxt.$loading.start();

        setTimeout(() => this.$nuxt.$loading.finish(), 2000);
      },
      addTodo(e) {
        this.$store.commit('todos/add', e.target.value);
        e.target.value = '';
      }
    }
  }
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
