<script>

import axios from 'axios';
import {baseUrl} from '../data/data';

export default{
  name: 'Contacts',
  data(){
    return{
        name: '',
        email: '',
        message: '',
        errors: {},
        loading: false,
        showForm: true
    }
  },
  methods:{
    sendForm(){

        this.loading = true;

        const data = {
            name: this.name,
            email: this.email,
            message: this.message,
        }

        axios.post(baseUrl + '/contacts', data)
            .then(result => {
                this.loading = false;
                if(!result.data.success){
                    this.errors = result.data.errors;
                } else {
                    this.showForm = false;
                    this.name = '';
                    this.email = '';
                    this.message = '';
                    this.errors = {};
                }
            })
    }
  }
}

</script>

<template>

  <div class="container">
    <h1>Contact Me</h1>

    <div class="container">
      <form v-if="showForm" @submit.prevent="sendForm()">
        <div>
            <input :class="{'is_invalid': errors.name}" v-model.trim="name" type="text" name="name" placeholder="Name">
            <p v-for="(error, index) in errors.name" :key="'name-' + index" class="error">{{error}}</p>
        </div>
        <div>
            <input :class="{'is_invalid': errors.email}" v-model.trim="email" type="text" name="email" placeholder="Email">
            <p v-for="(error, index) in errors.email" :key="'email-' + index" class="error">{{error}}</p>
        </div>
        <div>
            <textarea :class="{'is_invalid': errors.message}" v-model.trim="message" name="message" id="message_contacts" cols="30" rows="10" placeholder="Message..."></textarea>
            <p v-for="(error, index) in errors.message" :key="'message-' + index" class="error">{{error}}</p>
        </div>

        <button type="submit" :disabled="loading">{{ loading ? 'Sending...' : 'Send' }}</button>

      </form>

      <h3 v-else> Email send correctly.</h3>
    </div>

  </div>

</template>

<style lang="scss" scoped>

form{
    div{
        margin-block: 1rem;
        width: 100%;
        *{
            width: 100%;
            padding: .5rem;
        }
        *.is_invalid{
            border: 1px solid red;
        }
    }
    button{
        padding: .5rem 1rem;
        background-color: burlywood;
        border: 0;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
        &:hover{
            background-color: rgb(254, 228, 196);
        }
        &:active{
            background-color: antiquewhite;
        }
    }
    .error{
        color: red;
        margin-block: .25rem;
        padding: 0;
        font-size: .8rem;
    }
}

</style>
