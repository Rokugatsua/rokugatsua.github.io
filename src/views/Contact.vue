<template>
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <h1 class="text-center h1 fw-bolder">Let's Work Together</h1>
      <p class="text-center fs-6 text-secondary">How can i help you?</p>
      <div class="alert alert-success alert-dismissible fade show" v-show="submision.success" role="alert">
        Thanks you for contact me. i will response fast as posible.
        <button type="button" @click="hide('success')" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      <div class="alert alert-danger alert-dismissible fade show" v-show="submision.failed" role="alert">
        Failed, something error.
        <button type="button" @click="hide('failed')" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>

      <form name="contact-me" v-on:submit="mailme" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact-me" />
        <div class="mb-3">
          <label for="emailInput" class="form-label">E-mail</label>
          <input type="email" :class="['form-control', err.email ? 'is-invalid' :'']" id="emailInput" v-model="form.email">
        </div>
        <div class="mb-3">
          <label for="nameinput" class="form-label">Name</label>
          <input type="text" :class="['form-control', err.name ? 'is-invalid' :'']" id="nameinput" v-model="form.name">
        </div>
        <div class="mb-3">
          <label for="msginput" class="form-label">Tell about your project</label>
          <textarea id="msginput" rows="4" :class="['form-control', err.msg ? 'is-invalid' :'']" v-model="form.message"></textarea>
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
import axios from 'axios'

export default {
  data(){
    return {
      form:{
        email:'',
        name:'',
        message:''
      },
      err:{
        email: false,
        name: false,
        msg: false,
      },
      submision: {
        success: false,
        failed: false
      }
    }
  },
  methods:{
    // encode(data) {
    //   return Object.keys(data)
    //     .map(
    //       key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    //     )
    //     .join("&")
    // },
    async mailme(event){
      event.preventDefault()
      if (this.form.email && this.form.name.length >= 3 && this.form.message ) {
        // console.log('form submision')
        try {
          const encode = (data) => Object.keys(data).map(
             key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join("&")

          const axiosConfig = {
            header: { "Content-Type": "application/x-www-form-urlencoded" }
          };
          const response = await axios.post("/", 
            encode({
              "form-name": "contactMe", ...this.form
            }), axiosConfig
          )
          console.log(response.data)

          console.log('Form successfully submitted')
          this.submision.success = true
          this.email = ''
          this.name = ''
          this.msg = ''

        } catch (err) {
          console.log(err)
          console.log(err.message)
          this.submision.failed = true
        }


        // fetch('https://rokugatsua.my.id/',{
        //   method:'POST',
        //   headers: {"Content-Type":"application/x-www-form-urlencoded"},
        //   body: JSON.stringify({email:this.email, name:this.name, msg:this.msg})
        // })
        //   .then(() => {
        //   })
        //   .catch((error) => this.submision.failed = true)

      } else {        
        if (!this.email) this.err.email = true
        if (this.name.length < 3) this.err.name = true
        if (!this.msg) this.err.msg = true
      }
    },
    hide(val) {
      if (val === 'success') this.submision.success = false
      if (val === 'failed') this.submision.failed = false
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