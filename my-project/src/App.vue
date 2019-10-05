<template>
  <div id="app">
    <nav>
        <router-link to='/'>Home</router-link>
        <router-link to='/cards'>Cards</router-link>
        <!-- <router-link to='/register'>Register</router-link> -->
        <!-- <router-link to='/login'>Login</router-link> -->
    </nav>
    <router-view />
     <font-awesome-icon icon="user-secret" />
  </div>
</template>

<script>
export default {
}
</script>

<style>
  html, body, #app{
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  nav {
    border: 1px solid red;
    padding: 1rem;
  }
</style>