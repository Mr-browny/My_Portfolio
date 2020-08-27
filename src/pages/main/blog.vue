<template>
    <q-page padding >
        <div class="text-center">
            <div class="text-h4 text-grey"> 
                <q-input type="search" v-model="search" class="q-ma-lg" hint="Links to the Dev.to is available too." placeholder="Browse through some of my Blog Posts. " >
                    <template #prepend>
                        <q-icon name="mdi-magnify"  />
                    </template>
                </q-input>
            </div>
        </div> 
        
        <div class="row" v-if="!devTo_blogs.length">
            <div class="col-12 col-md-6 q-pa-sm" v-for="(skeleton, index) in 4" :key="index">
                <q-card flat style="width: 100%">
                <q-skeleton height="350px" square />

                <q-card-section>
                    <q-skeleton type="text" class="q-mb-md" />
                    <div class="row justify-center">
                        <q-skeleton type="QChip" width="45%" class="q-mr-sm"  animation="pulse" />
                        <q-skeleton type="QChip" width="45%" class="q-ml-sm" animation="pulse" />
                    </div>
                </q-card-section>
                </q-card>
            </div>
        </div>

        <div v-else>
            <div v-if="filter_blogs && !filter_blogs.length" class= "text-center text-grey text-h5 q-pa-lg " >
                <div> Blog not yet available. Why not send me a message, I will look it up and write an Article for you 😉</div>
                 <br>
                <q-btn :to="{name: 'contact'}" label="send Message " color="primary" rounded outline />
            </div>
            <div class="row" v-else>
                <div  class="col-12 col-md-6 q-pa-sm" v-for="(blog ,index) in filter_blogs" :key="index"> 
                    <q-card style="min-width: 400px; " class="text-center" @click="viewBlog(blog.id)">
                        <img :src="blog.cover_image" />
                        <q-card-section class="text-h5">
                            {{ blog.title  }}
                        </q-card-section>
                        <q-card-section> 
                            <q-chip v-for="(tag, index) in blog.tag_list " :key="index" :color="index % 2 == 0 ? 'primary' : 'secondary' " :label=" '# ' +tag" class="text-white" />
                        </q-card-section>  
                    </q-card>
                </div>
            </div>
        </div>
    </q-page>
</template>

<style > 
    img{
        width: 100%;
        /* object-fit: cover; */
    }
</style>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: 'blog',
     computed: { 
        ...mapGetters('blogs', ['devTo_blogs']) ,
        filter_blogs(){
            return this.devTo_blogs.filter(blog => blog.title.toLowerCase().match(this.search.toLowerCase()) || blog.tags.toLowerCase().match(this.search.toLowerCase())  )
        }
    },
    data() {
        return {
            search: ''
        }
    },
     mounted(){ 
        this.fetch_devTo_blogs()   
        console.log(this.devTo_blogs)
    },
    methods: {
        ...mapActions('blogs', ['fetch_devTo_blogs']),
        viewBlog(id){ 
            this.$router.push({name: 'singleBlog', params: {blogId: id}})
        }
    }
}
</script>