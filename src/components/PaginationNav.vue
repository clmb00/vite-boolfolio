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
  <div class="link" v-for="(link, i) in links" v-show="link.url" :key="i" :class="link.active ? 'active' : ''" v-html="link.label" @click="newPage(link.url)"></div>
</div>

</template>

<style lang="scss" scoped>

.link_container{
  display: flex;
  gap: .5rem;
}

.link{
  cursor: pointer;
  padding: 1rem;
  background-color: rgba($color: #d3d3d3, $alpha: .7);
  border-radius: 1rem;
  &.active{
    background-color: rgba($color: #d3d3d3, $alpha: 1);
  }
}

</style>
