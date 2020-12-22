<template>
  <div class="row justify-content-around border rounded-3 p-lg-5 p-2 mb-3 bg-white">
    <div class="col-lg-5 ms-lg-5">
      <header class="mt-2 mt-lg-0"><h3>Posty</h3><hr></header>
      <main>
        <p>
          Posty adalah sebuah website untuk membuat postingan atau seperti blog yand dapat memberikan komentar pada post.
          website ini dibuat mengunakan <b>Vue.js 3, Vue route 4, Vuex, Tailwindcss 2</b>.
        </p>
        <p>
          Data post mengunakan <b> Jsonplaceholder </b> dan dideploy di <b>Netlify</b>
        </p>
        <p>
          <a href="http://posty-rokugatsua.netlify.app" target="_blank" rel="noopener noreferrer" class="text-decoration-none"> http://posty-rokugatsua.netlify.app</a>
        </p>
      </main>
    </div>
    <div class="col-md-8 col-lg-4">
      <a href="#" @click.prevent="showImage('posty-rokugatsua.netlify.app.png')">
        <img src="../assets/posty-rokugatsua.netlify.app.png" alt="posty"  class="img-fluid img-thumbnail">
      </a>
    </div>
  </div>
  <div class="row flex-lg-row-reverse bg-white justify-content-between border rounded-3 py-lg-5 px-lg-3 p-2 mb-3">
    <div class="col-lg-5">
      <header class="mt-2 mt-lg-0"><h3>Reseler Website</h3><hr></header>
      <main>
        <p>Website ini adalah sebuah web demo yang dibuat mengunakan <b>Codeigniter 4, Bootsrap css 4</b></p>
        <p>Website ini juga dilengkapi dengan admin area yang dibuat mengunakan <b>AdminLTE 3</b></p>
        <p class="text-primary">demo belum dapat dikunjungi</p>
      </main>
    </div>
    <div class="col-lg-7 mb-4 mb-lg-1">
      <div class="row g-3">
        <div class="col-md-6">
          <a href="#" @click.prevent="showImage('Reseler-Online2.png')">
            <img src="../assets/Reseler-Online2.png" alt="posty" class="img-fluid img-thumbnail">
          </a>
        </div>
        <div class="col-md-6">
          <a href="#" @click.prevent="showImage('Reseler-Online.png')">
            <img src="../assets/Reseler-Online.png" alt="posty" class="img-fluid img-thumbnail">
          </a>
        </div>
      </div>
    </div>
  </div>
  <div id="myModal" class="modal" tabindex="-1">
    <div class="modal-dialog modal-xl modal-fullscreen-md-down">
      <div class="modal-content p-3">
        <div class="position-fixed top-0 end-0">
          <div class="px-5 py-3">
            <button type="button" class="btn-close btn-lg bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        </div>
        <div class="w-auto">
          <img :src="img_path" alt="" class="img-fluid img-thumbnail">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Modal } from 'bootstrap';
export default {
  data(){
    return {
      img_path:''
    }
  },
  methods: {
    showImage(img) {
      let myModal = new Modal(window.document.getElementById('myModal'))
      this.img_path =  `/img/${img}`
      myModal.show()
    }
  }
  
}
</script>