<template>
    <div style="height: 92vh; ">
        <div class="row justify-center" style="padding-top: 100px;  ">
            <div class="col-12 col-sm-6">
                <ContactForm />
                <q-card-actions align="center"> 
                    <!-- <q-btn round color="pink"  text-color="white" icon="mdi-instagram"  push @click="extLink('www.instagram.com/g.ikwegbu/')">
                        <q-tooltip>
                            @GIkwegbu
                        </q-tooltip>
                    </q-btn>  -->
                    <q-btn round color="primary" icon="mdi-twitter"  push @click="extLink('twitter.com/GIkwegbu')">
                        <q-tooltip>
                            @GIkwegbu
                        </q-tooltip>
                    </q-btn>
                    <q-btn round color="black" icon="mdi-github"  push @click="extLink('github.com/Mr-browny/')">
                        <q-tooltip>
                            Github
                        </q-tooltip>
                    </q-btn>
                    <q-btn round color="secondary" icon="mdi-whatsapp"  push @click="extLink('wa.me/2348101570258?text=Hello George Ikwegbu, How are you\?, can we talk\?.')">
                        <q-tooltip>
                            +2348101570258
                        </q-tooltip>
                    </q-btn>
                    <!-- <q-btn flat push @click="extLink('medium.com/@g.ikwegbu')">
                        <q-tooltip>
                           Medium
                        </q-tooltip>
                        <q-avatar >
                            <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-medium-1.png">
                        </q-avatar>
                    </q-btn> -->
                    <q-btn round color="grey" icon="mdi-linkedin" push  @click="extLink('www.linkedin.com/in/george-ikwegbu-56ab43156/')">
                            <q-tooltip>
                            George Ikwegbu
                        </q-tooltip>
                    </q-btn>
                    <q-btn flat push @click="extLink('dev.to/mrbrowny')">
                            <q-tooltip>
                            George Ikwegbu
                        </q-tooltip>
                        <q-avatar >
                            <img src="https://cdn.worldvectorlogo.com/logos/devto.svg">
                        </q-avatar>
                    </q-btn>
                </q-card-actions>
            </div>
             
        </div>
    </div>
</template>

<script>
import ContactForm from 'components/ContactForm'
 import { openURL } from 'quasar'
export default {
    name: 'contact',
    components: {
        ContactForm
    },
    methods: {
        extLink(link){
            openURL(`https://${link}`)
        }
    },
}
</script>