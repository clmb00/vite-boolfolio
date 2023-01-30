<script>

export default{
  name: 'Header'
}

</script>

<template>

  <header>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'portfolio' }">Portfolio</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'about' }">About Me</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'contacts' }">Contact Me</router-link>
        </li>
      </ul>
    </nav>
  </header>

</template>

<style lang="scss" scoped>

header{
  width: 100%;
  background-color: #222;
  padding: 1.5rem;
  box-shadow: 0px 0px 8px 2px #222;
  ul{
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    padding-right: 3rem;
  }
  li{
    list-style: none;
  }
}

a{
  color: white;
  font-size: 2rem;
  text-decoration: none;
  &:hover{
    color: antiquewhite;
  }
  &:active{
    color: bisque;
  }
  &.active{
    color: #deb887;
  }
}

</style>