<template>
    <q-page padding>
        <div>
            <q-btn color="secondary" rounded outline icon="mdi-chevron-left" @click="$router.go(-1)" />
        </div>
        <div class="text-right ">
            <div>
                <q-btn :to="{name: 'dashboard'}" flat class="text-grey">Admin </q-btn>
                |
                 <q-btn :to="{name: 'adminBlog'}" flat class="text-grey"> Blog Listing </q-btn>
                |
                <span> Blog Details </span>
            </div>
        </div>

        <div class="q-layout-padding q-mx-auto " style="max-width: 1000px; width: 100%; min-height: 100vh;"> 
            <!-- <Media /> -->
            <!-- The media shows if it's a video or the image pops up sha -->
            <q-card class="q-mx-auto" style="max-width: 100%; width: 100%; ">
                <img :src="blog.cover_image" />
                <q-card-section class="text-h3">
                    {{ blog.title  }}
                </q-card-section>
                <q-card-section>
                    <q-chip v-for="(tag, index) in blog.tags " :key="index" :color="index % 2 == 0 ? 'primary' : 'secondary' " :label=" '# ' +tag" class="text-white" />
                </q-card-section> 
                <q-card-section v-html="blog.body_html" > </q-card-section>
            </q-card>
        </div> 
    </q-page>
</template>

<style >
    a, a:visited, a:hover{
        text-decoration: none;
        color: #1976d2;
    }
    img{
        width: 100%;
        /* object-fit: cover; */
    }
</style>

<script>
import Media from "components/Test_Media";
import { mapGetters } from "vuex";
export default {
    name: 'singleBlogPost',
    components: {
        Media
    },
    computed: { 
        ...mapGetters('blogs', ['devTo_blogs']) ,
    },
    data(){
        return {
            blog: {}
        }
    }, 
    mounted(){ 
        this.load_blog(this.$route.params.blogId)
    },
    methods: {
         load_blog(id){
            const _ = this;   
            _.$axios.get(`https://dev.to/api/articles/${id}`)
            .then(res => {
                _.blog =  res.data 
            })
            .catch( err => {
                // _.$router.push( {name: 'adminBlog'} )
                _.$router.go(-1)
            }) 
        }
    }
}
</script>