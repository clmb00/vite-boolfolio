<script>

import axios from 'axios';

import ProjectCard from './components/ProjectCard.vue';

export default{
  name: 'App',
  data(){
    return{
      url: 'http://127.0.0.1:8000/api/projects',
      projects: []
    }
  },
  components:{
    ProjectCard
  },
  methods:{
    callApi(url){
      axios.get(url)
          .then(result=>{
            this.projects = result.data.projects;
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
        :client="project.client_name"
        :type="project.type.name"
        :technologies="project.technologies"
        :description="project.summary"
      />
    </div>
  </div>

</template>

<style lang="scss" scoped>

.card_wrapper{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

</style>
