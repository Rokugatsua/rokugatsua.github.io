<template>
    <div class="row">
      <h2 class="col-lg-8">Games</h2>
      <div class="col-2">
        <div class="btn-group btn-group-sm" role="group" aria-label="Basic outline">
          <button :class="{'active': lang=='english'}" type="button" class="btn btn-outline-dark" @click="changeLanguage('english')">english</button>
          <button :class="{'active': lang=='indonesia'}" type="button" class="btn btn-outline-dark" @click="changeLanguage('indonesia')">indonesian</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:" width="15" height="16">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
          Some games project maybe not on updated, if you want see more detail check my
          <img src="/img/icons/itchio-textless-black.svg" width="16" height="16" class="mx-2">
          <a href="http://rokugatsua.itch.io">Itch.io.</a>
        </div>
      </div>
    </div>
    <div class="row justify-content-around border rounded-3 p-lg-5 p-2 mb-3 bg-white" v-for="game in games">
        <div class="col-lg-8 ms-lg-8">
            <header class="mt-2 mt-lg-0"><h3>{{game.title}}</h3><hr></header>
            <main>
                <div v-if="lang == 'english'">
                    <p >{{game.desc.en}}</p>
                    <ul>
                        <li v-for="taskEn in game.task.en" > {{taskEn}}</li>
                    </ul>

                </div>
                <div v-if="lang == 'indonesia'">
                    <p> {{game.desc.id}}</p>
                    <ul>
                        <li v-for="taskId in game.task.id"> {{taskId}}</li>
                    </ul>
                </div>
                <p class="mt-4">link game : <a :href="game.link">{{game.link}}</a></p>
            </main>
        </div>
        <div class="col-md-8 col-lg-4">
            <img :src="('/img/'+ game.source)" :alt="game.title" class="img-fluid img-thumbnail" >
        </div>
    </div>
</template>

<script>
import project from '../models/project';

export default({
    data(){
        return {
            lang:'english',
            games: project.games
        }
    },
    methods: {
    changeLanguage(language){
      if (this.lang == language) {
        return
      }
      this.lang = language
    }
  }
})
</script>