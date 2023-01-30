<script>

export default{
  name: 'ProjectCard',
  props:{
    title: String,
    slug: String,
    client: String,
    type: String,
    technologies: Array,
    description: String
  }
}

</script>

<template>

<div class="card">
  <!-- <div class="card_img">
    <img src="#" alt="No Image">
  </div> -->
  <div class="card_title">
    <h3><router-link :to="{name: 'detail', params: {slug: slug}}">{{title}}</router-link></h3>
    <h3><span class="text_accent">For:</span> {{client}}</h3>
    <h3><span class="text_accent">Type:</span> {{type}}</h3>
    <div v-if="technologies" class="card_tag">
      <span v-for="technology in technologies" :key="technology.id" >{{ technology.name }}</span>
    </div>
  </div>
  <div class="card_descr">
    <p v-html="description"></p>
    <p>Click the title or <router-link :to="{name: 'detail', params: {slug: slug}}">here</router-link> to see more about this project</p>
  </div>
</div>

</template>

<style lang="scss" scoped>

.card{
  display: flex;
  width: 100%;
  padding: 2rem;
  margin-block: 1rem;
  border-radius: 2rem;
  background-color: rgba($color: #96afc4, $alpha: .5);
  .card_title{
    width: 40%;
    padding-left: 1rem;
    h3{
      margin-bottom: .5rem;
    }
    a{
      display: inline-block;
      color: white;
      text-decoration: none;
      font-size: 2rem;
      padding-bottom: 1rem;
    }
    .card_tag{
      display: flex;
      flex-wrap: wrap;
      span{
        cursor: pointer;
        padding-block: .5rem;
        padding-inline: 1rem;
        background-color: rgba($color: #deb887, $alpha: .5);
        border-radius: 50px;
        margin: .25rem;
        font-size: .8rem;
        width: fit-content;
        &:hover{
          background-color: rgba($color: #deb887, $alpha: .8);
        }
      }
    }
  }
  .card_descr{
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    & p:first-of-type{
      max-height: 250px;
      padding-bottom: 1rem;
      overflow-y: auto;
    }
    & p:last-of-type{
      margin-top: auto;
      a{
        color: white;
      }
    }
  }

  .text_accent{
    font-size: 1.2rem;
    color: #000000b7;
  }
}

</style>
