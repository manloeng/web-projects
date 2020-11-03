<template>
  <section id="cardDetails">
      <!-- with a total list count - click up -->
      <button>Add Task</button>

    <div class="cardInfo">
      <p>To Do : {{task}}</p>
      <p>Colour : {{colour}}</p>
      <p>Length : {{length}}</p>
      <!-- asana has a select end date func -->
      <p>Start Date: {{startDate}}</p>
      <!-- list of avatar_url/ team members like click up-->
    </div>
  </section>
</template>


<script>
export default {
  props: ["colour", "task", "length", "startDate", "avatar_url"]
};
</script>

<style>
#sectionInfo {
  /* color: red; */
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0;
}
.cardInfo {
  border: 1px solid goldenrod;
  border-radius: 0.25rem;
  margin: 1rem;
  font-size: 0.9rem;
}

#cardDetails{
  min-width: 200px;
}
</style>