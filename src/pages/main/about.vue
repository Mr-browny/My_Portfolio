<template>
    <q-page class="q-gutter-lg" >
       <div class="row justify-center"  style="height: 92vh; ">
           <div class="col-12 col-sm-8 ">
               <q-card flat class="q-pt-lg" style="width: 100%; padding-top: 100px; height: 100%;  ">
                    <q-card-section class="">
                        <div class="text-h4">About Me</div>
                        <q-separator inset class="q-ma-lg" />
                        <div class=""> 
                            My name is George Ikwegbu Iheanyichukwu Chinedum. <br>
                            A FrontEnd Software Developer, with cutting edge technologies at my disposal.  
                        </div>
                    </q-card-section> 

                    <q-card-section class=" text-grey">
                         I began my Dev career in my 3rd Year in college. <br/> 
                          Before then, I was a fan of Embedded systems, where I built 
                         Simple Automated Systems, ranging from 'Clap Activated Switches, to Digital Batch counters'. 
                    </q-card-section>

                    <q-card-section class=" text-grey">
                        Smoking Lead (Soldering Lead) was not my thing. So, I discovered I could have fun and still earn a decent Living from writing codes.
                        Started my Tech journey, and Still on it...
                    </q-card-section>

                    <q-card-section class="">
                       In my Final Year, I started up a business, called 'George Delivery Service (RC: 2795002)', where I basically Delivered Goods and Services to and from Clients.
                    </q-card-section> 

                    <q-card-section class="text-grey">
                       I play Small Forward in Basketball, which kinda makes me a good team player even in tech world.
                       I am open to suggestions, and profer solutions to problems. <span :class="$q.dark.isActive ? 'text-white' : 'text-dark'">Hey, Why not give me a try?</span>
                    </q-card-section> 
                 </q-card>
           </div>
           <div class="col-12 col-sm-4 ">
               <img src="~assets/George_about.jpg" class="gt-xs" alt="Image of George Ikwegbu" width="100%" height="100%">
           </div>
       </div>

       <div class="row justify-center" >
            <div class="col-12 col-sm-4">
                <img src="~assets/George_about_dark.jpg" alt="Image of George Ikwegbu" width="100%" height="100%">
            </div>
           <div class="col-12 col-sm-8 ">
               <q-card flat class="q-pt-lg" style="width: 100%; ">
                    <q-card-section class="">
                        <div class="text-h4">Skill Set</div>
                    </q-card-section> 
                        <q-separator inset class="q-ma-lg" /> 
                    <Skills />
                     
                 </q-card>
           </div>
          
       </div>
    </q-page>
</template>

<script>
import Slide from 'components/HomePageSlide'
import Skills from 'components/SkillSet'
export default {
    name: 'about',
    components: {
        Slide,
        Skills
    }
}
</script>