<template>
    <div class="q-mt-lg"> 
        <q-btn rounded flat  label="Back" icon="mdi-arrow-left"   @click="$router.go(-1)"/>

        <div class="row">
            <div class="col-12 col-sm-8">
                <Slides />
            </div>
            <div class="col-12 col-sm-4">
                
                <q-list bordered>
                    <q-item-label header>Languages Used</q-item-label>
                    <q-separator spaced />
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                        <q-icon color="primary" name="mdi-language-html5" />
                        </q-item-section>

                        <q-item-section>
                            <Progress />
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                        <q-icon color="primary" name="mdi-language-css3" />
                        </q-item-section>

                        <q-item-section>
                            <Progress />
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                        <q-icon color="primary" name="mdi-vuejs" />
                        </q-item-section>

                        <q-item-section>
                            <Progress />
                        </q-item-section>
                    </q-item>

                    <q-item-label header>Project Details</q-item-label>
                    <q-separator spaced />
                    <q-item> 
                        <q-item-section>
                            <q-item-label>Name</q-item-label>
                            <q-item-label caption lines="20">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
                        </q-item-section> 
                    </q-item>
                    <q-item> 
                        <q-item-section>
                            <q-item-label>Description</q-item-label>
                            <q-item-label caption lines="20">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
                        </q-item-section> 
                    </q-item>
                    <q-item> 
                        <q-item-section>
                            <q-item-label>Link To Repo</q-item-label>
                            <q-item-label caption lines="20">Github: https://www.githum.com/mr-browny/arghaf</q-item-label>
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
export default {
    name: 'Single-Project',
    components: {
        Slides,
        Progress,
    }
}
</script>