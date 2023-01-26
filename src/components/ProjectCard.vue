<script>

export default{
  name: 'ProjectCard',
  props:{
    title: String,
    client: String,
    type: String,
    technologies: Array,
    description: String
  }
}

</script>

<template>

<div class="card">
  <div class="card_img">
    <img src="#" alt="No Image">
  </div>
  <div class="card_title">
    <h3><span class="text_accent">Title:</span> {{title}}</h3>
    <h3><span class="text_accent">Client:</span> {{client}}</h3>
    <h3><span class="text_accent">Type:</span> {{type}}</h3>
    <div v-if="technologies" class="card_tag">
      <span v-for="technology in technologies" :key="technology.id" >{{ technology.name }}</span>
    </div>
  </div>
  <div class="card_descr">
    <p>
      {{description}}
    </p>
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
  .card_img{
    width: 25%;
    height: 250px;
    background-color: lightgrey;
    border-radius: 2rem;
    overflow: hidden;
    color: black;
    text-align: center;
    line-height: 250px;
  }
  .card_title{
    width: 25%;
    padding-left: 1rem;
    .card_tag{
      display: flex;
      flex-wrap: wrap;
      span{
        cursor: pointer;
        padding-block: .5rem;
        padding-inline: 1rem;
        background-color: rgba($color: #7a0000, $alpha: .3);
        border-radius: 50px;
        margin: .25rem;
        font-size: .8rem;
        width: fit-content;
        &:hover{
          background-color: rgba($color: #7a0000, $alpha: .5);
        }
      }
    }
  }
  .card_descr{
    width: 50%;
    max-height: 250px;
    overflow-y: auto;
  }

  .text_accent{
    font-size: 1.2rem;
    color: #000000b7;
  }
}

</style>
