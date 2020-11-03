<template>
<!-- should be called board view-->
  <div id="jobBoard">
      <section-detail v-for="section in sections" v-bind:key="section.section" v-bind:section="section"></section-detail>
  </div>
</template>

<script>
import SectionDetail from "./SectionDetail";
import sections from "../components/sections";

export default {
  name: "cards",

  components: {
    // CardDetails,
    SectionDetail
  },

  data() {
    return {
      sections
    };
  }
};
</script>

<style>
#jobBoard{
    height: 90vh;
    width: 80wv;
    overflow-x:auto;
}
</style>