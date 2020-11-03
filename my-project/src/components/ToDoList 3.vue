<template>
  <div id="toDoInfo">
    <h1>Hello From To Do!</h1>
    <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    <div id="toDo" class='ui centered card' v-for="todo in todos" v-bind:key="todo">
          Title: {{ todo.title }}
          <br/>
          Project Name : {{ todo.project }}
          completed : {{todo.done}}
          <span class='right floated edit icon'>
            <i class='edit icon'></i>
          </span>
  </div>
  </div>
</template>

<script>
export default {
  props: ["todos"]
};
</script>

<style>
#toDoInfo{
  border: 1px solid goldenrod;
  margin: 1rem; 
  padding: 1rem;
}
  #toDo{  
    border: 1px solid red;
    margin: 1rem;
    padding: 1rem;
  }
</style>