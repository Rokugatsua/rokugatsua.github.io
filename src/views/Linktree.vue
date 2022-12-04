<template>
    <div class="row justify-content-center">
        <div class="col-sm-10 col-md-8 col-lg-6">
            <h1 class="text-center h1 fw-bolder">Link Tree</h1>
            <div class="list-group">
                <a :href="account.link" v-for="account in social_link" :title="account.label" class="list-group-item list-group-item-action d-flex justify-content-center">
                    <div class="col-6">
                        <img :src="`/img/icons/${account.icon}`" :alt="account.label" class="img-fluid mx-4" width="24" height="24">
                        <span class="">
                            {{account.label}}
                        </span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import links from '../models/links.js'

export default {
    data(){
        return {
            social_link: links.social
        }
    }

}
</script>