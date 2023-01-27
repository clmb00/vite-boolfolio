<script>

export default{
  name: 'Error404'
}

</script>

<template>

  <div class="container">
    <h1>Error 404</h1>
    <p>Page not found</p>
    <router-link :to="{ name: 'home' }">Go Back to Home</router-link>
  </div>

</template>

<style lang="scss" scoped>

a{
  color: white;
}

p{
  margin-bottom: 1rem;
}

.container{
  text-align: center;
}

h1{
  color: rgb(196, 0, 0);
  margin-bottom: 1rem;
}

</style>