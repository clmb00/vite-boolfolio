<script>

import axios from 'axios';

export default{
  name: 'App',
  data(){
    return{
      url: 'http://127.0.0.1:8000/api/projects',
      projects: []
    }
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
  
  <h1>Ciao</h1>

</template>

<style lang="scss">

</style>
