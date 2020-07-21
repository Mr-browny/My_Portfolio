<template>
    <q-page class="" style="  min-height: 0px; " >
       <div class="q-pa-md row justify-between q-pt-lg " style="padding-top: 150px; ">
            <div>
                 <q-card flat style="width: 100%; ">
                    <q-card-section class="">
                        <div class="text-h1">Hi</div>
                        <div class="text-h5 text-grey"> 
                            Welcome to my website. <br/> 
                            Freely checkout my Portfolio  
                            To see what I have been up to OR..  
                            Read Blog stories to Learn from my experience
                        </div>
                    </q-card-section>

                    <q-separator />

                    <q-card-actions align="right">
                        <q-btn rounded flat :to="{name: 'portfolio'}">
                            <q-icon color="primary" class="q-mr-sm" name="mdi-briefcase-plus" />
                            Portfolio
                        </q-btn>
                        <q-btn rounded flat :to="{name: 'blog'}">
                            Blog
                            <q-icon color="primary" class="q-ml-sm" name="mdi-pencil-plus" />
                        </q-btn>
                    </q-card-actions>
                </q-card>
            </div>
            <div class="gt-sm gt-xl ">
                <q-avatar size="500px" style="margin-top: -80px; ">
                    <img src="~assets/George.jpg" alt="Image of George Ikwegbu">
                </q-avatar> 
            </div>
            <div class="gt-xs lt-sm lt-md">
                <q-avatar size="300px" style="margin-top: -80px; ">
                    <img src="~assets/George.jpg" alt="Image of George Ikwegbu">
                </q-avatar> 
            </div>
       </div>
    </q-page>
</template>

<script>
import Slide from 'components/HomePageSlide'
export default {
    name: 'homepage',
    components: {
        Slide
    }
}
</script>