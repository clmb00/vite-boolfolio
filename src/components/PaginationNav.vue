<script>

export default{
  name: 'PaginationNav',
  props:{
    links: Array
  },
  methods:{
    newPage(url){
      this.$emit('callApi', url);
    }
  }
}

</script>

<template>

<div class="link_container">
  <button class="link" v-for="(link, i) in links" :disabled="!link.url || link.active" :key="i" :class="link.active ? 'active' : ''" v-html="link.label" @click="newPage(link.url)"></button>
</div>

</template>

<style lang="scss" scoped>

.link_container{
  display: flex;
  gap: .5rem;
}

.link{
  color: black;
  font-weight: bold;
  cursor: pointer;
  padding: 1rem;
  background-color: rgba($color: #d3d3d3, $alpha: .7);
  border-radius: 1rem;
  &:disabled{
    background-color: rgba($color: #d3d3d3, $alpha: .4);
    border-color: rgba($color: #d3d3d3, $alpha: .1);
  }
  &.active{
    background-color: rgba($color: #deb887, $alpha: .7);
  }
}

</style>
