<template>
    <div class="q-mt-lg"> 
        <q-btn rounded flat  label="Back" icon="mdi-arrow-left"   @click="$router.go(-1)"/>

        <div class="row">
            <div class="col-12 col-md-8 ">
                <Slides />
            </div>
            <div class="col-12 col-md-4 ">
                
                <q-list bordered> 
                    <q-separator spaced /> 

                    <q-item-label header>Project Details</q-item-label>
                    <q-separator spaced />
                    <q-item> 
                        <q-item-section>
                            <q-item-label caption>Name</q-item-label>
                            <q-item-label  lines="20">{{ fetch_repo.name }}</q-item-label>
                        </q-item-section> 
                    </q-item>
                    <q-item> 
                        <q-item-section>
                            <q-item-label caption>Description</q-item-label>
                            <q-item-label  lines="20">{{ fetch_repo.description }}</q-item-label>
                        </q-item-section> 
                    </q-item>
                    <q-item> 
                        <q-item-section>
                            <q-item-label caption>Language</q-item-label>
                            <q-item-label  lines="20">{{ fetch_repo.language }}</q-item-label>
                        </q-item-section> 
                    </q-item>
                    <q-item> 
                        <q-item-section>
                            <q-item-label caption>Link To Repo</q-item-label>
                            <!-- <q-item-label  lines="20">Github: {{ fetch_repo.url }}</q-item-label> -->
                            <q-item-label  lines="20">Github:  <a :href="fetch_repo.html_url" rel="noopener" target="_blank">Github Link</a></q-item-label>
                        </q-item-section> 
                    </q-item>
                </q-list>
            </div>
        </div> 
    </div>
</template>


<script>
import Slides from 'components/ProjectCarousel'
import Progress from 'components/LinearProgressBar'
import { mapGetters } from "vuex";
export default {
    name: 'Single-Project',
    components: {
        Slides,
        Progress,
    },
    computed: { 
        ...mapGetters('repos', ['github_repos']),
        // ...mapGetters('repos', ['current_repos']),
        fetch_repo(){
            const _ = this;
            const id = _.$route.params.id
            // return _.github_repos.find( repo => repo.id == id)
            if (_.github_repos.find( repo => repo.id == id)) {
                return _.github_repos.find( repo => repo.id == id)
            } else {
                _.$router.push({name: 'portfolio' })
            }
        }
    },
    mounted() {
        
    },
    methods: { 

    }
}
</script>