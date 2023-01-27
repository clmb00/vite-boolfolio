<script>

import axios from 'axios';

import ProjectCard from '../components/ProjectCard.vue';
import PaginationNav from '../components/PaginationNav.vue';

import { url } from "../data/data";

export default{
  name: 'Portfolio',
  data(){
    return{
      url,
      projects: [],
      links: []
    }
  },
  components:{
    ProjectCard,
    PaginationNav
  },
  methods:{
    callApi(url){
      axios.get(url)
          .then(result=>{
            this.projects = result.data.projects.data;
            this.links = result.data.projects.links;
            console.log(this.projects);
          })
    }
  },
  mounted(){
    this.callApi(this.url);
  }
}

</script>

<template>

  <div class="container">
    <h1>Projects</h1>
    <div class="card_wrapper">
      <ProjectCard
        v-for="project in projects" :key="project.id"
        :title="project.name" 
        :slug="project.slug" 
        :client="project.client_name"
        :type="project.type.name"
        :technologies="project.technologies"
        :description="project.summary"
      />
    </div>
    <PaginationNav
      :links="links" 
      @callApi="callApi"
    />
  </div>

</template>

<style lang="scss" scoped>

.card_wrapper{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

</style>
