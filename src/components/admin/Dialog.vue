<template>
  <div class="q-pa-md q-gutter-sm">   

    <q-dialog v-model="fullWidth" full-width >
        <q-card>
            <q-card-section>
            <div class="text-h6">{{ type }} Project</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <div class="row">
                    <div class="col-12 col-md-8">
                        <div class="q-pa-md">
                            <q-carousel swipeable animated v-model="slide" thumbnails infinite >
                                <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
                                <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
                                <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
                                <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
                            </q-carousel>
                        </div>
                        <div class="row justify-between">
                            <q-btn class=" " rounded outline color="secondary" label=" Image" icon="add" />
                            <q-btn class="" rounded outline color="negative" label=" Image" icon="remove" />
                        </div>
                    </div>
                    <div class="col-12 col-md-4 ">
                        Description
                        <div class="q-gutter-md">
                            <q-input v-model="name" label="Name" label-color="grey" outlined filled/> 
                            <q-input v-model="description" label="Description" autogrow label-color="grey" outlined filled/>  
                            <q-select filled v-model="language" multiple :options="['JavaScript', 'Vue', 'Quasar', 'Html', 'Css']" use-chips use-input label="Language" />
                            <q-input v-model="githubLink" label="Github Link" label-color="grey" outlined filled/> 
                            <q-input v-model="createdAt" label="Created At" label-color="grey" outlined filled/> 
                        </div>
                    </div>
                </div>
            </q-card-section>

            <q-card-actions align="right" class="bg-white text-teal">
            <!-- <q-btn color="secondary" rounded :label="type =='Edit' ?  'Update' : 'Add'" v-close-popup /> -->
            <q-btn color="secondary" @click="take_action(`${type =='Edit' ?  'Update' : 'Add'}`)" rounded :label="type =='Edit' ?  'Update' : 'Add'" v-close-popup />
            </q-card-actions>
        </q-card>
    </q-dialog> 
  </div>
</template>



<script>
import { mapActions, mapGetters } from "vuex";

export default { 
    props: ['type', 'from'],
    computed:{
        ...mapGetters('repos', ['github_repos']),
        ...mapGetters('repos', ['current_repos']),
    },
    data () {
        return { 
            repo_id: '',
            fullWidth: false, 
            slide: 1,
            name: '',
            language: null,
            description: '',
            githubLink: '',
            createdAt: '',
        }
    },  
    methods: {
        ...mapActions('repos', ['add_from_github_repo']),
        ...mapActions('repos', ['edit_current_repo']),
        open(id){
            const _ = this; 
            id ? _.repo_id = id : _.repo_id = '' /* This would add the id for general usage */

            _.fullWidth = !_.fullWidth
            var repo = {}
            //   Will use the id to fetch the partifular data
            if (_.from == 'github') {
                repo = _.github_repos.find( git => git.id == id)
                _.name = repo.name 
                _.description = repo.description 
                _.language = repo.language 
                _.githubLink = repo.html_url 
                _.createdAt = repo.created_at 
            } else if (_.from == 'current') {
                repo = _.current_repos.find( current => current.id == id)
                _.name = repo.name 
                _.description = repo.description  
                _.language = repo.language 
                _.githubLink = repo.html_url 
                _.createdAt = repo.created_at 
            } 
        },
        take_action(action){
           const _ = this
            var repo = {}
           switch (_.type) {
               case 'Add From Github': 
                    repo = _.github_repos.find( git => git.id == _.repo_id) 
                    _.add_from_github_repo(repo)
                   break;
                case 'New':
                    alert('new')
                    break;
                case 'Edit':
                     repo = _.current_repos.find( current => current.id == _.repo_id) 
                        repo.name = _.name  
                        repo.description = _.description  
                        repo.language = _.language 
                    _.edit_current_repo(repo)
                    break;
           
               default:
                   break;
           }
        }
    },
//   watch: {
//       display(val){ 
//           this.fullWidth = true 
//             
//       }
//   }
}
</script>