<template>
    <div class="d-flex justify-content-center">
        <div class="w-50">
            <h1 class="text-center">Link Tree</h1>
            <div class="list-group">
                <a :href="account.link" v-for="account in social_link" :title="account.label" class="list-group-item list-group-item-action">
                    <div class="d-flex">
                        <img :src="`/img/icons/${account.icon}`" :alt="account.label" class="img-fluid" width="24" height="24">
                        <span class="flex-fill text-center">
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