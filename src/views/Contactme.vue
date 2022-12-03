<template>
    <section>
        <header>
            <h1>Contact</h1>
        </header>
        <main>
            <div class="list-group">
                <a :href="contact.link" v-for="contact in contactLink" class="list-group-item list-group-item-action d-flex">
                    <div class="ms-2">
                        <img :src="`/img/icons/${contact.icon}`" :alt="contact.label" class="img-fluid mx-4" width="32" height="32">
                    </div>
                    <div>
                        <div class="fw-bold">{{contact.label}}</div>
                        <span>
                            {{contact.user}}
                        </span>
                    </div>
                </a>
            </div>
        </main>
    </section>

</template>

<script>
import links from '../models/links.js'

export default {
    data(){
        return {
            contactLink: links.contact
        }
    }

}
</script>