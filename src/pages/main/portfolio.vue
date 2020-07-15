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

            <div class=" text-grey text-h5 text-center q-pa-lg" v-if="!filter_portfolio.length">Not done yet, Send me a Message if You need it, for a little token :) </div>
            <q-card class="" style="width: 100%; " v-else> 
                <q-card-section class="q-pt-none" > 
                    <div class="q-pa-md" >
                        <div class="q-gutter-xs"> 
                            <div class="row q-col-gutter-md"> 
                                <div class="col-12 col-sm-3" v-for="port  in filter_portfolio" :key="port.id">
                                    <q-card class="  " v-ripple @click="viewProject(port.id)" >
                                        <q-img :src="port.img_url"  >
                                            <div class="absolute-top-left text-center bg-transparent" style="border-radius: 100%; ">
                                                <q-icon name="mdi-information" color="white" size="20px" />
                                                <q-tooltip>
                                                    {{ port.summary  }}
                                                </q-tooltip>
                                            </div>
                                            <div class="absolute-bottom text-center">
                                                 {{ port.title   }}
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
export default {
    name: 'portfolio',
    data() {
        return {
            search: '',
            portfolios: [
                { id: '23432ererq', title: 'Whatsapp Wizzard', img_url: 'https://cdn.quasar.dev/img/parallax2.jpg', summary: 'Communicate', tech: ['vue', 'css', 'quasar',]   },
                { id: 'dfasdfasdfa', title: 'George', img_url: 'https://cdn.quasar.dev/img/parallax2.jpg', summary: 'Communicate', tech: ['vue', 'html', 'css',]  },
                { id: 'xcvxcvxcvz', title: 'Inlsta Wizzard', img_url: 'https://cdn.quasar.dev/img/parallax2.jpg', summary: 'xxx', tech: ['vue', 'html', 'css', 'quasar',]  },
                { id: 'erqwerqwerqwe', title: 'Face Wizzard', img_url: 'https://cdn.quasar.dev/img/parallax2.jpg', summary: 'Communicate', tech: [ 'html', 'css', 'quasar',]   },
                { id: 'vczxcvzxcvzx', title: 'Easy Pharmacy Wizzard', img_url: 'https://cdn.quasar.dev/img/parallax2.jpg', summary: 'Communicate', tech: ['nuxt', 'html', 'css', 'quasar',]   },
            ]
        }
    },
    computed: {
        filter_portfolio(){
            return this.portfolios.filter(port => port.title.toLowerCase().match(this.search.toLowerCase()) || port.summary.toLowerCase().match(this.search.toLowerCase()) || port.tech.includes(this.search.toLowerCase()) )
        }
    },
    methods: {
        viewProject(id){
            this.$router.push(`/main/portfolio/${id}`)
        }
    },
}
</script>