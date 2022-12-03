<template>
  <section>
    <header class="row">
      <h2 class="col-lg-8">About Me</h2>
      <div class="col-2">
        <div class="btn-group btn-group-sm" role="group" aria-label="Basic outline">
          <button :class="{'active': lang=='english'}" type="button" class="btn btn-outline-dark" @click="changeLanguage('english')">english</button>
          <button :class="{'active': lang=='indonesia'}" type="button" class="btn btn-outline-dark" @click="changeLanguage('indonesia')">indonesian</button>
        </div>
      </div>
    </header>
    <main class="row flex-column flex-md-row-reverse align-items-center content-bg justify-content-between">
      <div class="col-2 text-center my-4 my-md-0">
        <img src="/img/rokugatsua-photo.jpeg" class="d-none d-md-block rounded img-thumbnail" alt="aan juniansyah photo">
        <img src="/img/rokugatsua-photo.jpeg" class="d-block mx-auto d-md-none rounded-circle img-thumbnail" alt="aan juniansyah photo">
      </div>
      <div class="col col-lg-9 mt-5" v-if="lang == 'indonesia'">
        <p v-for="content in aboutme.content.id">
          {{content}}
        </p>
      </div>
      <div class="col col-lg-9 mt-5" v-else-if="lang == 'english'">
        <p v-for="contentEn in aboutme.content.en">
          {{contentEn}}
        </p> 
      </div>
    </main>
    <div class="row flex-column flex-lg-row my-3 g-2">
      <footer class="col mb-5 mb-lg-0">
        <h4>
          Links
        </h4>
        <ul class="nav justify-content-start" >
          <li class="nav-item" v-for="soci in socials" :key="soci.id">
            <a :href="soci.link" class="nav-link text-secondary" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" :title="soci.name">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16" v-html="soci.icons">
                </svg>
              </i>
            </a>
          </li>
        </ul>
      </footer>
      <!-- <div class="col">
      </div> -->
    </div>
   
  </section>
</template>

<script>
import about from '../models/about'

export default {
  data(){
    return {
      aboutme: about,
      lang: 'english',
      skills: [
        {id:1, name: 'javascript', icon:'10440540451540553614.svg'},
        {id:2, name: 'PHP', icon:'966499331553750209.svg'},
        {id:3, name: 'Python', icon:'15774175881551942290.svg'},
        {id:4, name: 'Html', icon:'7078554321548141949.svg'},
        {id:5, name: 'CSS', icon:'367592651557997006.svg'},
        {id:6, name: 'Vue.js', icon:'3769845101552037062.svg'},
        {id:7, name: 'Bootstrap', icon:'6870940341536207300.svg'},
        {id:8, name: 'Codeigiter4', icon:'11831447901536211764.svg'},
        {id:9, name: 'Flask', icon:'20791471581536298181.svg'},
        {id:10, name: 'Express', icon:'8416740941580802960.svg'},
      ],
      socials: [
        {id:3, name: 'github', link:'https://github.com/rokugatsua', icons:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>'},
        {id:4, name: 'mail', link:'mailto:rokugatsua@outlook.co.id', icons:'<path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>'},
        {id:2, name: 'linkedin', link:'https://linkedin.com/in/juniansyahs', icons:'<path fill-rule="evenodd" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212h-2.4s.03-6.547 0-7.225h2.4v1.023a5.54 5.54 0 0 0-.016.025h.016v-.025c.32-.493.89-1.193 2.165-1.193 1.58 0 2.764 1.033 2.764 3.252v4.143h-2.4V9.529c0-.972-.348-1.634-1.217-1.634-.664 0-1.059.447-1.233.878-.063.154-.079.37-.079.586v4.035z"/>'},
        {id:1, name: 'twitter', link:"https://twitter.com/rokugatsua", icons:'<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>'},
        // {id:4, name: '', link:'', icons:''},
      ]
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
}
</script>