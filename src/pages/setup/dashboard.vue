<template>
    <q-page padding> 
        <div class=" q-mt-lg">
            <div class="row">
                <div class="col-12 col-sm-4 q-pa-sm" v-for="(short , index) in shortcuts" :key="index" >
                    <q-card class="ext-center">
                        <q-card-section>
                            <div class="text-secondary">
                                {{ parseInt(short.count).toLocaleString() }}
                            </div>
                        </q-card-section>
                        <q-separator horizontal inset />
                        <q-card-section>
                        <div class="text-h4 text-grey">
                            {{ short.title}}
                            </div>
                        </q-card-section>
                    </q-card>
                </div> 
            </div>  
            <div class="q-pa-md q-gutter-sm"  >
                <q-editor v-model="about" min-height="10rem" placeholder="About George..." />

                <q-card flat bordered>
                    <q-card-section>
                        <pre style="white-space: pre-line">{{ about }}</pre>
                    </q-card-section>
                </q-card>

                <q-card flat bordered>
                    <q-card-section v-html="about" />
                </q-card>
            </div>
            <!-- <Markdown />  -->
            <Repos /> 
            <Media /> 
            <Test /> 
        </div>
    </q-page>
</template>

<script>
import  Repos from "components/admin/GitRepos"; 
import  Media from "components/QMedia"; 
import  Test from "components/Test_Media"; 
import  Markdown from "components/QMarkdown"; 
import { mapActions, mapGetters } from "vuex";
export default {
    name: "dashboard",
    components: {
        Repos, 
        Media, 
        Test, 
        Markdown, 
    },
    computed:{
        ...mapGetters('repos', ['github_repos'])
    },
    data(){
        return{
            shortcuts: [
                { title: 'Received Messages', count: '100000'},
                { title: 'Blog Post', count: '400'},
                { title: 'Portfolio', count: '8900'},
            ],
            about: '',
        }
    },
    mounted(){
        this.load_github_repos()
        console.log(this.github_repos)
    },
    methods: {
        ...mapActions('repos', ['load_github_repos']),
    }
}
</script>