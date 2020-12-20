<template>
    <div class="row align-items-center h-100">
      <div class="col-lg-6 col-md-9">
        <h3>
         {{ motto }} <span class="text-primary">{{(count % 2 === 0) ? '|' : ''}}</span>
        </h3>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      motto: 'Hello, I am Jun. I am self taught programer web development mainly in Frontend.',
      count: 0
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