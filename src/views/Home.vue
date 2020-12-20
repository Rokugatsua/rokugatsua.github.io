<template>
    <div class="row align-items-center justify-content-between h-100">
      <div class="col-lg-6 col-md-9">
        <h1>
          Hello, I am Jun. 
        </h1>
        <h3>
         {{ motto }} <span class="text-primary">{{(count % 2 === 0) ? '_' : ''}}</span>
        </h3>
        <div class="row justify-content-around">
          <div class="col-4">
            <router-link to="/about" class="text-decoration-none">
            about me 
            <i class="text-primary ms-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </i>
            </router-link>
          </div>
          <div class="col-4">
            <router-link to="/project" class="text-decoration-none">
            my works
            <i class="text-primary ms-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </i>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="h1 d-none d-lg-flex flex-lg-column align-items-center justify-content-center">
          <span v-for="code in hiraganaBrand" :key="code">{{code}}</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      motto: 'I am self taught programmer web development mainly in frontend.',
      count: 0,
      hiraganaBrand: ['ろ','く','が','つ','あ']
    }
  },
  created() {
    this.countdown = () => setInterval(()=>{
        this.count++
      }, 1000)
    this.countdown()
  },
  destroy(){
    clearInterval(this.countdown)
  }

}
</script>