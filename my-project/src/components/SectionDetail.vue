<template>
  <section id="sectionList">
      <h1>{{section}}</h1>
    <div id="sectionGrid">
      <p>1 Task left</p>
      <!-- Contains the cards with the users todoList -->
      <card-details v-for="task in tasks" v-bind:key="tasks.task" v-bind="task"></card-details>
    </div>
  </section>
</template>

<script>
import CardDetails from "./CardDetails";
import tasks from "../components/tasks";

// need to get section name here and total amount of tasks
export default {
  name: "cards",

  components: {
    CardDetails
  },

  props: ["section"],

  data() {
    return {
      tasks
    };
  }
};
</script>

<style>
#sectionList{
  display: inline-block;
  width: 250px;
}

#sectionGrid{
  display: flex;
  flex-direction: column;
  height: 80vh;
  overflow: auto;
}
</style>