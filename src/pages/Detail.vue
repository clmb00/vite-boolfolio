<script>

import axios from 'axios';

import { url } from "../data/data";

export default{
  name: 'Detail',
  data(){
    return{
      project: {type: {}},
      url
    }
  },
  methods:{
    callApi(){
      axios.get(url + '/' + this.$route.params.slug)
          .then(result=>{
            this.project = result.data;
            console.log(this.project);
          })
    }
  },
  mounted(){
    this.callApi();
  }
}

</script>

<template>

  <div class="container">
    <h1>{{project.name}}</h1>
    <h3><span class="text_accent">For:</span> {{project.client_name}}</h3>
    <h3><span class="text_accent">Type:</span> {{project.type.name}}</h3>
    <div class="image">
      <img :src="project.cover_image" :alt="project.slug">
    </div>
    <div v-if="project.technologies" class="card_tag">
      <span v-for="technology in project.technologies" :key="technology.id" >{{ technology.name }}</span>
    </div>
    <p>{{ project.summary }}</p>
  </div>

</template>

<style lang="scss" scoped>

h1{
  margin-bottom: 2rem;
}

h3{
  margin-bottom: 1rem;
}

.image{
  margin-bottom: 1rem;
  img{
    height: 400px;
  }
}

.text_accent{
    font-size: 1.2rem;
  }

  .card_tag{
    margin-bottom: 1rem;
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

</style>