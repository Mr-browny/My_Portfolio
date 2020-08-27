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
        <div class="row" v-if="!current_repos.length">
            <div class="col-12 col-sm-3 q-pa-sm" v-for="(skeleton, index) in 8" :key="index">
                <q-card flat style="width: 100%">
                <q-skeleton height="250px" square />

                <q-card-section>
                    <q-skeleton type="text" class="q-mb-md" animation="pulse"  /> 
                </q-card-section>
                </q-card>
            </div>
        </div>
        <div v-else> 
            <div class=" text-grey text-h5 text-center q-pa-lg" v-if="!filter_portfolio.length"> 
                <div> Not done yet, Send me a Message if You need it, for a little token 😉 </div>
                <br>
                <q-btn :to="{name: 'contact'}" label="send Message " color="primary" rounded outline />
            </div>
            <q-card class="" style="width: 100%; " v-else> 
                <q-card-section class="q-pt-none" > 
                    <div class="q-pa-md" >
                        <div class="q-gutter-xs"> 
                            <div class="row q-col-gutter-md"> 
                                <div class="col-12 col-sm-3" v-for="(port, index ) in filter_portfolio" :key="port.id">
                                    <q-card class="  " v-ripple @click="viewProject(port.id)" >
                                        <!-- <q-img :src="port.img_url"  > -->
                                        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"  >
                                            <div class="absolute-top-left text-center bg-transparent" style="border-radius: 100%; ">
                                                <q-icon name="mdi-information" color="white" class="fa fa-pulse" size="20px" />
                                                <q-tooltip>
                                                    {{ port.description  }}
                                                </q-tooltip>
                                            </div>
                                            <div class="absolute-top-right text-center bg-transparent" style="border-radius: 100%; ">
                                                <q-chip :label="index % 2 == 0 ? 'Live' : 'Github'  " color="primary" rounded dense class="text-white" />
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
import { mapActions, mapGetters } from "vuex";

export default {
    name: 'portfolio',
    data() {
        return {
            search: '', 
        }
    },
    computed: {
        filter_portfolio(){
            return this.current_repos.filter(port => port.name.toLowerCase().match(this.search.toLowerCase())  || port.description.toLowerCase().match(this.search.toLowerCase()) )
        },
        // ...mapGetters('repos', ['github_repos']),
        ...mapGetters('repos', ['current_repos']),
    },
     mounted(){  
            this.load_github_repos() 
    },
    methods: {
        ...mapActions('repos', ['load_github_repos']),
        viewProject(id){
            this.$router.push({name: 'project', params: {id: id}})
        }
    },
}
</script>