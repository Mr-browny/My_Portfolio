<template>
    <q-page padding>
        <div class="text-center">
            <div class="text-h4 text-grey"> 
                
                <q-input type="search" v-model="search" class="q-ma-lg" hint="Links to the Github repo is available too." placeholder="Browse through some of my Projects. " >
                    <template #prepend>
                        <q-icon name="mdi-magnify"  />
                    </template>
                </q-input>
            </div>
        </div>
        <div>

            <div class=" text-grey text-h5 text-center q-pa-lg" v-if="!filter_portfolio.length"> 
                Not done yet, Send me a Message if You need it, for a little token 😉
            </div>
            <q-card class="" style="width: 100%; " v-else> 
                <q-card-section class="q-pt-none" > 
                    <div class="q-pa-md" >
                        <div class="q-gutter-xs"> 
                            <div class="row q-col-gutter-md"> 
                                <div class="col-12 col-sm-3" v-for="port  in filter_portfolio" :key="port.id">
                                    <q-card class="  " v-ripple @click="viewProject(port.id)" >
                                        <!-- <q-img :src="port.img_url"  > -->
                                        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"  >
                                            <div class="absolute-top-left text-center bg-transparent" style="border-radius: 100%; ">
                                                <q-icon name="mdi-information" color="white" size="20px" />
                                                <q-tooltip>
                                                    {{ port.description  }}
                                                </q-tooltip>
                                            </div>
                                            <div class="absolute-bottom text-center">
                                                 {{ port.name   }}
                                            </div>
                                        
                                        </q-img> 
                                    </q-card>
                                </div>
                            </div>
                        </div>
                    </div>
                </q-card-section>  
            </q-card>
        </div> 
    </q-page>
</template>
 

<script>
import { mapGetters } from "vuex";

export default {
    name: 'portfolio',
    data() {
        return {
            search: '', 
        }
    },
    computed: {
        filter_portfolio(){
            return this.github_repos.filter(port => port.name.toLowerCase().match(this.search.toLowerCase())  || port.description.toLowerCase().match(this.search.toLowerCase()) )
        },
        ...mapGetters('repos', ['github_repos']),
        // ...mapGetters('repos', ['current_repos']),
    },
    methods: {
        viewProject(id){
            this.$router.push({name: 'project', params: {id: id}})
        }
    },
}
</script>