<template>
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <h1 class="text-center h1 fw-bolder">Let's Work Together</h1>
      <p class="text-center fs-6 text-secondary">How can i help you?</p>
      <form @submit.prevent="mailme">
        <div class="mb-3">
          <label for="emailInput" class="form-label">E-mail</label>
          <input type="email" :class="['form-control', err.email ? 'is-invalid' :'']" id="emailInput" v-model="email">
        </div>
        <div class="mb-3">
          <label for="nameinput" class="form-label">Name</label>
          <input type="text" :class="['form-control', err.name ? 'is-invalid' :'']" id="nameinput" v-model="name">
        </div>
        <div class="mb-3">
          <label for="msginput" class="form-label">Tell about your project</label>
          <textarea id="msginput" rows="4" :class="['form-control', err.msg ? 'is-invalid' :'']" v-model="msg"></textarea>
        </div>
        <div class="row justify-content-center">
          <button type="submit" class="btn btn-primary rounded-pill col-3 fw-bolder">Send</button>
        </div>
      </form>
      <hr>
      <p class="text-center">or <a href="mailto:rokugatsua@outlook.co.id" class="fs-5 fw-bold text-decoration-none text-dark">rokugatsua@outlook.co.id</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      email:'',
      name:'',
      msg:'',
      err:{
        email: false,
        name: false,
        msg: false
      }
    }
  },
  methods:{
    mailme(){
      if (this.email && this.name >= 3 && this.msg ) {

      } else {        
        if (!this.email) this.err.email = true
        if (this.name.length < 3) this.err.name = true
        if (!this.msg) this.err.msg = true
      }
    }
  },
  watch: {
    email(newValue, oldValue) {
      if (newValue) this.err.email = false
    },
    name(newValue, oldValue) {
      if (newValue.length >= 3) this.err.name = false
    },
    msg(newValue, oldValue) {
      if (newValue) this.err.msg = false
    }
  }
}
</script>