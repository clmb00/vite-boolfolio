<script>

import axios from 'axios';

import ProjectCard from '../components/ProjectCard.vue';
import PaginationNav from '../components/PaginationNav.vue';

import { url } from "../data/data";

export default{
  name: 'Portfolio',
  data(){
    return{
      base_url: url,
      projects: [],
      links: [],
      types: [],
      technologies: [],
      searchWhere: "",
      searchWhat: "",
      newUrl: "",
      tagActive: ''
    }
  },
  components:{
    ProjectCard,
    PaginationNav
  },
  methods:{
    callApi(url){

      if(url.includes('search') && url.includes('page')){
        url = url + '&what=' + this.searchWhat + '&where=' + this.searchWhere;
      }

      axios.get(url)
          .then(result=>{
            this.projects = result.data.projects.data;
            this.links = result.data.projects.links;
            if(result.data.types){
              this.types = result.data.types;
            }
            if(result.data.technologies){
              this.technologies = result.data.technologies;
            }
            console.log(this.links);
          })

    },
    callSearch(){
      if(this.searchWhere){
        this.newUrl = this.base_url + '/search?what=' + this.searchWhat + '&where=' + this.searchWhere;
        this.callApi(this.newUrl);
      }
    },
    callFilterTech(id){
      this.callApi(this.base_url + '/filter-type/' + id);
    }
  },
  mounted(){
    this.callApi(this.base_url);
  }
}

</script>

<template>

  <div class="container">
    
    <h1>Projects</h1>

    <div class="search">
      <span>Search: </span>
      <input type="text" v-model.trim="searchWhat" placeholder="Lorem..." @keyup.enter="callSearch">
      <span>in</span>
      <select v-model="searchWhere">
        <option value="" disabled>Select one</option>
        <option value="name">Name</option>
        <option value="client_name">Client name</option>
        <option value="summary">Summary</option>
      </select>
      <button @click="callSearch"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>

    <div class="types">
      <span>Types: </span>
      <div class="tag" v-for="elem in types" :key="'type-' + elem.id" @click="callFilterTech(elem.id); tagActive = elem.slug" :class="tagActive == elem.slug ? 'tagActive' : ''">
        {{ elem.name }}
      </div>
    </div>
    
    <div class="technos">
      <span>Technologies: </span>
      <div class="tag" v-for="elem in technologies" :key="'tech-' + elem.id" :class="tagActive == elem.slug ? 'tagActive' : ''">
        {{ elem.name }}
      </div>
    </div>

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

.search{
  text-align: end;
  input{
    background-color: rgba($color: #FFF, $alpha: .9);
    padding: .6rem 1rem;
    border-radius: 1rem;
    margin-block: .5rem;
    min-width: 25%;
    &:focus{
      outline: 2px solid #deb887;
    }
  }
  button{
    cursor: pointer;
    padding: .6rem .8rem;
    border-radius: 50%;
    &:active{
      outline: 2px solid #deb887;
    }
  }
  select{
    padding: .6rem .8rem;
    border-radius: 1rem;
    margin-inline-end: .5rem;
    &:focus{
      outline: 2px solid #deb887;
    }
  }

  span{
    margin-inline: .5rem;
  }
}

.types, .technos{
  text-align: end;
}

.tag{
  cursor: pointer;
  display: inline-block;
  padding: .5rem 1rem;
  border-radius: 50px;
  background-color: #deb8872f;
  margin: .5rem .25rem;
  &:hover{
    background-color: #deb8875a;
  }
  &.tagActive{
    background-color: #deb887;
  }
}

</style>
